FROM ubuntu:18.04
RUN apt update && \
    apt upgrade -y && \
apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -E
RUN apt install nodejs -y
RUN npm install pm2 -g
RUN mkdir brackets-checker
ADD . ./brackets-checker
WORKDIR ./brackets-checker
RUN npm install
RUN pm2 start ./bin/www 
EXPOSE 3000