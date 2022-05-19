import logo from "./logo.svg";
import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import { Button, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const signOutUser = () => {
    Auth.signOut()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Button variation="primary" color={"white"} onClick={() => signOutUser()}>
        Logout
      </Button>
      <h1>You Are Logged In</h1>
    </div>
  );
}

export default withAuthenticator(App);
