import React, { ReactElement } from 'react';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
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
    repositoryCount: number;
}

const SettingsToolbar = ({
    repositoryCount,
}: SettingsToolbarProps): ReactElement => {
    return (
        <SettingsWrapper>{repositoryCount} repository results</SettingsWrapper>
    );
};

export default SettingsToolbar;
