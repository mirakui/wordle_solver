#!/usr/bin/bash +xe

yum install -y unzip wget
cd /tmp; wget https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz
cd glibc-2.18 && mkdir build
cd build
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
