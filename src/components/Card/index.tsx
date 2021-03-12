import React from 'react';
import Stars from '../../assets/fundo.jpg';

import { CardContainer, Image, Info } from './StyledComponents';
import { IProps } from './types';

const Card: React.FC<IProps> = ({ data }) => {
  return (
    <CardContainer>
      <Image style={{ backgroundImage: `url(${Stars})` }} />
      <Info>{data.name}</Info>
      <Info>{data.email}</Info>
      <Info>{data.phone}</Info>
    </CardContainer>
  );
};

export default Card;
