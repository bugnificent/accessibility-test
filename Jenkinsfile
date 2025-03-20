pipeline {
    agent any

    tools {
        nodejs 'Node.JS 23.x'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Lighthouse CI') {
            steps {
                sh 'npm install -g @lhci/cli@0.14.x'
                sh 'lhci autorun'
            }
        }
    }
}
