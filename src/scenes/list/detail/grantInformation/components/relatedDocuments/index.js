import React from 'react';
import { Table } from 'antd';
import './index.scss'

const list = {
    columns: [
        {
            title: 'File Description',
            dataIndex: 'title',
            key: 'number',

        },
        {
            title: 'File Name',
            dataIndex: 'name',
            key: 'number',

        },
        {
            title: 'Last Updated Date/Time',
            dataIndex: 'updated',
            key: 'number',
        },
    ],
    data: [
        {
            number: '1',
            title: 5,
            agency: '',
            status: '',
            postDate: '',
            closeDate: ''
        },
        {
            number: '2',
            title: 10,
            agency: '',
            status: '',
            postDate: '',
            closeDate: ''
        }
    ]
}

export function RelatedDocuments() {
    return (
        <div className="relatedDocuments">
            Click on the following file link(s) to download the related document(s):
            <Table pagination={false} dataSource={list.data} columns={list.columns} rowKey="number"
                rowClassName={(record, index) => { return (record.title > 5 ? "relatedDocuments-folder" : "relatedDocuments-document") }} />
        </div>
    )
}