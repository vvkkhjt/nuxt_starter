#!groovy
@Library('jk-pipeline-library') _

def namespace = 'namespace'
def artifactId = 'test-fed'

def imgHubQA = "hub.docker.com"
def devDeploymentname = "test-fed"
def devNamespace = "plat-test"

skyBuild(script: this) {
  imgName = "${namespace}/${artifactId}"
}

skyDeploy(script: this,
    stageName: "Deploy TestEnv",
    credInfo: "plat-test-ol@plat-dev-121") {
    jkabsTask('task.id': 'kubectl_set',
            'registry.url': "${imgHubQA}",
            'image.name': "${namespace}/${artifactId}",
            'build.pipeline.version': "${env.PIPELINE_VERSION}",
            'k8s.deploymentname': "${devDeploymentname}",
            'k8s.deployment.namespace': "${devNamespace}")
}
