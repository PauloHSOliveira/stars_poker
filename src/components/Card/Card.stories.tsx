import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card from './index';
import { IProps } from './types';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<IProps> = (args) => <Card {...args} />;

export const Initial = Template.bind({});

Initial.args = {
  data: {
    name: 'Teste',
    code: '0001',
    cnpj: 'cnpj',
    email: 'email@mail.com',
    phone: '31988554574',
    address: 'Rua teste',
  },
};
