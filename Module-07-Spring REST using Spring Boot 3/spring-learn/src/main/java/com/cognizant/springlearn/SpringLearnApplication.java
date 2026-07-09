package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(SpringLearnApplication.class, args);

        LOGGER.info("Inside main");

        // Hands-on 1
        displayDate();

        // Hands-on 4
        displayCountry();
    }

    private static void displayDate() {

        try {

            ApplicationContext context =
                    new ClassPathXmlApplicationContext("date-format.xml");

            SimpleDateFormat format =
                    context.getBean("dateFormat", SimpleDateFormat.class);

            Date date = format.parse("31/12/2018");

            System.out.println(date);

        } catch (Exception e) {

            e.printStackTrace();

        }
    }

    private static void displayCountry() {

        LOGGER.debug("START");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country =
                context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country);

        LOGGER.debug("END");
    }
}