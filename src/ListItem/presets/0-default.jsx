import * as React from 'react';
import ListItem from '../ListItem';
import Avatar from '../../Avatar/Avatar';
import ListItemText from '../../ListItemText/ListItemText';
import Icon from '../../Icon/Icon';

export default (
  <ListItem label="Active" uxpId="1">
    <Avatar uxpId="1.1">
      <Icon uxpId="1.1.1">work</Icon>  
    </Avatar>
    <ListItemText primary="Work" secondary="Jan 7, 2014" uxpId="1.2" />
  </ListItem>
);