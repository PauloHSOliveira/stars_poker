import styled from 'styled-components';
import Poker from '../../../assets/poker.png';

export const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 1);
  border-bottom: 1px solid #974fcd;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 150px;
  height: 100px;
  background-image: url(${Poker});
  background-size: cover;
`;
