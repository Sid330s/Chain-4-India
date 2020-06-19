FROM ubuntu:xenial
RUN echo "deb apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 8AA7AF1F1091A5FD" \
 && echo 'deb http://repo.sawtooth.me/ubuntu/1.0/stable xenial universe' >> /etc/apt/sources.list \
 && apt-get update
RUN apt-get install -y --allow-unauthenticated -q \
    curl \
    python3-pip \
    python3-sawtooth-cli \
    python3-sawtooth-sdk \
    python3-sawtooth-rest-api
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs
RUN pip3 install \
    aiohttp \
    aiopg \
    bcrypt \
    grpcio-tools \
    itsdangerous \
    nose2 \
    psycopg2-binary \
    pycrypto \
    pylint \
    pycodestyle
WORKDIR /project/sawtooth-simple-supply
COPY curator_app/package.json /project/sawtooth-simple-supply/curator_app/
RUN cd curator_app/ && npm install
ENV PATH $PATH:/project/sawtooth-simple-supply/bin