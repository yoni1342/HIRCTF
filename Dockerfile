# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

RUN npm cache clean --force

# Build the app
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Define the command to start your app
CMD [ "npm", "start" ]