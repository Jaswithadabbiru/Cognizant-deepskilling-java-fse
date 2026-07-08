# Exercise 9 - Spring Boot Application

## Module
Module 05 - Spring Core and Maven

## Objective

Develop a Spring Boot application for Library Management using Spring Data JPA and H2 Database.

## Features

- Spring Boot
- Spring Web
- Spring Data JPA
- H2 In-Memory Database
- REST API
- CRUD Operations

## Project Structure

- Entity
    - Book

- Repository
    - BookRepository

- Controller
    - BookController

## REST Endpoints

GET /books

Returns all books.

POST /books

Adds a new book.

Example JSON

```json
{
  "title": "Spring Boot",
  "author": "Rod Johnson"
}
```

## Technologies Used

- Java 21
- Spring Boot 3.5.16
- Spring Data JPA
- H2 Database
- Maven
- IntelliJ IDEA

## Result

Successfully created and tested a Spring Boot REST application using H2 Database.