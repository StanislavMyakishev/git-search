import React, { ReactElement } from 'react';

import Loader from '../loader';
import * as Styled from './styled';

interface SettingsToolbarProps {
    loading?: boolean;
    repositoryCount: number;
}

const SettingsToolbar = ({
    loading,
    repositoryCount,
}: SettingsToolbarProps): ReactElement => {
    return (
        <Styled.SettingsWrapper>
            <span>{repositoryCount} repository results</span>
            {loading && <Loader />}
        </Styled.SettingsWrapper>
    );
};

export default SettingsToolbar;
