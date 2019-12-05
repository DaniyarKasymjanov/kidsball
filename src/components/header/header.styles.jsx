import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	text-align: center;
	&::after {
		width: 15%;
		display: inline-block;
		content: "";
		border-top: 1px solid black;
		margin-bottom: 30px;
	}
`;

export const HeaderContainer = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const LogoContainer = styled(Link)`
		height: 100%;
		width: 100px;
    padding: 5px;
    text-align: left;
`;

export const OptionsContainer = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 2.5rem;
	letter-spacing: 2px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
	cursor: pointer;`;

export const MyAccount = styled(Link)`
  padding: 10px 15px;
  background-color: #32cccc;
  color: white;
  border: 1px solid #32cccc;
  &:hover {
		background-color: white;
		color: black;
		border: 1px solid #32cccc;
	}
`;
