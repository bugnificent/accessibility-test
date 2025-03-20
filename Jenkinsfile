pipeline {
    agent any

    tools {
        nodejs 'Node.JS 16.x'
    }

    environment {
        CHROME_PATH = '/usr/bin/google-chrome-stable'
        LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL = "${env.BUILD_URL}"
    }

    stages {
        stage('Machine Setup') {
    steps {
        sh 'bash -c "set -euxo pipefail; echo \\"deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main\\" >> /etc/apt/sources.list.d/google.list; wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -; curl -sL https://deb.nodesource.com/setup_16.x | bash -; apt-get update; apt-get install -y nodejs google-chrome-stable"'
    }
}

        }

        stage('Install Dependencies and Build') {
            steps {
                sh 'bash -c "set -euxo pipefail; npm install; npm run build; export CHROME_PATH=$(which google-chrome-stable); export LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL=\\"$BUILD_URL\\""'
            }
        }

        stage('Run Lighthouse CI') {
            steps {
                sh 'bash -c "set -euxo pipefail; npm install -g @lhci/cli@0.14.x; lhci autorun"'
            }
        }
    }


