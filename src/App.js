import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loginn from "./component/login/login";
import Sign from "./component/signup/signup";
function App() {
  return (
    <div className="App">
      <center>
        <h1>
          BASIC USER LOGIN <br /> REGISTRATION FORMS
        </h1>
        <div className="log ">
          <Loginn />
        </div>
        <div className="sign ">
          <Sign />
        </div>
      </center>
    </div>
  );
}
export default App;
