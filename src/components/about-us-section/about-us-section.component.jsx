import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Description from '../description/description.component';

import { selectContentForPage } from '../../redux/description/description.selectors';

import { AboutUsContainer } from './about-us-section.styles';

const AboutUs = ({ content }) => {
	return (
		<AboutUsContainer>
			<Description content={content} />
		</AboutUsContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	content: selectContentForPage
});

export default connect(mapStateToProps)(AboutUs);
