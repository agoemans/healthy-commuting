import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: block;
    margin: 2em auto;
    width: 90%;
`;

const RowGroup = styled.div`
    display: flex;
    border: 1px solid darkgray;
    transition: 0.5s;
`;

const Row = styled.div`
    width: calc((100% * 0.8) / 4);
    text-align: center;
    padding: 1em 0.5em;
    border-right: solid 1px #d9d9d9;
    border-bottom: solid 1px #d9d9d9;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
`;

const HeaderRow = styled(Row) `
    width: calc((100% * 0.8) / 4);
    padding: 0.5em 0.5em;
    background: #f0ead2;
    color: #2b9348;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
    font-weight: bold;
  
    &:last-child {
     width: calc(100% * 0.8);
    }
`;

const ContentRow = styled(Row) `
      &:first-child {
        border-left: 1px solid #d9d9d9;
      }
      &:last-child {
         width: calc(100% * 0.8);
        padding: 1em 0.5em;
      }
`;

export default function PageContent() {
    let employees: any[] = [
        {
            firstName: 'Paul',
            lastName: null,
            transportMethod: 'car',
            distanceInKmOneWay: 60,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Martin',
            lastName: null,
            transportMethod: 'bus',
            distanceInKmOneWay: 8,
            workingDaysPerWeek: 4
        },
        {
            firstName: 'Jeroen',
            lastName: null,
            transportMethod: 'bike',
            distanceInKmOneWay: 9,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Tineke',
            lastName: null,
            transportMethod: 'bike',
            distanceInKmOneWay: 4,
            workingDaysPerWeek: 3
        },
        {
            firstName: 'Arnout',
            lastName: null,
            transportMethod: 'train',
            distanceInKmOneWay: 23,
            workingDaysPerWeek: 5
        },
        {
            firstName: 'Mathijs',
            lastName: null,
            transportMethod: 'bike',
            distanceInKmOneWay: 11,
            workingDaysPerWeek: 4.5
        },
        {
            firstName: 'Rens',
            lastName: null,
            transportMethod: 'car',
            distanceInKmOneWay: 12,
            workingDaysPerWeek: 5
        }
    ];
    return (
        <Wrapper>
            <RowGroup>
                <HeaderRow>Employee</HeaderRow>
                <HeaderRow>Transport</HeaderRow>
                <HeaderRow>Travelled distance</HeaderRow>
                <HeaderRow>Compensation for entire month</HeaderRow>
            </RowGroup>
            {employees.map(( a: any, idx: number) =>
                <RowGroup>
                    <ContentRow>{a.firstName}</ContentRow>
                    <ContentRow>{a.transportMethod}</ContentRow>
                    <ContentRow>{a.distanceInKmOneWay}</ContentRow>
                    <ContentRow>{a.workingDaysPerWeek}</ContentRow>
                </RowGroup>
            )}
        </Wrapper>
    );
}