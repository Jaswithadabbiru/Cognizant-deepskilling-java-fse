package com.cognizant.junit;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(5, calculator.add(2, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(3, calculator.subtract(5, 2));
    }

    @Test
    public void testMultiply() {
        assertEquals(15, calculator.multiply(3, 5));
    }

    @Test
    public void testDivide() {
        assertEquals(5, calculator.divide(10, 2));
    }
}