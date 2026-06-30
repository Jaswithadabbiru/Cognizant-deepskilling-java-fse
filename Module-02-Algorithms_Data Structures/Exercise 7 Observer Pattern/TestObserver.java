public class TestObserver {

    public static void main(String[] args) {

        StockMarket market = new StockMarket();

        Observer mobile = new MobileApp();
        Observer web = new WebApp();

        market.registerObserver(mobile);
        market.registerObserver(web);

        market.setStock("TCS", 3580.75);

        System.out.println();

        market.setStock("Infosys", 1645.20);

        System.out.println();

        market.deregisterObserver(web);

        market.setStock("Wipro", 275.50);

    }

}