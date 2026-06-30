public class SearchDemo {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Mobile", "Electronics"),
                new Product(105, "Bag", "Travel")

        };

        int searchId = 104;

        System.out.println("----- Linear Search -----");

        Product linearResult = LinearSearch.search(products, searchId);

        if (linearResult != null) {
            linearResult.display();
        } else {
            System.out.println("Product Not Found");
        }

        System.out.println();

        System.out.println("----- Binary Search -----");

        Product binaryResult = BinarySearch.search(products, searchId);

        if (binaryResult != null) {
            binaryResult.display();
        } else {
            System.out.println("Product Not Found");
        }

    }

}