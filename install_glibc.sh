#!/usr/bin/bash +xe

yum install -y unzip wget
wget -P /tmp/ https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz
cd /tmp
tar xvf glibc-2.18.tar.gz
cd glibc-2.18
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
