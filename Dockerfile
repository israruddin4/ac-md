FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache ffmpeg python3 make g++ git

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Create directories
RUN mkdir -p sessions temp logs database

# Expose port
EXPOSE 3000

# Start bot
CMD ["npm", "start"]
