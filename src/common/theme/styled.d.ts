import 'styled-components';

import { ThemeBreakpoints } from './breakpoints';
import { ThemeColors } from './colors';
import { ThemeFontSizes } from './fontSizes';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColors;
        fontSizes: ThemeFontSizes;
        breakpoints: ThemeBreakpoints;
    }
}
