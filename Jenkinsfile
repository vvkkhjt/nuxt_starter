#!groovy
@Library('jk-pipeline-library') _

def registry = 'hub.digi-sky.com'
def registryCCR = 'ccr.ccs.tencentyun.com'

def namespace = 'digisky-plat'
def artifactId = 'oa_kpi-fed'

jkNode(label: "java") {

    jkStage(name: 'Checkout Code') {
        checkout scm
        sh "git clean -fdx"
        sh "git reset --hard"
    }

    jkGetPipelineVersion()
    jkSetBuildInfo()

    jkStage(name: 'build') {
      jkabsTask(
        'task.id': 'semver',
        'artifact.version': "${env.PIPELINE_VERSION}"
      )
    }

    jkStage(name: 'imgbuild', container: 'dind') {
        docker.withRegistry("https://${registry}", 'imgbuild-harbor') {
          imgInner = "${namespace}/${artifactId}:${env.PIPELINE_VERSION}"
          imgName = docker.build(imgInner)
          imgName.push()
        }
    }
}

jkStage(name: "sync image to ccr?", manual: true) {
  jkNode(label: "java", container: 'dind') {
    docker.withRegistry("https://${registry}", 'imgbuild-harbor') {
      imgName.pull()
      sh "docker tag ${registry}/${imgInner} ${imgInner}"
    }
    docker.withRegistry("https://${registryCCR}", 'imgbuild-ccr') {
      imgName.push()
    }
  }
}
