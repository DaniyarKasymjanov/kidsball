import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCoachesForPage } from '../../redux/coaches/coaches.seletors';

import CoachCard from '../coach-card/coach-card.component';

import { Container, CoachesSectionContainer, CoachesCustomTitle } from './coach-section.styles';

const CoachSection = ({ coaches, match }) => {
	const coachesForPage = coaches.filter(({ linkUrl }) => linkUrl === match.url);
	return (
		<Container>
			<CoachesCustomTitle className="test">Наши Трениры</CoachesCustomTitle>
			<CoachesSectionContainer>
				{coachesForPage.map(({ id, ...otherCoachesProps }) => <CoachCard key={id} {...otherCoachesProps} />)}
			</CoachesSectionContainer>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	coaches: selectCoachesForPage
});

export default withRouter(connect(mapStateToProps)(CoachSection));
