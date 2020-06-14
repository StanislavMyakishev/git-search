import 'styled-components';

import { ThemeBreakpoints } from './breakpoints';
import { ThemeColors } from './colors';
import { ThemeSpacing } from './spacing';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColors;
        spacing: ThemeSpacing;
        breakpoints: ThemeBreakpoints;
    }
}
