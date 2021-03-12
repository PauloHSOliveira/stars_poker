import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('******** Header ********', () => {
  it('Deve renderizar o cabeçalho', () => {
    render(<Header />);
  });
});
