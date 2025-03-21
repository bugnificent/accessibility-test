pipeline {
    agent any // Use any available agent

    stages { // Add the stages block here
        stage('Install CLI') {
            steps {
                sh 'sudo npm install -g @lhci/cli@0.14.x'
            }
        }
        stage('Run Lighthouse CI') {
            steps {
                // Run Lighthouse CI autorun
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




