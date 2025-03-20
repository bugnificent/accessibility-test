pipeline {
    agent any

    tools {
        nodejs 'NodeJS 23.x' 
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Lighthouse CI') {
            steps {
                bat 'npm install -g @lhci/cli@0.14.x'
                bat 'lhci autorun'
            }
        }
    }
}
