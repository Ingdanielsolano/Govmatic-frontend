import React from 'react';
import { Row } from 'antd';
import { Agency } from './agency';
import { GrantInformation } from './grantInformation';

export function DetailGrant() {
    return (
        <div className="details">
            <Row justify="center" className="header">
                <div className="header-content">
                    <Agency />
                </div>
            </Row>
            <GrantInformation />
        </div>
    )
}


