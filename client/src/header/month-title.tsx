import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
`;

const MonthBase = styled.span`
    display: flex;
    font-family: 'Roboto', sans-serif;    
`;

const Month = styled(MonthBase)`
    font-weight: 600;
    font-size: 2em;
`;

const Year = styled(MonthBase)`
    font-weight: 300;
    font-size: 1.5em;
`;

export default function MonthTitle() {

    return (
        <Wrapper>
            <Month>MAY</Month>
            <Year>2022</Year>
        </Wrapper>
    );
}