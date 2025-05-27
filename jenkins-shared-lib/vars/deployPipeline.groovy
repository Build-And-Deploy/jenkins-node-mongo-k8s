
def call(body) {
    def params = [:]
    body.resolveStrategy = Closure.DELEGATE_FIRST
    body.delegate = params
    body()

    pipeline {
        agent any

        stages {
            stage('Test') {
                steps {
                    echo "Pipeline running..."
                }
            }

            stage('Print') {
                steps {
                    echo "Param: ${params.param}"
                }
            }
        }

    }
}