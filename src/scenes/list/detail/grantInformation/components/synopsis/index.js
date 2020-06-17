import React from 'react';
import { GeneralInformation } from '../synopsis/generalInformation';
import { Eligibility } from '../synopsis/eligibility';
import { AditionalInformation } from '../synopsis/aditionalInformation';

export function Synopsis() {
    return (
        <div className="synopsis">
            <GeneralInformation />
            <Eligibility />
            <AditionalInformation />
        </div>
    )
}