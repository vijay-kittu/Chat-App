FROM openjdk:21-jdk-slim  
WORKDIR /app
COPY . .
RUN chmod +x mvnw  # Ensure mvnw is executable
RUN ./mvnw clean package

RUN rm -f target/*.original

# Get the actual jar file and rename it
RUN mv target/*.jar target/app.jar  

CMD ["java", "-jar", "target/app.jar"]  # Run the correct JAR file
