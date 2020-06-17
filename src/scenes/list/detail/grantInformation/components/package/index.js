import React from 'react';
import { Table } from 'antd';
import './index.scss'

const list = {
    columns: [
        {
            title: 'CFDA',
            dataIndex: 'cfda',
            key: 'cfda',
        },
        {
            title: 'Competition ID',
            dataIndex: 'idCompetition',
            key: 'idCompetition',
        },
        {
            title: 'Competition Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Opportunity Package ID',
            dataIndex: 'idPackage',
            key: 'idPackage',
        },
        {
            title: 'Opening Date',
            dataIndex: 'opening',
            key: 'opening',
        },
        {
            title: 'Closing Date',
            dataIndex: 'closing',
            key: 'closing',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
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

export function Package() {
    return (
        <div className="package">
            <h1>Select Grant Opportunity Package</h1>
            <div className="package-warning"> 
                <h4>PLEASE READ BEFORE APPLYING!</h4>
                <p>
                    If you view and complete your application package using Grants.gov downloadable PDF forms,
                    you MUST have Adobe Reader installed. You may receive a validation error using incompatible
                    versions of Adobe Reader. To prevent a validation error, it is now recommended you uninstall any
                    earlier versions of Adobe Reader and install the latest compatible version of Adobe Reader.
                    If more than one person is working on the PDF forms, ALL applicants must be using the same Adobe
                    Reader version. Click for more information on Adobe Reader Compatibility.
                </p>
            </div>
            <Table pagination={false} dataSource={list.data} columns={list.columns} rowKey="number"/>
        </div>
    )
}