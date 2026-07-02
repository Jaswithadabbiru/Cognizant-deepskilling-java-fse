# Spring REST using Spring Boot

## Hands-on 1 – Create a Spring Web Project using Maven

### Objective

Create a Spring Boot application using Spring Initializr with Maven.

### Technologies Used

- Java 21
- Spring Boot 3.5.16
- Spring Web
- Spring Boot DevTools
- Maven

### Tasks Performed

- Created Spring Boot project using Spring Initializr.
- Added Spring Web dependency.
- Added Spring Boot DevTools.
- Configured logging in `application.properties`.
- Verified the application by running `SpringLearnApplication`.
- Confirmed the application started successfully on port **8080**.

---

## Hands-on 2 – Load SimpleDateFormat from Spring Configuration XML

### Objective

Load a `SimpleDateFormat` bean from a Spring XML configuration file and use it to parse a date.

### Technologies Used

- Spring Core
- Spring Boot
- XML Bean Configuration

### Tasks Performed

- Created `date-format.xml` in `src/main/resources`.
- Defined a `SimpleDateFormat` bean with pattern `dd/MM/yyyy`.
- Loaded the bean using `ClassPathXmlApplicationContext`.
- Parsed the date `31/12/2018`.
- Displayed the parsed `Date` object successfully.

---

## Project Structure

```text
spring-learn
│
├── src
│   ├── main
│   │   ├── java
│   │   └── resources
│   │       ├── application.properties
│   │       └── date-format.xml
│   └── test
│
├── pom.xml
└── README.md
```

## Result

- Hands-on 1 completed successfully.
- Hands-on 2 completed successfully.
- Spring Boot application started successfully.
- XML bean loaded successfully using Spring IoC Container.