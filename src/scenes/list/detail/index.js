import React from 'react';
import { Row } from 'antd';
import { Agency } from './agency';
import { GrantInformation } from './grantInformation';
import { useLocation } from 'react-router';

export function DetailGrant() {

    const location = useLocation();
    console.log('asdasdasd');
    
    console.log(location.record);
    
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


