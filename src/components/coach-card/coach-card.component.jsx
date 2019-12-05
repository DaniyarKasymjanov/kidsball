import React from 'react';

import {
	CoachCardContainer,
	BackgroundImageContainer,
	CoachCardFooterContainer,
	NameContainer,
	AboutContainer
} from './coach-card.styles';

const CoachCard = ({ name, about, imageUrl, linkUrl, match }) => {
	return (
		<CoachCardContainer>
			<BackgroundImageContainer imageUrl={imageUrl} />
			<CoachCardFooterContainer>
				<NameContainer>{name}</NameContainer>
				<AboutContainer>{about}</AboutContainer>
			</CoachCardFooterContainer>
		</CoachCardContainer>
	);
};

export default CoachCard;
