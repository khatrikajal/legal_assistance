# Use an official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build

# Production environment
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/dist /app/dist

# Install a lightweight HTTP server to serve static files
RUN npm install -g serve

# Expose port 5173 for WebSocket and frontend development
EXPOSE 5173

# Command to run the Vite development server with WebSocket support
CMD ["npm", "run", "dev"]