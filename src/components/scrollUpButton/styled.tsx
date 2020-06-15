import styled from 'styled-components';

interface ScrollUpButtonProps {
    isVisible: boolean;
}

export const ScrollUpButton = styled.button<ScrollUpButtonProps>`
    position: fixed;
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    bottom: 20px;
    right: 30px;
    width: 50px;
    height: 50px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
    }
`;
