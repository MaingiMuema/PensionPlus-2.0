import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import DashboardNavBar from "./dashboardNavbar";
import React, { useRef } from "react";
import moment from "moment";
import {CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect, Component } from "react";
import Axios from "axios";
import {  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, PieChart, Pie, LabelList, Label,} from "recharts";
import "semantic-ui-css/semantic.min.css";
import { Icon, Item } from "semantic-ui-react";

//Images
import img1 from "../Assets/totalIcon.png";
import img2 from "../Assets/whiteAddIcon.png";
import img3 from "../Assets/whiteContributionIcon.png";
import img4 from "../Assets/whiteWithdrawIcon.png";
import img5 from "../Assets/whitePensionCalculatorIcon.png";

function UserDashboard () {

         //Total Pot amount
        const totalPotAmount = 20000000;
        const annualPercentageChange = 2.6;
        const plus = "+";
        const minus = "-";
        const applauseMessage = "You are on Track.";

        //Progress status bar
        const progressStatus = "60%";

        //Combined and Contributions percentages
        const contributionAmount = 7000000;
        const combinedAmount = 13000000;

        const combinedPercentage = combinedAmount*100/totalPotAmount;
        const contributionPercentage = contributionAmount*100/totalPotAmount;

        //const pendingTransfer = "Imaginarium Pensions";

        //List Update
        const [pendingTransferList, setpendingTransferList] = useState([ 
            {
                provider: "Imaginarium Pensions",
                status: 60
            }
            ,

            {
                provider: "NCBA Pensions", 
                status: 40
            }
            ,

            {
                provider: "Britam Pensions",
                status: 20
            }
        ])

        const [activityList, setTransferList] = useState([
            {
                activity: "Pension Transfer",
                timeStamp: "24 SEP 2022, 3:49PM",
                activityAmount: 13500
            },
            {
                activity: "Contribution",
                timeStamp: "13 Sep 2022, 10:45 PM",
                activityAmount: 15000
            },
            {
                activity: "Withdraw",
                timeStamp: "10 Aug 2022, 1:40 PM",
                activityAmount: 3500
            },

        ]);

        //Line graph data
    
        const [data, setData] = useState([
            {
              year: "2011",
              "amount in Ksh": 3689433,
            },
            {
              year: "2012",
              "amount in Ksh": 2900002,
            },
            {
              year: "2013",
              "amount in Ksh": 4000000,
            },
            {
              year: "2014",
              "amount in Ksh": 3800000,
            },
            {
              year: "2015",
              "amount in Ksh": 4700000,
            },
            {
              year: "2016",
              "amount in Ksh": 7000000,
            },
            {
                year: "2017",
                "amount in Ksh": 5970000,
              },
              {
                year: "2018",
                "amount in Ksh": 6300000,
              },
              {
                year: "2019",
                "amount in Ksh": 9034093,
              },
              {
                year: "2020",
                "amount in Ksh": 15363833,
              },
              {
                year: "2021",
                "amount in Ksh": 20000000,
              }
          ]);


          var screenWidth = window.screen.width;
          var casegraphWidth;
          var casegraphHeight;

          casegraphWidth = 550;

          if(screenWidth < 540 && screenWidth > 343){
            casegraphWidth = 400;
            casegraphHeight = 350;
          }
          else if(screenWidth < 342){
            casegraphWidth = 300;
            casegraphHeight = 250;
          }
          else{
            casegraphWidth = 550;
            casegraphHeight = 300;
          }



          //Donut Chart

          const [portfolioData, setportfolioData] = useState([
            {
                pieLable:"Portfolio", name: 'Contributions', value: contributionPercentage, fill: "#FFC928"
               
            },
            {
                name: 'Combined Pensions', value: combinedPercentage, fill: "#0075C9"
            }
          ])
     

    return (
        <div className="container-fluid Dashboard">
        <div className="container">
            <>
            <Router>
                <Switch>
                <Route exact path="/UserDashboard">
                    <DashboardNavBar />
                </Route>
                </Switch>
            </Router>
            </>
        </div>
        <div className="row">
            <div className="col-lg-4">
            <div className="dashboardBlueDiv ">
                <h1>Dashboard</h1>
            </div>
            </div>
            <div class="col-lg-4">
            <div className="dWrapper">
            <div className="dashboardCard">
                <div className="totalPot d-flex">
                <span className="d-flex column1">
                    <div className="totalIcon">
                        <img className="img-fluid" src={img1} alt="total Icon" />
                    </div>
                    <div className="align-middle">
                    <p className="totalPotLabel">
                        Total Pot:
                        <br />
                        <br />{" "}
                        <p className="totalPotAmount">
                        <b>Ksh{totalPotAmount}</b>
                        </p>
                    </p>
                    </div>
                </span>
                <span className="percentageChange d-flex justify-content-left column2">
                    <p className="annualChange">
                    Annual Change
                    <br />
                    <br />{" "}
                    <p class="pChange">
                        {plus}
                        {annualPercentageChange}%
                    </p>
                    </p>
                </span>
                </div>
            </div>
            </div>
            </div>
            <div className="col-lg-4">
                <div className="d-flex justify-content-center">
                    <div className="applausCard">
                        <h3>{applauseMessage}</h3>
                        <p>Contribute/add more to increase your interest gains</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container dashboardButtonContainer">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-center">
                            <button className="dashboardButton ">
                                <div className="buttonIcon">
                                    <img className="img-fluid bIcon" src={img2} alt="total Icon" />
                                </div>
                                <br/>
                                <span className="btnText">Add Pension</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-center">
                            <button className="dashboardButton ">
                                <div className="buttonIcon">
                                    <img className="img-fluid bIcon" src={img3} alt="total Icon" />
                                </div>
                                <br/>
                                <span className="btnText">Contribute</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-center">
                            <button className="dashboardButton ">
                                <div className="buttonIcon">
                                    <img className="img-fluid bIcon" src={img4} alt="total Icon" />
                                </div>
                                <br/>
                                <span className="btnText">Withdraw</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-center">
                            <button className="dashboardButton ">
                                <div className="buttonIcon">
                                    <img className="img-fluid bIcon" src={img5} alt="total Icon" />
                                </div>
                                <br/>
                                <span className="btnText">Pension Calculator</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="dashboardCard" id="caseChart">
                            <span className="tableHeading">Performance Track</span>
                       
                            <LineChart  className="casegraph"
                                width={casegraphWidth}
                                height={casegraphHeight}
                                data={data}
                                margin={{
                                top: 10,
                                right: 60,
                                left: 40,
                                bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="amount in Ksh"
                                        stroke="#FFC928"
                                        activeDot={{ r: 8 }}
                                    />
                            </LineChart>
                  
                            <p className="caseSummary">This an overview of your pot’s performance, that is, your combined pensions,
                                 interest gained and total contributions.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="dashboardCard" id="portfolioChart">
                            <PieChart className="portfolioPiechart" width={220} height={220}>
                                <Pie
                                data={portfolioData}
                                cx={100}
                                cy={100}
                                innerRadius={70}
                                outerRadius={100}
                                dataKey="value"
                                
                                isAnimationActive={true}
                                >
                                    <LabelList
                                        dataKey="pieLable"
                                        position="center"
                                        fill="#000"
                                        stroke="#000"
                                    />
                                </Pie>
                                
                            </PieChart>
                            <br/>
                            <p>Total pot: &nbsp;<b> Ksh{totalPotAmount}<hr/></b></p>
                        
                            <div className="d-flex">
                                <div className="blueLabel"></div><p className="portfolioKeyLabel">Combined Pensions ({combinedPercentage}%)</p>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <div className="yellowLabel"></div><p className="portfolioKeyLabel">Contributions ({contributionPercentage}%)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row activitySection">
                    <div className="col-lg-6">
                        <div className="dashboardCard">
                            <span className="tableHeading">Pending Transfers</span>
                            <hr className="pensionTransferDivider"/>
                            <div className="listUpdateContainer">
                                {
                                    pendingTransferList.map(transfer => 
                                        <li class="pendingTransfer">
                                        <span className="pendingTransferProviderName">{transfer.provider}</span>
                                        <span className="d-flex justify-content-end">
                                            <span className="progressStatus">
                                                <CircularProgressbar
                                                    value={transfer.status}
                                                    text={`${transfer.status}%`}
                                                    styles={buildStyles({
                                                        textColor: "#444",
                                                        pathColor: "#FFC928",
                                                        trailColor: "#D9D9D9"
                                                    })}
                                                />
                                            </span>
                                        </span>
                                    </li>    
                                        )
                                }
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-6">
                        <div className="dashboardCard">
                            <span className="tableHeading">Activity</span>
                            <hr className="pensionTransferDivider"/>
                            <div className="listUpdateContainer">
                                {
                                    activityList.map(activity => 
                                        <li class="pendingTransfer">
                                        <span className="pendingTransferProviderName">{activity.activity}</span>
                                        <span className="d-flex justify-content-end" id="activityAmount">
                                            <span className="activityStatus">
                                                Ksh{activity.activityAmount}
                                            </span>
                                        </span>
                                    </li>    
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
    };


export default UserDashboard;
