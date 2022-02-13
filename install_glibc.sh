#!/usr/bin/bash -xe

cat /etc/os-release
yum install -y wget
wget -q -P /tmp/ https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz
cd /tmp
tar xvf glibc-2.18.tar.gz >/dev/null 2>&1
cd /tmp/glibc-2.18
mkdir build; cd build
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
make >/dev/null 2>&1
make install
