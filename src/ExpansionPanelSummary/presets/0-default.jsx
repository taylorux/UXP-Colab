import * as React from "react";
import ExpansionPanelSummary from "../ExpansionPanelSummary";
import Typography from "../../Typography/Typography";
import Icon from '../../Icon/Icon';

export default (
  <ExpansionPanelSummary expandIcon={<Icon uxpId="1.1">expand_more</Icon>} uxpId="1">
    <Typography uxpId="2">Expansion Panel 1</Typography>
  </ExpansionPanelSummary>
);
