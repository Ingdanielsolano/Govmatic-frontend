import React from 'react';
import { Row, Col, Card } from 'antd';

export function GeneralInformation() {
    return (
        <Card title="General Information" bordered={false} className="card">
            <Row>
                <Col span={12}>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h4>Document Type:</h4>
                                </th>
                                <td>
                                    <p>Grants Notice</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Funding Opportunity Number:</h4>
                                </th>
                                <td>
                                    <p>HR001120S0048</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Funding Opportunity Title:</h4>
                                </th>
                                <td>
                                    <p>Defense Sciences Office Office-wide</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Opportunity Category:</h4>
                                </th>
                                <td>
                                    <p>Discretionary</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Opportunity Category Explanation:</h4>
                                </th>
                                <td>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Funding Instrument Type:</h4>
                                </th>
                                <td>
                                    <p>
                                        Cooperative Agreement
                                        Grant
                                        Other
                                        Procurement Contract
                                </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Category of Funding Activity:</h4>
                                </th>
                                <td>
                                    <p>Science and Technology and other Research and Development</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Category Explanation:</h4>
                                </th>
                                <td>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Expected Number of Awards:</h4>
                                </th>
                                <td>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>CFDA Number(s):</h4>
                                </th>
                                <td>
                                    <p>12.910 -- Research and Technology Development</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col span={12}>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h4>Cost Sharing or Matching Requirement:</h4>
                                </th>
                                <td>
                                    <p>No</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Version:</h4>
                                </th>
                                <td>
                                    <p>Synopsis 1</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Posted Date:</h4>
                                </th>
                                <td>
                                    <p>Jun 12, 2020</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Last Updated Date:</h4>
                                </th>
                                <td>
                                    <p>Jun 12, 2020</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Original Closing Date for Applications:</h4>
                                </th>
                                <td>
                                    <p>Jun 11, 2021  See Full Announcement for details.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Current Closing Date for Applications:</h4>
                                </th>
                                <td>
                                    <p>Jun 11, 2021  See Full Announcement for details.</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Archive Date:</h4>
                                </th>
                                <td>
                                    <p>Jul 11, 2021</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Estimated Total Program Funding:</h4>
                                </th>
                                <td>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Award Ceiling:</h4>
                                </th>
                                <td>
                                    <p></p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h4>Award Floor:</h4>
                                </th>
                                <td>
                                    <p></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Card>
    )
}