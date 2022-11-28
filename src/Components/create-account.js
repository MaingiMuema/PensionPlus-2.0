import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./NavBar";
import { useState, useEffect } from "react";
import Axios from "axios";

//Images
import img1 from "../Assets/create-acc-vector.png";

const CreateAccount = () => {
  //Add user
  const addUser = () => {
    Axios.post("http://localhost:5000/create", {
      name: name,
      email: email,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };

  //Email Validation

  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
      //The pop up alert for a valid email address

      createAccountBtn = (
        <Link to="/clientDetails" onClick={checkAlerts}>
          <button className="createACC-btn">Create account</button>
        </Link>
      );
      return true;
    } else {
      //The pop up alert for an invalid email address

      return false;
    }
  }

  const [inputValue, setInputValue] = useState();

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const [inputValue2, setInputValue2] = useState();

  let onChange2 = (event) => {
    const newValue = event.target.value;
    setInputValue2(newValue);
  };

  const [inputValue3, setInputValue3] = useState();

  let onChange3 = (event) => {
    const newValue3 = event.target.value;
    setInputValue3(newValue3);
  };

  const [inputValue4, setInputValue4] = useState();

  let onChange4 = (event) => {
    const newValue3 = event.target.value;
    setInputValue4(newValue3);
  };

  //Alerts
  const checkAlerts = () => {
    if (
      inputValue == null ||
      inputValue2 == null ||
      inputValue3 == null ||
      inputValue4 == null
    ) {
      alert("Please fill in the fields appropriately!");
    }
    if (inputValue2 != null && inputValue2 != "") {
      if (ValidateEmail(document.accountForm.email) == false) {
        alert("Please input correct Email address!");
      }
    }
    if (inputValue3 != inputValue4) {
      alert("Please make sure the passwords match!");
    }
    if (inputValue3.length < 8 && inputValue4.length < 8) {
      alert("Password must be 8 or more characters long");
    }
    if (inputValue == null || inputValue == "") {
      alert("Please input Name!");
    }
  };

  //Create account button
  var createAccountBtn;
  if (
    inputValue == null ||
    inputValue2 == null ||
    inputValue3 == null ||
    inputValue4 == null
  ) {
    createAccountBtn = (
      <button onClick={checkAlerts} className="createACC-btn">
        Create account
      </button>
    );
  } else if (ValidateEmail(document.accountForm.email) == false) {
    createAccountBtn = (
      <button onClick={checkAlerts} className="createACC-btn">
        Create account
      </button>
    );
  } else if (inputValue3.length < 8 || inputValue4.length < 8) {
    createAccountBtn = (
      <button onClick={checkAlerts} className="createACC-btn">
        Create account
      </button>
    );
  } else if (inputValue3 != inputValue4) {
    createAccountBtn = (
      <button onClick={checkAlerts} className="createACC-btn">
        Create account
      </button>
    );
  } else if (inputValue == null || inputValue == "") {
    createAccountBtn = (
      <button onClick={checkAlerts} className="createACC-btn">
        Create account
      </button>
    );
  } else {
    createAccountBtn = (
      <Link to="/clientDetails" onClick={addUser}>
        <button className="createACC-btn">Create account</button>
      </Link>
    );
  }

  //variables to send to backend
  const name = inputValue;
  const email = inputValue2;
  const password = inputValue3;

  function display() {
    console.log(name + email + password);
  }

  return (
    <div className="container-fluid account-section">
      <div class="container">
        <>
          <Router>
            <Switch>
              <Route exact path="/create-account">
                <Navbar />
              </Route>
            </Switch>
          </Router>
        </>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="blueDiv">
            <h1>Get started with ease</h1>
            <p>
              Utilize our platform to combine, contribute, and withdraw. Take
              charge of your retirement. To begin saving, simply make a deposit
              or transfer funds from an existing pension.
            </p>
          </div>
          <img
            className="img-fluid create-acc-vector"
            src={img1}
            alt="Create-account-vector"
          />
        </div>
        <div class="col-lg-6 ">
          <div className="account-Form">
            <h3>Create account to get started</h3>
            <form
              action="handler.php"
              className="create-account-form"
              name="accountForm"
              method="POST"
            >
              <label for="name">
                <span>Name</span>
                <br />
                <br />
                <input
                  onChange={onChange}
                  type="text"
                  className="inputbox"
                  id="name"
                  placeholder="Enter full name"
                  required
                />
              </label>
              <label for="email">
                <span>Email</span>
                <br />
                <br />
                <input
                  onChange={onChange2}
                  type="email"
                  name="email"
                  className="inputbox"
                  id="email"
                  placeholder="Email address"
                  required
                />
              </label>
              <label for="password">
                <span>Password</span>
                <br />
                <br />
                <input
                  onChange={onChange3}
                  type="password"
                  className="inputbox"
                  name="Password"
                  id="password"
                  placeholder="Create password"
                  required
                />
              </label>
              <label for="pswd-confirm">
                <span>Confirm Password</span>
                <br />
                <br />
                <input
                  onClick={display}
                  onChange={onChange4}
                  type="password"
                  className="inputbox"
                  name="Password"
                  id="pswd-confirm"
                  placeholder="Confirm password"
                  required
                />
              </label>
              <p>
                By creating an account you agree <br />
                to our{" "}
                <a href="#" className="termsLink">
                  Terms and Privacy Policy.
                </a>
              </p>
            </form>
            {createAccountBtn}
            <p>
              Already have an account?{" "}
              <a href="#" className="termsLink">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
