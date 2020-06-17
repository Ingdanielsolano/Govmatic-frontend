import React from 'react';
import { Row, Col, Card } from 'antd';

export function AditionalInformation() {
    return (
        <Row>
            <Col span={24}>
                <Card title="Additional Information" bordered={false} className="card">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h4>Agency Name:</h4>
                                </th>
                                <td>
                                    <p>DARPA - Defense Sciences Office</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Description:</h4>
                                </th>
                                <td>
                                    <p>
                                        The mission of the Defense Advanced Research Projects Agency (DARPA) Defense Sciences Office (DSO) is to identify and create the next
                                        generation of scientific discovery by pursuing high-risk, high-payoff research initiatives across a broad spectrum of science and engineering disciplines and transforming these initiatives into disruptive technologies for U.S. national security.
                                </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Link to Additional Information:</h4>
                                </th>
                                <td>
                                    <p>
                                        Beta.SAM Contract Opportunities
                                </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Grantor Contact Information:</h4>
                                </th>
                                <td>
                                    <p>
                                        If you have difficulty accessing the full announcement electronically, please contact:
                                        BAA Coordinator
                                        HR001120S0048@darpa.mil
                                        HR001120S0048@darpa.mil
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