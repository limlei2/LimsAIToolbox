FROM maven:3.9.9-amazoncorretto-23-debian AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

FROM amazoncorretto:23

WORKDIR /app

COPY --from=build /app/target/limsToolbox-0.0.1-SNAPSHOT.jar .

ARG GEMINI_KEY
ARG OPENAI_KEY

ENV GEMINI_KEY=${GEMINI_KEY}
ENV OPENAI_KEY=${OPENAI_KEY}

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "limsToolbox-0.0.1-SNAPSHOT.jar"]