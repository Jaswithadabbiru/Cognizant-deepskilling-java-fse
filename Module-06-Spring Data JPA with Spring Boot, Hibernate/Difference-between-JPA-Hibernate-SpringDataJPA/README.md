# Hands-on 4 - Difference between JPA, Hibernate and Spring Data JPA

## Objective

Understand the difference between Java Persistence API (JPA), Hibernate, and Spring Data JPA.

---

# Java Persistence API (JPA)

- JPA stands for **Java Persistence API**.
- It is a **Java Specification (JSR 338)** used for persisting, reading, and managing data from Java objects.
- JPA only defines interfaces and rules.
- It **does not provide an implementation**.
- Hibernate, EclipseLink, and OpenJPA are popular implementations of JPA.

### Key Points

- Specification only
- Defines ORM standards
- Database independent
- No concrete implementation

---

# Hibernate

- Hibernate is an **ORM (Object Relational Mapping) Framework**.
- It is one of the implementations of JPA.
- It maps Java objects to database tables.
- It reduces JDBC boilerplate code.
- Supports transactions, caching, lazy loading, HQL, and annotations.

### Key Points

- ORM Tool
- Implements JPA
- Automatic SQL generation
- Transaction Management
- Caching Support

---

# Spring Data JPA

- Spring Data JPA is a Spring Framework module built on top of JPA.
- It does not implement JPA.
- It reduces boilerplate code by providing ready-made CRUD operations.
- Internally uses Hibernate (or another JPA implementation).
- Supports automatic query generation and transaction management.

### Key Points

- Built on JPA
- Uses Hibernate internally
- Less code
- Easy CRUD operations
- Automatic Repository implementation

---

# Hibernate Code Example

```java
/* Method to CREATE an employee in the database */

public Integer addEmployee(Employee employee){

    Session session = factory.openSession();

    Transaction tx = null;

    Integer employeeID = null;

    try{

        tx = session.beginTransaction();

        employeeID = (Integer) session.save(employee);

        tx.commit();

    }

    catch(HibernateException e){

        if(tx != null)
            tx.rollback();

        e.printStackTrace();

    }

    finally{

        session.close();

    }

    return employeeID;
}
```

---

# Spring Data JPA Code Example

## EmployeeRepository.java

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

## EmployeeService.java

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee){

    employeeRepository.save(employee);

}
```

---

# Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | Uses JPA |
| Boilerplate Code | High | Medium | Very Low |
| CRUD Operations | Manual | Manual | Automatic |
| Query Language | JPQL | HQL & JPQL | Query Methods & JPQL |
| Transaction Management | Via Implementation | Supported | Simplified |
| ORM Support | Standard | Complete | Uses Hibernate |

---

# Relationship

```
Spring Data JPA
        │
        ▼
JPA Specification
        │
        ▼
Hibernate
        │
        ▼
MySQL / Oracle / PostgreSQL
```

---

# Conclusion

- **JPA** is a specification that defines standards for Object Relational Mapping.
- **Hibernate** is an ORM framework and one of the implementations of JPA.
- **Spring Data JPA** is built on top of JPA and Hibernate to reduce boilerplate code and simplify database operations.

---
