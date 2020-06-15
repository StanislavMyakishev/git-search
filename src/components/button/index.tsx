import React, { memo, ReactElement } from 'react';

import * as Styled from './styled';

interface ButtonProps {
    children: JSX.Element | JSX.Element[] | string;
    onClickHandler: () => void;
}

const Button = ({ children, onClickHandler }: ButtonProps): ReactElement => {
    return (
        <Styled.BasicButton onClick={onClickHandler}>
            {children}
        </Styled.BasicButton>
    );
};

export default memo(Button);
