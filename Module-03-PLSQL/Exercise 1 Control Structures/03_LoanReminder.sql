BEGIN

    FOR loan_record IN
    (
        SELECT CustomerName,
               DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan for '
            || loan_record.CustomerName
            || ' is due on '
            || loan_record.DueDate
        );

    END LOOP;

END;
/