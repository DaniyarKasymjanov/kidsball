const INITIAL_STATE = {
	coaches: [
		{
			name: 'Баимбетова Турар Куатбековна',
			about:
				'Мастер спорта РК по художественной гимнастике - Неоднократный победитель и призер Чемпионатов и Кубков страны в групповых упражнениях - Тренер-преподаватель групп раннего спортивного развития кидсболл - Тренерский стаж работы с детьми - 5 лет',
			imageUrl: `${require('../../assets/images/kidsball2.jpg')}`,
			id: 1,
			linkUrl: '/kidsball'
		},
		{
			name: 'Шахаева Эльвира Жанабековна',
			about:
				'Мастер спорта РК по художественной гимнастике - Многократный призер и победитель Чемпионатов и Кубков Республики Казахстан в групповых упражнениях - Стаж работы с детьми -7 лет - Тренер-преподаватель по художественной гимнастике и по раннему спортивному развитию',
			imageUrl: `${require('../../assets/images/kidsball.jpg')}`,
			id: 2,
			linkUrl: '/kidsball'
		},
		{
			name: 'Ильяшенко Ольга Антоновна',
			about: [
				'Мастер Спорта РК по художественной гимнастике',
				'Неоднократный победитель и призер республиканских и международных соревнований в составе сборной РК в индивидуальном зачете',
				'Тренер по художественной гимнастике Казахской Национальный Академии Хореографии (Астана)'
			],
			imageUrl: `${require('../../assets/images/gymnastic.jpg')}`,
			id: 3,
			linkUrl: '/gymnastics'
		},
		{
			name: 'Зарипова Людмила Рафаиловна',
			about: [
				'Мастер спорта РК по художественной гимнастике',
				'Неоднократный победитель и призер республиканских чемпионатов и кубков',
				'Входила в состав национальной сборной по групповым упражнениям',
				'Солистка театра танцев «Терра»'
			],
			imageUrl: `${require('../../assets/images/gymnastic.jpg')}`,
			id: 4,
			linkUrl: '/gymnastics'
		}
	]
};

const coachReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default coachReducer;
