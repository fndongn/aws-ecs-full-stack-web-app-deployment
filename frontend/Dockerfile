FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#Addidng OpenSSL legacy flag during build to fix Docker build
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
