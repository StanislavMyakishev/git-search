import React from 'react';

import ScrollUpButton from './index';

export default {
    title: 'Scroll Up Button',
    component: ScrollUpButton,
};

export const Basic = (): React.ReactElement => (
    <ScrollUpButton forceShow={true} />
);
