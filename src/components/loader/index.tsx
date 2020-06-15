import React, { memo } from 'react';

import loader from './assets/loader.svg';
import * as Styled from './styled';

const Loader = (): React.ReactElement => {
    return <Styled.CenteredLoader src={loader} alt="Loader" />;
};

export default memo(Loader);
