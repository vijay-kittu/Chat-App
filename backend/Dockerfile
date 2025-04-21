FROM openjdk:21-jdk-slim  
WORKDIR /app
COPY . .
RUN chmod +x mvnw  # Ensure mvnw is executable
RUN ./mvnw clean package

# Get the actual jar file and rename it
RUN mv target/*.jar target/demo-0.0.1-SNAPSHOT.jar  

CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]  # Run the correct JAR file
