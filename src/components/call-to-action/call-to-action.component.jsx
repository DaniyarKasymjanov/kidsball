import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Banner from '../banner/banner.component';

import { selectBannerForPage } from '../../redux/banner/banner.selectors';

import { CallToActionContainer } from './call-to-action.styles';

const CallToAction = ({ banners, currentUser }) => {
	return (
		<CallToActionContainer>
			<Banner banners={banners} />
		</CallToActionContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	banners: selectBannerForPage
});

export default connect(mapStateToProps)(CallToAction);
