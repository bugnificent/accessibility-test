pipeline {
    agent any // Use any available agent

    stages {
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



