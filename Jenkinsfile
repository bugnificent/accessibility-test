pipeline {
    agent any

    environment {
         LHCI_GITHUB_APP_TOKEN = credentials('LHCI_GITHUB_TOKEN')
    }

    stages {
        stage('Run Lighthouse CI') {
            steps {
                    sh 'lhci autorun'
                }
            }
        }
    }

    post {
        failure {
            echo 'Lighthouse CI testing failed.'
        }
        success {
            echo 'Lighthouse CI testing completed successfully.'
        }
    }



