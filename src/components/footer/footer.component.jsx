import React from 'react';

import {
	FooterContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	Container,
	SocialLinkContainer,
	SocialLink
} from './footer.styles';

import { ReactComponent as Logo } from '../../assets/kidsballFooterLogo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<Container>
			<FooterContainer>
				<OptionsContainer>
					<OptionLink to="/kidsball">KIDSBALL</OptionLink>
					<OptionLink to="/gymnastics">ГИМНАСТИКА</OptionLink>
					<OptionLink to="/contact-us">КОНТАКТЫ</OptionLink>
				</OptionsContainer>
				<LogoContainer to="/">
					<Logo />
				</LogoContainer>
				<SocialLinkContainer>
					<SocialLink to="" as="a" href="https://www.facebook.com/Kidsball_kz-1848261388815414/">
						<FontAwesomeIcon icon={faFacebookF} size="3x" />
					</SocialLink>
					<SocialLink to="" as="a" href="https://www.instagram.com/kidsball_kz/">
						<FontAwesomeIcon icon={faInstagram} size="3x" />
					</SocialLink>
				</SocialLinkContainer>
			</FooterContainer>
		</Container>
	);
};

export default Footer;
