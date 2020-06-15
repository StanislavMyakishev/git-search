import React from 'react';

import SettingsToolbar from './index';

export default {
    title: 'Settings Toolbar',
    component: SettingsToolbar,
};

export const Basic = (): React.ReactElement => (
    <SettingsToolbar loading={false} repositoryCount={100} />
);

export const Loading = (): React.ReactElement => (
    <SettingsToolbar loading={true} repositoryCount={100} />
);
