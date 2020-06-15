import { action } from '@storybook/addon-actions';
import React from 'react';

import Button from './index';

export default {
    title: 'Basic Button',
    component: Button,
};

export const Text = (): React.ReactElement => (
    <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = (): React.ReactElement => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
