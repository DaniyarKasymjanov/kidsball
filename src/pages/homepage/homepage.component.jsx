import React from 'react';

import Directory from '../../components/directory/directory.component';
import AboutUs from '../../components/about-us-section/about-us-section.component';
import CallToAction from '../../components/call-to-action/call-to-action.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
	return (
		<HomePageContainer>
			<CallToAction />
			<Directory />
			<AboutUs />
		</HomePageContainer>
	);
};

export default HomePage;
