import { DefaultTheme } from 'styled-components';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { spacing } from './spacing';

const theme: DefaultTheme = {
    colors: {
        ...colors,
    },
    spacing: {
        ...spacing,
    },
    breakpoints: {
        ...breakpoints,
    },
};

export default theme;
