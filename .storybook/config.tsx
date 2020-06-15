import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';

addDecorator((storyFn) => (
    <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {storyFn()}
        </ThemeProvider>
    </MemoryRouter>
));
