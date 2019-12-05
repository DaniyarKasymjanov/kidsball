import styled from 'styled-components';

export const CoachCardContainer = styled.div`
	width: 420px;
	display: flex;
	flex-direction: column;
	min-height: 550px;
	align-items: center;
	box-shadow: 1px 1px 5px #949494;
`;

export const BackgroundImageContainer = styled.div`
	width: 100%;
	height: 50%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CoachCardFooterContainer = styled.div`
	width: 100%;
	height: 50%;
	padding: 0 20px;
	display: flex;
	flex-wrap: wrap;
	flex-flow: column;
	justify-content: flex-start;
`;

export const NameContainer = styled.span`
	width: 100%;
	margin: 15px 0;
	font-size: 3rem;
	font-weight: 700;
`;

export const AboutContainer = styled.span`
	width: 100%;
	text-align: right;
	font-size: 2rem;
`;
