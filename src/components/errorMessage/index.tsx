import { History } from 'history';
import React, { memo, ReactElement } from 'react';
import { withRouter } from 'react-router';

import Button from '../basicButton';
import Whops from './assets/whops.jpg';
import * as Styled from './styled';

interface AllProps {
    history: History;
}

const ErrorMessage = ({ history }: AllProps): ReactElement => {
    const handleRefreshPage = (): void => {
        history.go(0);
    };

    return (
        <Styled.ErrorWrapper>
            <Styled.ErrorMessage>
                <Styled.ErrorImage src={Whops} alt="Something went wrong" />
                <h1>Sorry, something went wrong</h1>
                <h3>Try reloading the page.</h3>
                <h3>
                    We are working hard to fix it for you as soon as possible.
                </h3>
                <Button onClick={handleRefreshPage}>Reload</Button>
            </Styled.ErrorMessage>
        </Styled.ErrorWrapper>
    );
};

export default memo(withRouter(ErrorMessage));
