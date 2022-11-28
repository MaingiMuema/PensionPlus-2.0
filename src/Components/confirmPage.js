import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarSignedIn from "./Navbar-SignedIn";
import React, { useState } from "react";
import $ from "jquery";

import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

//Images
import img1 from "../Assets/confirmPageVector.png";

const ConfirmPage = () => {

  const [checkPath, setcheckPath] = useState();

  const checkBtn = () =>{
    if(document.getElementById('consentInput1').checked && document.getElementById('consentInput2').checked){
      setcheckPath("/userDashboard");
    }
    else{
      alert("Please agree to our terms!")
      setcheckPath("/confirmPage");
  }
  }
 

  return (
    <div className="container-fluid account-section">
      <div class="container">
        <>
          <Router>
            <Switch>
              <Route exact path="/conFirmPage">
                <NavbarSignedIn />
              </Route>
            </Switch>
          </Router>
        </>
        <Link to="/pensionDetails">
          <span>
            <Icon className="back-arrow" name="arrow left" />
            Back
          </span>
        </Link>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="blueDiv">
            <h1>Confirm Transfer</h1>
          </div>
          <div className="confirm-vectorImg">
            <img
              className="img-fluid confirmPage-vector"
              src={img1}
              alt="PensionDetails vector"
            />
          </div>
        </div>
        <div class="col-lg-6 ">
          <div className="confirm-Provider">
            <h3>Pensions to Transfer</h3>
            <ul>
              <li>
                <span>Britam</span>
              </li>
              <li>
                <span>NCBA</span>
              </li>
              <li>
                <span>Direct Line</span>
              </li>
            </ul>
            <form action="handler.php" method="POST" className="completeForm">
              <div>
                <label for="consentInput">
                  <input id="consentInput1" type="checkBox" />

                  <span className="consentPhrase">
                    I consent to adding these pensions' remaining sums to my new
                    Pensionplus portfolio.
                  </span>
                </label>
                <label className="consentLabel" for="terms">
                  <input id="consentInput2" type="checkBox" />

                  <span className="consentPhrase">
                    I hereby confirm to have read, comprehended, and agreed to
                    the Terms, including the Declarations, Data Protection, and
                    Transfer authorizations therein.
                  </span>
                </label>
              </div>
            </form>

            <Link to={checkPath} onMouseDown={checkBtn}><button className="createACC-btn">Complete</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
