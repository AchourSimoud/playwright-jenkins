pipeline {
    agent {
        docker {
            image "mcr.microsoft.com/playwright:v1.51.0-noble"
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

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}