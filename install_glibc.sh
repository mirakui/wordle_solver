#!/usr/bin/bash +xe

yum install -y wget
wget -q -P /tmp/ https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz
cd /tmp
tar xvf glibc-2.18.tar.gz 2>/dev/null
cd /tmp/glibc-2.18
mkdir build; cd build
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
make 2>/dev/null
make install
