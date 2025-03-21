pipeline {
    agent any // Use any available agent

    stage('Install CLI') {
        steps {
            sh 'npm install -g @lhci/cli@0.14.x'
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



