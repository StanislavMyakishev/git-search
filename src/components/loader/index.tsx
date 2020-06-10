import React from 'react';
import styled from 'styled-components';

import loader from './assets/loader.svg';

const LoaderOverlay = styled.div`
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    background-color: #fff;
`;

const LoaderWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Loader(): React.ReactElement {
    return (
        <LoaderOverlay>
            <LoaderWrapper>
                <img src={loader} alt="Loader" />
            </LoaderWrapper>
        </LoaderOverlay>
    );
}
