FROM ubuntu:16.04
RUN \
 apt-get update \
 && apt-get install -y -q curl gnupg \
 && curl -sSL 'http://p80.pool.sks-keyservers.net/pks/lookup?op=get&search=0x8AA7AF1F1091A5FD' | apt-key add -  \
 && echo 'deb http://repo.sawtooth.me/ubuntu/1.0/stable xenial universe' >> /etc/apt/sources.list \
 && apt-get update
RUN apt-get install -y -q python3-sawtooth-sdk
WORKDIR /project/sawtooth-simple-supply
ENV PATH $PATH:/project/sawtooth-simple-supply/bin
CMD ['simple-supply-tp']