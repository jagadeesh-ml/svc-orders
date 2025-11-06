# --- build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# Robust install: prefer npm ci if lock exists; fallback to npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .

# --- runtime stage ---
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app /app
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "src/index.js"]
