def projectName = 'conference'

def gitCommit() {
    sh "git rev-parse --short HEAD > GIT_COMMIT"
    def gitCommit = readFile('GIT_COMMIT').trim()
    sh "rm -f GIT_COMMIT"
    return gitCommit
}
def getVersion() {
    def version = readFile('VERSION').trim()
    return version
}
def imagesName = ""
def imagesNameProd = ""
node('centos7') {
    imagesName = "harbor.test.digi-sky.com/fed/${projectName}:latest"
    stage('get Code') {
        git branch: 'dev', credentialsId: '51f7b7a8-c09e-46fc-bbbc-818bef1b39e0', url: "git@git.ppgame.com:fed/${projectName}.git"
    }
    stage('Image Build'){
        withDockerRegistry([credentialsId: 'a6740d9e-6dd6-4544-93ca-985319e4946d', url: 'https://harbor.test.digi-sky.com']) {
            docker.build(imagesName)
        }
    }
    stage('Image Push to Dev'){
        sh "docker push ${imagesName}"
    }
    stage('Upgrade Image Dev'){
        rancher confirm: true, credentialId: '58bcf8bd-67eb-4284-9c21-a5b19395ba7e', endpoint: 'https://rancher.test.digi-sky.com/v2-beta', environmentId: '1a5', environments: '', image: imagesName, ports: '', service: "${projectName}/${projectName}-fed", timeout: 600
    }
}

stage 'deployment'
timeout(time:1, unit:'DAYS') {
    input 'Do you approve deployment?'
}

node('centos7'){
    imagesNameProd = "ccr.ccs.tencentyun.com/digisky-plat/${projectName}-home:${getVersion()}-git${gitCommit()}.${BUILD_NUMBER}"
    stage('Tag Image'){
        sh "docker tag ${imagesName} ${imagesNameProd}"
    }
    stage('Push Image to Prod'){
        sh "docker push ${imagesNameProd}"
    }
    stage('Delete Images'){
        sh "docker rmi ${imagesNameProd}"
        sh "docker rmi ${imagesName}"
    }
}
