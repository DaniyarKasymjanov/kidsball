import React from 'react';

import { CustomTitleContainer } from './custom-title.styles';

const CustomTitle = ({ children, ...props }) => {
	return <CustomTitleContainer {...props}>{children}</CustomTitleContainer>;
};

export default CustomTitle;
