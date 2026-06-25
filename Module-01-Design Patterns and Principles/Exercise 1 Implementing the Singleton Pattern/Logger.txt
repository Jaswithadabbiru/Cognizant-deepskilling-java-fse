public class Logger {

    // Single instance of Logger
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger object created.");
    }

    // Method to return the single instance
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void logMessage(String message) {
        System.out.println("LOG: " + message);
    }
}