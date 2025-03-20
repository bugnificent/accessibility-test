pipeline {
    agent any

    tools {
        nodejs 'Node.JS 23.x'
    }

    environment {
        CHROME_PATH = '/usr/bin/google-chrome-stable'
        LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL = "${env.BUILD_URL}" // Corrected line
    }

    stages {
        stage('Machine Setup') {
            steps {
                sh '''
                    #!/bin/bash
                    set -euxo pipefail

                    # Add Chrome's apt-key
                    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee -a /etc/apt/sources.list.d/google.list
                    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

                    # Add Node's apt-key
                    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

                    # Install NodeJS and Google Chrome
                    sudo apt-get update
                    sudo apt-get install -y nodejs google-chrome-stable
                '''
            }
        }

        stage('Install Dependencies and Build') {
            steps {
                sh '''
                    #!/bin/bash
                    set -euxo pipefail

                    npm install
                    npm run build
                '''
            }
        }

        stage('Run Lighthouse CI') {
            steps {
                sh '''
                    #!/bin/bash
                    set -euxo pipefail

                    npm install -g @lhci/cli@0.14.x
                    lhci autorun
                '''
            }
        }
    }
}
