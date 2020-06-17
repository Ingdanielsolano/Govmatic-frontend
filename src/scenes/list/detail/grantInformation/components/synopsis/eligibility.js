import React from 'react';
import { Card, Row, Col } from 'antd';

export function Eligibility() {
    return (
        <Row>
            <Col span={24}>
                <Card title="Eligibility" bordered={false} className="card">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h4>Eligible Applicants:</h4>
                                </th>
                                <td>
                                    <p>Others (see text field entitled "Additional Information on Eligibility" for clarification)</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Additional Information on Eligibility:</h4>
                                </th>
                                <td>
                                    <p>
                                        All responsible sources capable of satisfying the Government's
                                        needs may submit a proposal that shall be considered by DARPA. See the Eligibility Information section
                                        of the BAA for more information.
                                </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </Col>
        </Row>
    )
}