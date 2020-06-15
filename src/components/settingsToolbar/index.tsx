import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Loader from '../loader';

const SettingsWrapper = styled.div`
    position: relative;
    padding: ${({ theme }) => theme.spacing.small};
    align-items: center !important;
    justify-content: space-between !important;
    margin: -1px -1px 0;
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: ${({ theme }) => theme.colors.grayBackground};
`;

interface SettingsToolbarProps {
    loading?: boolean;
    repositoryCount: number;
}

const SettingsToolbar = ({
    loading,
    repositoryCount,
}: SettingsToolbarProps): ReactElement => {
    return (
        <SettingsWrapper>
            <span>{repositoryCount} repository results</span>
            {loading && <Loader />}
        </SettingsWrapper>
    );
};

export default SettingsToolbar;
