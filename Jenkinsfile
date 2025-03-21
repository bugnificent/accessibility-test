pipeline {
    agent any

    environment {
         LHCI_GITHUB_APP_TOKEN = '4TP41Xnq7eKhhZK8:63041757:EYqAIjq6'
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



