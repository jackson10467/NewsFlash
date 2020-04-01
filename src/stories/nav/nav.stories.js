import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from './nav.js';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';



  
storiesOf('Nav', module)
.addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
.add('Primary', () => <Nav link1="Business" link2="Health" link3="Random" />)

  