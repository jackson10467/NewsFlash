import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './input.js';






storiesOf('Input', module)
  .add('Primary', () => <Input label="Primary" type="primary" />)
  .add('Danger', () => <Input label="Danger" type="danger" />)
  .add('Warning', () => <Input label="Warning" type="warning"
  />) 
  .add('Success', () => <Input label="Success" type="success" />) 
  