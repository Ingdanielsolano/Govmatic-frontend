import React from 'react';
import { Tabs } from 'antd';
import { Synopsis } from './components/synopsis/index';
import { History } from './components/history/index';
import { RelatedDocuments } from './components/relatedDocuments/index';
import { Package } from './components/package/index';

const { TabPane } = Tabs;

export function GrantInformation() {
  return (
    <div className="grantInformation">
      <Tabs defaultActiveKey="1" type="card" size='default'>
        <TabPane tab="Synopsis" key="1">
          <Synopsis />
        </TabPane>
        <TabPane tab="Version history" key="2">
          <History />
        </TabPane>
        <TabPane tab="Related documents" key="3">
          <RelatedDocuments />
        </TabPane>
        <TabPane tab="Package" key="4">
          <Package />
        </TabPane>
      </Tabs>
    </div>
  )
}