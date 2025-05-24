pipeline {
  agent any
  stages {
    stage('Build Docker Image') {
      steps {
        bat 'docker build -t task-manager-lite .'
      }
    }
    stage('Run Docker Container') {
      steps {

        bat '''
        docker rm -f task-manager-lite || exit 0
        docker run -d -p 8080:80 --name task-manager-lite task-manager-lite
        '''
      }
    }
  }
}
