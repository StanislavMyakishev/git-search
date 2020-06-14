import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
    margin-top: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 32px;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: ${({ theme }) => theme.spacing.medium};

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.light};
    }
`;

interface ButtonProps {
    children: JSX.Element | JSX.Element[] | string;
    onClickHandler: () => void;
}

const Button = ({ children, onClickHandler }: ButtonProps): ReactElement => {
    return <StyledButton onClick={onClickHandler}>{children}</StyledButton>;
};

export default memo(Button);
