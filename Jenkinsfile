pipeline {
    agent {
        docker {
            image 'node:18' // Use the official Node.js image
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install pa11y'
            }
        }

        stage('Run Pa11y') {
            steps {
                sh 'npx pa11y https://yusufasik.com --runner axe --reporter html > access-report-axe.html'
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'access-report-axe.html', fingerprint: true
            }
        }
    }

    post {
        failure {
            echo 'Pa11y accessibility testing failed.'
        }
        success {
            echo 'Pa11y accessibility testing completed successfully.'
        }
    }
}



