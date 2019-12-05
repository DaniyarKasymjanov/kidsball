import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomTitle from '../custom-title/custom-title.component';

import { DescriptionContainer, TextContainer } from './description.styles';

const Description = ({ content, match }) => {
	const { title, text } = content.find(({ linkUrl }) => linkUrl === match.url);
	return (
		<DescriptionContainer>
			<CustomTitle>{title}</CustomTitle>
			<TextContainer>{text}</TextContainer>
		</DescriptionContainer>
	);
};

export default withRouter(Description);
