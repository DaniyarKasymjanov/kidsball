import styled from 'styled-components';
import CustomTitle from '../custom-title/custom-title.component';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	text-align: center;
`;

export const CoachesSectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 15px;
`;

export const CoachesCustomTitle = styled(CustomTitle)`
  color: #32cccc;
  margin-top: 45px;
  margin-bottom: 20px;
`;
