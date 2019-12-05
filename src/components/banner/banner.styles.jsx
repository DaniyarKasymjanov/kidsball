import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const MenuItemContainer = styled.div`
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const BackgroundImageContainer = styled.div`
	border: 10px solid white;
	width: 100%;
	height: 50vh;
	margin: 0 15px;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
	height: 150px;
	width: 700px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	color: white;
`;

export const ContentTitle = styled.span`
	font-size: 5rem;
	font-weight: 600;
	font-family: "Neucha", cursive;
	padding-bottom: 15px;
`;

export const ContentSubtitle = styled.span`
	font-family: "Neucha", cursive;
	font-weight: 600;
	font-size: 4.5rem;
`;

export const TryButton = styled(CustomButton)`
  bottom: 80px;
  position: absolute;
`;
