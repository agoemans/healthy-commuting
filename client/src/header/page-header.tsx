import React from 'react';

import styled from 'styled-components';
import MonthTitle from './month-title';
import DownloadButton from './download-button';
import PaymentInfo from './payment-date';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 10px;
    margin: 2em auto;
    justify-content: space-between;
`;

const UpperRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
`;

export default function PageHeader() {
    return (
        <Wrapper>
            <MonthTitle/>
            <UpperRightContainer>
                <DownloadButton/>
                <PaymentInfo/>
            </UpperRightContainer>
        </Wrapper>
    );
}