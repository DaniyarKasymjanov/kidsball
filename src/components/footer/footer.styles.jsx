import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	text-align: center;
	&::before {
		width: 15%;
		display: inline-block;
		content: "";
		border-top: 1px solid black;
		margin-top: 30px;
		margin-bottom: 15px;
	}
`;

export const FooterContainer = styled.div`
	height: 150px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
		height: 100%;
		width: 150px;
    padding: 5px;
    display: flex;
    & svg {
      margin: 0 auto;
    }
`;

export const OptionsContainer = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: 2.5rem;
	letter-spacing: 2px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
	cursor: pointer;`;

export const SocialLinkContainer = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: 2.5rem;
	letter-spacing: 2px;
`;

export const SocialLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;`;
