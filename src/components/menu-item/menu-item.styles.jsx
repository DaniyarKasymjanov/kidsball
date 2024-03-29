import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: 350px;
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 10px solid white;
	margin: 0 15px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
	height: 150px;
	width: 200px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 5px solid white;
	background-color: #32cccc;
	opacity: 0.7;
	position: absolute;
	color: white;
`;

export const ContentTitle = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 2.4rem;
	letter-spacing: 1.3px;
`;

export const ContentSubtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
