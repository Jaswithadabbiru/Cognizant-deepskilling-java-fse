BEGIN

    FOR customer_record IN
    (
        SELECT CustomerID
        FROM Customers
        WHERE Age > 60
    )
    LOOP

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = customer_record.CustomerID;

    END LOOP;

    COMMIT;

END;
/