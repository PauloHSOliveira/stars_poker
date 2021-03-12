import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

describe('******** Card ********', () => {
  it('Deve renderizar o card e mostrar o nome da empresa', () => {
    const data = {
      name: 'Stars Poker',
      cnpj: 'teste',
      email: 'email@starspoker.com',
      phone: 'teste',
      address: 'teste',
      code: '0001',
    };
    render(<Card data={data} />);
    screen.getByText('Stars Poker');
  });
});
