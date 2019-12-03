import React from 'react';

import { ReactComponent as Logo } from '../../assets/kidsball.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, MyAccount } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/kidsball">KIDSBALL</OptionLink>
				<OptionLink to="/gymnastics">ГИМНАСТИКА</OptionLink>
				{currentUser ? (
					<OptionLink as="div" to="" onClick={signOutStart}>
						ВЫЙТИ
					</OptionLink>
				) : (
					<OptionLink to="/signin">ВОЙТИ</OptionLink>
				)}
				<MyAccount to="/myaccount">Мой Аккаунт</MyAccount>
			</OptionsContainer>
		</HeaderContainer>
	);
};

export default Header;
