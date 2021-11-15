import React, { useEffect, useState } from 'react'
import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Header from "./Header";
import About from "./About";
import SignInpage from "./Login/SignInpage";
import Profile from "./Profile";
import Pusher from "pusher-js";
import axios from "./axios";
import Feel from "./Feel"
import Signuptop from './Signuptop';
import Dash from "./Dash/Dash"


function Main() {

    const[messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get("/messages/sync").then((response) => {
            setMessages(response.data).catch(function (error) {
                console.error(error);
            });
        });
         }, []);

    useEffect(() => {
        const pusher = new Pusher('dbb5096dcb8e86e9b19d', {
            cluster: 'eu'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (data) => {
            alert(JSON.stringify(data));
          });
    }, []);

    console.log(messages);

    return (
        <Router>
        <div className="main">
        <Switch>
        <Route exact path="/">
        <Header/>
        <Home/>
        </Route>
        <Route  path="/About">
        <Header/>
        <About/>
        </Route>
        <Route  path="/chat">
        <App/>
        </Route>
        <Route  path="/login">
        <Header/>
        <SignInpage/>
        </Route>
        <Route  path="/my-profile">
        <Header/>
        <Profile/>
        </Route>
        <Route  path="/questions">
        <Header/>
        <Feel/>
        </Route>
        <Route  path="/sign-up">
        <Header/>
        <Signuptop/>
        </Route>
        <Route  path="/dashboard">
        <Header/>
        <Dash/>
        </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Main;
