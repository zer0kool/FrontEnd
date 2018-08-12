import React, { Component } from "react";
import "./App.css";
import { Button, Card, Footer } from "react-materialize";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AppNavbar from "./components/layout/AppNavbar";
import Signup from "./components/Signup";
import MyCard from "./components/Cards";
import Attendees from "./components/Attendees";
import MyFooter from "./components/layout/Footer";
import Mybio from "./components/bio";
import Chat from "./components/chat";


class App extends Component {
	render() {
		return (
			<Router>
			<Switch>
				<Route exact path='/' render={() => {
					return <MainLayout />
				}} />
				<Route
					exact
					path="/"
					render={() => {
						// return <SignupPage />;
					}}
				/>
				<Route
					exact
					path="/login"
					render={() => {
						// return <LoginPage />;
					}}
				/>
				<Route
					exact
					path="/EventInfo"
					render={() => {
						return <div>
						<AppNavbar/>
						<br/>
						<Mybio/>
						<br/><br/><br/><br/><br/><br/><br/>

						<MyCard />
						<br/>
						<Attendees/>
						<br/><br/><br/><br/><br/><br/>
						
						<MyFooter/>
						</div>
					}}
				/>
				<Route
					exact
					path="/events/:eventId"
					render={({ match }) => {
						const id = match.params.eventId;
						// return <EventPage eventId={id} />;
					}}
				/>
			</Switch>
			</Router>
		);
	}
}

export default App;