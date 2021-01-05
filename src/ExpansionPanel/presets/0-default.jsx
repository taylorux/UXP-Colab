import * as React from "react";
import ExpansionPanel from "../ExpansionPanel";
import ExpansionPanelSummary from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import Typography from "../../Typography/Typography";
import Paper from "../../Paper/Paper";

export default (
  <div uxpId="paper0" style={{"width": "100%"}}>
    <ExpansionPanel uxpId="1" defaultExpanded>
      <ExpansionPanelSummary uxpId="2">
        <Typography uxpId="3">Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails uxpId="4">
        <Typography uxpId="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel uxpId="11">
      <ExpansionPanelSummary uxpId="12">
        <Typography uxpId="13">Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails uxpId="14">
        <Typography uxpId="15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);