import React from 'react';
import { GeneralInformation } from "./generalInformation";
import { Eligibility } from "./eligibility";
import { AditionalInformation } from "./aditionalInformation";
import { TableHistory } from "./tableHistory";
import './index.scss'

export function History() {
    return (
        <div className="history">
            <h1>Version History</h1>
            <p>Click on Version Name to view previous versions of this grant opportunity.
            Modifications from the previous version are highlighted with a light gray background.
            For more information on versions, see Online Help.</p>
            <TableHistory />
            <h1>DISPLAYING: Synopsis 1</h1>
            <GeneralInformation />
            <Eligibility />
            <AditionalInformation />
        </div>
    )
}