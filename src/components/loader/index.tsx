import React from 'react';
import styled from 'styled-components';

import loader from './assets/loader.svg';

const CenteredLoader = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`;

export default function Loader(): React.ReactElement {
    return <CenteredLoader src={loader} alt="Loader" />;
}
