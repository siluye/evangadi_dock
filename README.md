## How to run yaml
Once you clone the project:
1. make sure that you are on the main directory where the .yaml file exist.
2. run the following command:
    - docker-compose up -d, this will build the images and run the services (client & server)
    - To stop the services, run "docker-compose stop"
    - To strat the services, run "docker-compose start"
    - Warning!! do not use "docker-compose down" unless otherwise you want to stop and also remove the containers.