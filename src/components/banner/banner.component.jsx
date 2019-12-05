import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	TryButton,
	ContentTitle,
	ContentSubtitle
} from './banner.styles';

const Banner = ({ banners, currentUser, match, history }) => {
	const { title, subtitle, imageUrl } = banners.find(({ linkUrl }) => linkUrl === match.url);
	return (
		<MenuItemContainer>
			<BackgroundImageContainer imageUrl={imageUrl} />
			<ContentContainer>
				<ContentTitle>{title}</ContentTitle>
				<ContentSubtitle>{subtitle}</ContentSubtitle>
			</ContentContainer>
			{currentUser ? (
				<TryButton
					onClick={() => {
						history.push('/myaccount');
					}}
				>
					Пробное Занятие
				</TryButton>
			) : (
				<TryButton
					onClick={() => {
						history.push('/signin');
					}}
				>
					Пробное Занятие
				</TryButton>
			)}
		</MenuItemContainer>
	);
};

export default withRouter(Banner);
