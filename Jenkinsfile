pipeline {
    agent any // Use any available agent

        stage('Run Lighthouse CI') {
            steps {
                withCredentials([string(credentialsId: '4TP41Xnq7eKhhZK8:63041757:EYqAIjq6', variable: 'LHCI_GITHUB_APP_TOKEN')]) {
                    sh 'lhci autorun'
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

}



