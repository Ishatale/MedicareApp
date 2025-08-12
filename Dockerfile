# Step 1: Build React frontend
FROM node:20-alpine AS frontend
WORKDIR /app/Medicare

# Install dependencies fresh
COPY Medicare/package*.json ./
RUN npm install

# Copy rest of frontend code
COPY Medicare/ ./

# Ensure scripts are executable (vite, react-scripts, etc.)
RUN cd Medicare && chmod +x node_modules/.bin/* && npm run build

# Build React app
RUN npm run build

# Step 2: Build Spring Boot backend
FROM maven:3.9.4-eclipse-temurin-21-alpine AS backend
WORKDIR /app/demo

# Copy Maven files
COPY demo/pom.xml ./
COPY demo/src ./src

# Copy built frontend into Spring Boot's static folder
COPY --from=frontend /app/Medicare/build ./src/main/resources/static

# Package Spring Boot app
RUN mvn clean package -DskipTests

# Step 3: Run application
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=backend /app/demo/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
