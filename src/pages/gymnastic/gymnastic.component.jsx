import React from 'react';

import CallToAction from '../../components/call-to-action/call-to-action.component';
import AboutGymnastics from '../../components/about-us-section/about-us-section.component';
import CoachesSection from '../../components/coach-section/coach-section.component';

import { GymnasticPageContainer } from './gymnastic.styles';

const GymnasticPage = () => {
	return (
		<GymnasticPageContainer>
			<CallToAction />
			<AboutGymnastics />
			<CoachesSection />
		</GymnasticPageContainer>
	);
};

export default GymnasticPage;
