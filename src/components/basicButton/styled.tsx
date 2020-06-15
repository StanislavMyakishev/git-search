import styled from 'styled-components';

export const BasicButton = styled.button`
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
