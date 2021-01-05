import * as React from 'react';
import TabsContainer from '../TabsContainer';
import TabContent from '../TabContent/TabContent';

export default (
  <TabsContainer uxpId="0" tabs={[{label: "Tab 1"}, {label: "Tab 2"}, {label: "Tab 3"}]}>
    <TabContent uxpId="1" dir="x">Merge 1</TabContent>
    <TabContent uxpId="2" dir="x">Merge 2</TabContent>
    <TabContent uxpId="3" dir="x">Merge 3</TabContent>
  </TabsContainer>
);
