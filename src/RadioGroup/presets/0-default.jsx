import * as React from "react";
import RadioGroup from "../RadioGroup";
import Radio from "../../Radio/Radio";
import FormControl from "../../FormControl/FormControl";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";
import FormLabel from "../../FormLabel/FormLabel";

export default (
  <FormControl component="fieldset" uxpId="1">
    <FormLabel component="legend" uxpId="2">Favorite Band</FormLabel>
    <RadioGroup uxpId="3">
      <FormControlLabel value="black sabbath" control={<Radio uxpId="4.1" />} label="Black Sabbath" uxpId="4" />
      <FormControlLabel value="led zeppelin" control={<Radio uxpId="5.1" />} label="Led Zeppelin" uxpId="5" />
      <FormControlLabel value="pink floyd" control={<Radio uxpId="6.1" />} label="Pink Floyd" uxpId="6" />
    </RadioGroup>
  </FormControl>
);
