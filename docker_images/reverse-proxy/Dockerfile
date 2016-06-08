FROM php:5.6-apache
MAINTAINER Rosanne Combremont

COPY conf/ /etc/apache2

#RUN apt-get update && \
#    apt-get install -y vim

# active les deux modules
RUN a2enmod proxy proxy_http

# active les virtual host
RUN a2ensite 000-* 001-*

