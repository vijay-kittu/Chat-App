FROM openjdk:21-jdk-slim  
WORKDIR /app
COPY . .
# Ensure mvnw is executable
RUN chmod +x mvnw  
RUN ./mvnw clean package

# Get the actual jar file and rename it
RUN mv target/demo-0.0.1-SNAPSHOT.jar target/app.jar  
# Run the correct JAR file
CMD ["java", "-jar", "target/app.jar"]  

