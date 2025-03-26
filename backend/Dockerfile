FROM openjdk:17-jdk-slim
WORKDIR /app
COPY backend/ .
RUN ./mvnw clean package
CMD ["java", "-jar", "target/*.jar"]
