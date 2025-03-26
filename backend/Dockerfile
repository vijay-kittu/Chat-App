FROM openjdk:21-jdk-slim  # Ensure Java 21
WORKDIR /app
COPY . .
RUN chmod +x mvnw  # Ensure mvnw is executable
RUN ./mvnw clean package

# Get the actual jar file and rename it
RUN mv target/*.jar target/app.jar  

CMD ["java", "-jar", "target/app.jar"]  # Run the correct JAR file
