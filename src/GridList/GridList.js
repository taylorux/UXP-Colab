import React from "react";
import PropTypes from "prop-types";
import GridListM from "@material-ui/core/GridList";

function GridList(props) {
  return <GridListM {...props}>{props.children}</GridListM>;
}

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),

  /**
   * Grid Tiles that will be in Grid List.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Number of columns.
   */
  cols: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.number,

  /**
   * @ignore
   */
  style: PropTypes.object 
};

export { GridList as default };
