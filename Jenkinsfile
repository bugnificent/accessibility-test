pipeline {
    agent any

    tools {
        nodejs 'Node.JS 23.x'
    }

    environment {
        CHROME_PATH = '/usr/bin/google-chrome-stable'
        LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL = "${env.BUILD_URL}"
    }

    stages {
        stage('Machine Setup') {
            steps {
                sh '''
                    #!/bin/bash  # Explicitly use bash
                    set -euxo pipefail

                    # ... (rest of your script)
                '''
            }
        }

        stage('Install Dependencies and Build') {
            steps {
                sh '''
                    #!/bin/bash # Explicitly use bash
                    set -euxo pipefail

                    # ... (rest of your script)
                '''
            }
        }

        stage('Run Lighthouse CI') {
            steps {
                sh '''
                    #!/bin/bash # Explicitly use bash
                    set -euxo pipefail

                    # ... (rest of your script)
                '''
            }
        }
    }
}
