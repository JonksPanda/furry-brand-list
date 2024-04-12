FROM nginx:alpine

COPY build /app/build
COPY build /usr/share/nginx/html/furry-brand-list

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]