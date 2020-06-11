import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    margin-top: 50px !important;
    height: 50px;
    background-color: blueviolet;
`;

export default function Footer(): ReactElement {
    return <StyledFooter>Foot</StyledFooter>;
}
