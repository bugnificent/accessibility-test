pipeline {
    agent any

    tools {
        nodejs 'Node.JS 23.x' // Ensure this matches the name in Jenkins
    }

    stages {
        stage('Install Lighthouse CI') {
            steps {
                sh 'npm install -g @lhci/cli@0.14.x'
            }
        }

        stage('Run Lighthouse CI') {
            steps {
                sh 'lhci autorun'
            }
        }
    }
}
