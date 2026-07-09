package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        return context.getBean("country", Country.class);
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        Country country = new Country();

        switch (code.toUpperCase()) {

            case "IN":
                country.setCode("IN");
                country.setName("India");
                break;

            case "US":
                country.setCode("US");
                country.setName("United States");
                break;

            case "DE":
                country.setCode("DE");
                country.setName("Germany");
                break;

            case "JP":
                country.setCode("JP");
                country.setName("Japan");
                break;

            default:
                country.setCode(code.toUpperCase());
                country.setName("Country Not Found");
        }

        return country;
    }
}