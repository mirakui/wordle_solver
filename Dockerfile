FROM amazonlinux:latest

RUN yum -y update
RUN yum -y groupinstall "Development Tools"
RUN curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=/usr/local sh
RUN curl -sSf https://sh.rustup.rs | sh -s -- -y
RUN source $HOME/.cargo/env && \
    git clone https://github.com/denoland/deno.git && \
    cd deno && \
    cargo build --release
RUN curl -o /tmp/glibc-2.27.tar.gz https://ftp.gnu.org/gnu/glibc/glibc-2.27.tar.gz && \
    cd /tmp && \
    tar xvf glibc-2.27.tar.gz
RUN mkdir /tmp/build && \
    cd /tmp/build && \
    ../glibc-2.27/configure --build= --prefix=/usr && \
    make -j4 && \
    make install
