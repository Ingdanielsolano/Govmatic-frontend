import React from 'react';
import { Table } from 'antd';

const list = {
    columns: [
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: 'Modification Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Updated Date',
            dataIndex: 'date',
            key: 'date',
        }
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

export function TableHistory() {
    return (
        <div className="tableHistory">
            <Table pagination={false} dataSource={list.data} columns={list.columns} rowKey="number"/>
        </div>
    )
}