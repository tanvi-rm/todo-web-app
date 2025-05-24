# Use official Nginx image
FROM nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your site files to the container's web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80