import React from 'react';

import CallToAction from '../../components/call-to-action/call-to-action.component';
import AboutKidsball from '../../components/about-us-section/about-us-section.component';
import CoachesSection from '../../components/coach-section/coach-section.component';

import { KidsballPageContainer } from './kidsball.styles';

const KidsballPage = () => {
	return (
		<KidsballPageContainer>
			<CallToAction />
			<AboutKidsball />
			<CoachesSection />
		</KidsballPageContainer>
	);
};

export default KidsballPage;
