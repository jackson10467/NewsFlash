import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './input.js';






storiesOf('Input', module)
  .add('Primary', () => <Input label="Primary" type="primary" />)
  