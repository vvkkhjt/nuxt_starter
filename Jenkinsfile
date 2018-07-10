#!groovy
@Library('jk-pipeline-library') _

namespace = 'digisky-plat'
artifactId = 'docs-fed'

jkBuild(script: this) {
    kubconfig = [
        'credId': 'plat-test-ol',
        'serverUrl': 'https://rancher-dev.digisky.com/k8s/clusters/c-jp5q9'
    ]

    kubectl_set = [
        'deploymentname': 'docs-fed',
        'namespace': 'plat-docs'
    ]
}
