import { action } from '@storybook/addon-actions';
import React from 'react';

import SearchInput from './index';

export default {
    title: 'Search Input',
    component: SearchInput,
};

export const Basic = (): React.ReactElement => (
    <SearchInput onSearch={action('onSearch')} />
);
