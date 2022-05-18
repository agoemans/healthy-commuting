import React, { useState } from 'react';

import styled from "styled-components";
import PageHeader from './header/page-header';
import PageContent from './content/page-content';

const Wrapper = styled.div`
    background-color: white;
    min-width: 76vw;
    height: 100%;
`;

const Content = styled.div`
    background-color: red;
`;

export const App = () => {
    return (
        <Wrapper className='app'>
            <PageHeader/>
            <PageContent/>
        </Wrapper>
    );
};