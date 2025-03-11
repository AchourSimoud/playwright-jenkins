pipeline {
    agent {
        docker {
            image "mcr.microsoft.com/playwright"
            args '--entrypoint=""'
        }
    }

    stages {
        stage('installation') {
            steps {
                sh "npm ci"

            }
        }

        stage('lancer tous les tests') {
            steps {
                sh"  npx playwright test"
            }
        }
    }

    post{
        always {
            archivarchiveArtifacts artifacts: 'reports/*.json', fingerprint: true        
        }
    }
}