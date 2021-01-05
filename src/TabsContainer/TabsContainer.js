import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const styles = {
  flexGrow: 1,
  backgroundColor: "white"
};

class TabsContainer extends React.Component {
  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderContent = () => {
      if (!this.props.children) {
          return <Typography component="div" align="center" color="error">Add more than one component TabContent to switch between tabs.</Typography>;
      }

      else if (this.props.children && !this.props.children.length) {
        return this.props.children;
      }

      else {
        return this.props.children.map((item, i) => this.state.value === i && item);
      }
  }

  render() {
    return (
      <div style={styles}>
        <AppBar position="static" color={this.props.containerColor} style={this.props.style}>
          <Tabs
            value={this.props.tabsValue}
            onChange={this.handleChange}
            centered={this.props.tabsCentered}
            fullWidth={this.props.tabsTabsFullWidth}
            scrollable={this.props.tabsScrollable}
            textColor={this.props.tabsTextColor}
            variant={this.props.tabsVariant}
            >
            {this.props.tabs.map(item => {
                return (
                    <Tab
                        label={item.label}
                    />
                );
            })}
          </Tabs>
        </AppBar>
        { this.renderContent() }
      </div>
    );
  }
}

TabsContainer.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  containerColor: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  containerStyle: PropTypes.object,
  tabs: PropTypes.arrayOf(PropTypes.shape(
    {
      label: PropTypes.string,
      classes: PropTypes.string,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      fullWidth: PropTypes.bool,
      selected: PropTypes.bool,
      textColor: PropTypes.oneOf(["primary", "secondary", "inherit"])
  })),
  tabsCentered: PropTypes.bool,
  tabsFullWidth: PropTypes.bool,
  tabsScrollable: PropTypes.bool,
  tabsTextColor: PropTypes.oneOf(["primary", "secondary", "inherit"]),
  tabsVariant: PropTypes.oneOf(["standard", "scrollable", "fullWidth"]),
  tabsValue: PropTypes.number
};

TabsContainer.defaultProps = {
    tabsValue: 0,
};

export default TabsContainer;
