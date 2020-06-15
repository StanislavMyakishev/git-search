import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    position: fixed !important;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: ${({ theme }) => `${theme.colors.white}`};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    height: ${({ theme }) =>
        `calc(${theme.spacing.ultraLarge} + 2 * ${theme.spacing.extraSmall})`};
    padding: ${({ theme }) => `${theme.spacing.extraSmall} 0`};
`;

const CenterWrapper = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media only screen and (max-width: ${({ theme }) =>
            `${theme.breakpoints.forPhoneOnly}px`}) {
        width: 80%;
    }
    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletPortraitUp}px`}) {
        width: 70%;
    }
    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forTabletLandscapeUp}px`}) {
        width: 60%;
    }
    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forDesktopUp}px`}) {
        width: 50%;
    }
    @media only screen and (min-width: ${({ theme }) =>
            `${theme.breakpoints.forBigDesktopUp}px`}) {
        width: 40%;
    }
`;

const CustomTextInput = styled.input`
    padding: 0 13px;
    border-radius: 20px;
    display: block;
    margin: 0;
    height: ${({ theme }) => `${theme.spacing.ultraLarge}`};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBorder}`};
    outline: none;
    font-size: ${({ theme }) => theme.spacing.small};
    width: 100%;
    box-sizing: border-box;

    &:hover {
        border-color: ${({ theme }) => theme.colors.grayBorder};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

interface SearchInputProps {
    onSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps): ReactElement => {
    return (
        <InputWrapper>
            <CenterWrapper>
                <CustomTextInput autoFocus type="search" onChange={onSearch} />
            </CenterWrapper>
        </InputWrapper>
    );
};

export default memo(SearchInput);
