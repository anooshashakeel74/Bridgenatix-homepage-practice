# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files first for better build caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all source files into the container
COPY . .

# Build the production-ready assets
RUN npm run build

# Stage 2: Serve the production assets with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from Stage 1 to Nginx HTML folder
# Vite builds to 'dist' by default. If using CRA, change 'dist' to 'build'
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration to handle React Router client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
