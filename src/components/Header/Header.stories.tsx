import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from './index';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Initial = Template.bind({});
