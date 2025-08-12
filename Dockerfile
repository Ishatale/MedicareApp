# Step 1: Build React frontend
FROM node:20 AS frontend
WORKDIR /app
COPY Medicare/package*.json ./Medicare/
RUN cd Medicare && npm install
COPY Medicare/ ./Medicare/
RUN cd Medicare && npm run build

# Step 2: Build Spring Boot backend
FROM maven:3.9.4-eclipse-temurin-21 AS backend
WORKDIR /app
COPY demo/pom.xml demo/pom.xml
COPY demo/src ./demo/src
# Copy React build to Spring Boot resources so it serves frontend
COPY --from=frontend /app/Medicare/build ./demo/src/main/resources/static
RUN mvn -f demo/pom.xml clean package -DskipTests

# Step 3: Run the application
FROM eclipse-temurin:21
WORKDIR /app
COPY --from=backend /app/demo/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
