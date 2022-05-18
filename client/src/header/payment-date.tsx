import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const PaymentDate = styled.span`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1em;
`;

export default function PaymentInfo() {

    return (
        <Wrapper>
            <PaymentDate>Next payment date: Monday, June 1 2022</PaymentDate>
        </Wrapper>
    );
}