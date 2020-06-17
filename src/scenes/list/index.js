import React, { useEffect } from 'react';
import { Row, Table, Space } from 'antd';
import './index.scss'
// import { DetailGrant } from '../list/detail';
import { useSelector, useDispatch } from 'react-redux';
import grantListAction from '../../services/grantList/actions'



export function GrantList({ history }) {

    const columns = [
        {
            title: 'Opportunity Number',
            dataIndex: 'number',
            key: 'number',
            render: (text, record) => (
                <Space size="middle">
                    <button className='button' onClick={() => goToDetail(record)}>{text}</button>
                </Space >
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
            render: (text, record) => (
                record.agency.name
            )
        },
        {
            title: 'Opportunity Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'Posted Date',
            dataIndex: 'posted',
            key: 'posted',
            render: (text, record) => (
                record.opportunities[0].postingDate
            )
        }
    ]

    const goToDetail = (record) => {
        console.log(record)
        history.push('detail')
    }
    const dispatch = useDispatch()

    const { items } = useSelector(state => state.grantList)

    useEffect(() => {
        dispatch(grantListAction.getGrantList())
    }, [])

    console.log({ items })

    return (
        <div className="opportunity">
            <Row justify="center" className="header">
                <div className="header-content">
                    <p>Govmatic</p>
                </div>
            </Row>
            <div className="opportunity-table">
                <Table pagination={{ defaultPageSize: 25 }} dataSource={items} columns={columns} rowKey="number" />
            </div>
        </div>
    )
}


