import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component.jsx';
import SignInAnsSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import KidsballPage from './pages/kidsball/kidsball.component';
import GymnasticPage from './pages/gymnastic/gymnastic.component';

import './App.css';

function App({ currentUser }) {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAnsSignUp />)} />
				<Route path="/kidsball" component={KidsballPage} />
				<Route path="/gymnastics" component={GymnasticPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
