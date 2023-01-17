import logo from "./logo.svg";
import "./App.css";
import Picture from "./component/profile/ProfilePhoto";
import Adress from "./component/profile/Address";
import { Name } from "./component/profile/FullName";


function App() {
  return (
    <div className="App" >
      <Picture />
      <Name />
      <Adress />
    </div>
  );
}

export default App;
