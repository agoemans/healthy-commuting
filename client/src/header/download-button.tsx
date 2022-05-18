import React from 'react';

import styled from 'styled-components';

import Button from '@mui/material/Button';

const Wrapper = styled.div`
    display: flex;
    margin: 10px;
`;

export default function DownloadButton() {

    return (
        <Wrapper>
            <Button variant="contained" color="success"  size="medium">DOWNLOAD</Button>
        </Wrapper>
    );
}