import React from 'react';
import { Avatar, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './agency.scss'

export function Agency() {

    return (
        <Row justify="center" className="agency"> 
            <div className="agency-logo">
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div className="agency-information">
                <h1>HR001120S0048</h1>
                <h1>Defense Sciences Office Office-wide</h1>
                <h1>Department of Defense</h1>
                <h1>DARPA - Defense Sciences Office</h1>
            </div>
        </Row>
    )
}


