FROM ubuntu:16.04
RUN echo "deb apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD" \
 && echo 'deb http://repo.sawtooth.me/ubuntu/1.0/stable xenial universe' >> /etc/apt/sources.list \
 && apt-get update
RUN apt-get install -y --allow-unauthenticated -q \
    python3-pip \
    python3-sawtooth-sdk
RUN pip3 install \
    psycopg2-binary
WORKDIR /project/sawtooth-simple-supply
ENV PATH $PATH:/project/sawtooth-simple-supply/bin