const INITIAL_STATE = {
	banners: [
		{
			title: 'Something about KidsBall',
			subtitle: 'KidsBall - Астана',
			imageUrl: `${require('../../assets/images/kidsball2.jpg')}`,
			id: 1,
			linkUrl: '/'
		},
		{
			title: 'KidsBall Page',
			subtitle: 'Location',
			imageUrl: `${require('../../assets/images/kidsball.jpg')}`,
			id: 2,
			linkUrl: '/kidsball'
		},
		{
			title: 'Gymnastics Page',
			subtitle: 'something something',
			imageUrl: `${require('../../assets/images/gymnastic.jpg')}`,
			id: 2,
			linkUrl: '/gymnastics'
		}
	]
};

const bannerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default bannerReducer;
