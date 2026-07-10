import ListofPlayers from "./ListofPlayers";
import IndianPlayer from "./IndianPlayers";

function App() {

  var flag = true;

  if (flag === true) {

    return (
      <div>
        <ListofPlayers />
      </div>
    );

  } else {

    return (
      <div>
        <IndianPlayer />
      </div>
    );

  }

}

export default App;