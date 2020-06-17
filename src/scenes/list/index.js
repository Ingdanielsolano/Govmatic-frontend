import React from 'react';
import { Row, Table, Space } from 'antd';
import './index.scss'

const list = {
    columns: [
        {
            title: 'Opportunity Number',
            dataIndex: 'number',
            key: 'number',
            render: (text, record) => (
                <Space size="middle">
                    <a>H123493R93IR93I4</a>
                </Space>
            ),
        },
        {
            title: 'Opportunity Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Agencia',
            dataIndex: 'agency',
            key: 'agency',
        },
        {
            title: 'Opportunity Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Opportunity Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Posted Date',
            dataIndex: 'posted',
            key: 'posted',
        },
        {
            title: 'Close Date',
            dataIndex: 'close',
            key: 'close',
        },
    ],
    data: [
        {
            number: '',
            title: '',
            agency: '',
            status: '',
            postDate: '',
            closeDate: ''
        },
        {
            number: '',
            title: '',
            agency: '',
            status: '',
            postDate: '',
            closeDate: ''
        }
    ]
}

export function GrantList() {
    return (
        <div className="opportunity">
            <Row justify="center" className="header">
                <div className="header-content">
                    <p>Govmatic</p>
                </div>
            </Row>
            <div className="opportunity-table">
                <Table pagination={{ defaultPageSize: 25 }} dataSource={list.data} columns={list.columns} />
            </div>
        </div>
    )
}


