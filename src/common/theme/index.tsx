import { DefaultTheme } from 'styled-components';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fontSizes } from './fontSizes';

const theme: DefaultTheme = {
    colors: {
        ...colors,
    },
    fontSizes: {
        ...fontSizes,
    },
    breakpoints: {
        ...breakpoints,
    },
};

export default theme;
