import React, { memo, ReactElement } from 'react';

import * as Styled from './styled';

interface ButtonProps {
    children: JSX.Element | JSX.Element[] | string;
    onClick: () => void;
}

const BasicButton = ({ children, onClick }: ButtonProps): ReactElement => {
    return (
        <Styled.BasicButton onClick={onClick}>{children}</Styled.BasicButton>
    );
};

export default memo(BasicButton);
