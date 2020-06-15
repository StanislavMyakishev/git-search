import React from 'react';

import loader from './assets/loader.svg';
import * as Styled from './styled';

export default function Loader(): React.ReactElement {
    return <Styled.CenteredLoader src={loader} alt="Loader" />;
}
