const INITIAL_STATE = {
	sections: [
		{
			title: 'kidsball',
			imageUrl: `${require('../../assets/images/bgImage.jpg')}`,
			id: 1,
			linkUrl: 'kidsball'
		},
		{
			title: 'гимнастика',
			imageUrl: `${require('../../assets/images/gymnastic.jpg')}`,
			id: 2,
			linkUrl: 'gymnastics'
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
