import React from 'react';
import axios from 'axios';

import App  from './App';
const API_URL = 'https://reqres.in/api/users/';

export default {
  title: 'App',
  component: App,

};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'App',
};