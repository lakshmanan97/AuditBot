import React, { Component } from "react";
import { connect } from "react-redux";
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import GRCDraggableDialog from "../component/grccomponent/GRCDraggableDialog";
import * as action from "../Store/actions/index";

class GRCDragableDialogue extends Component {
  componentDidMount() {
    let drillDown =
      this.props.barNumber !== false
        ? this.props.barNumber
        : this.props.drillDown.selectedValue;
    if (this.props.chart == "SEC15") {
      drillDown = "2";
    } else if (this.props.chart == "SEC34") {
      drillDown = "1";
    }
    if (this.props.chart == "SEC34") {
      this.props.riskReport(
        this.props.token,
        this.props.sapSystem.filtered,
        this.props.client.filtered,
        this.props.level.filtered,
        this.props.riskType.filtered,
        this.props.riskLevel.filtered,
        this.props.businessModule.filtered,
        this.props.mitigation.filtered,
        drillDown,
        this.props.riskid.filtered,
        this.props.groupby
      );
    } else if (this.props.chart == "SEC15") {
      this.props.riskReport(
        this.props.token,
        this.props.sapSystem.filtered,
        this.props.client.filtered,
        this.props.level.filtered,
        this.props.riskType.filtered,
        this.props.riskLevel.filtered,
        this.props.businessModule.filtered,
        this.props.mitigation.filtered,
        drillDown,
        this.props.riskid.filtered,
        this.props.groupby
      );
    } else {
      if (this.props.reportType.selectedValue == "1") {
        this.props.riskReport(
          this.props.token,
          this.props.sapSystem.filtered,
          this.props.client.filtered,
          this.props.level.filtered,
          [this.props.groupby],
          this.props.riskLevel.filtered,
          this.props.businessModule.filtered,
          this.props.mitigation.filtered,
          drillDown,
          this.props.riskid.filtered,
          null
        );
      }
      if (this.props.reportType.selectedValue == "2") {
        this.props.riskReport(
          this.props.token,
          this.props.sapSystem.filtered,
          this.props.client.filtered,
          this.props.level.filtered,
          this.props.riskType.filtered,
          [this.props.groupby],
          this.props.businessModule.filtered,
          this.props.mitigation.filtered,
          drillDown,
          this.props.riskid.filtered,
          null
        );
      }

      if (this.props.reportType.selectedValue == "3") {
        this.props.riskReport(
          this.props.token,
          this.props.sapSystem.filtered,
          this.props.client.filtered,
          this.props.level.filtered,
          this.props.riskType.filtered,
          this.props.riskLevel.filtered,
          [this.props.groupby],
          this.props.mitigation.filtered,
          drillDown,
          this.props.riskid.filtered,
          null
        );
      }
    }
    this.props.riskTechGrcReport(
      this.props.token,
      this.props.sapSystem,
      this.props.client,
      this.props.level,
      this.props.riskType,
      this.props.riskLevel,
      this.props.businessModule,
      this.props.riskid,
      this.props.userinput,
      this.props.reportType
    );

    console.log(
      this.props.token,
      this.props.sapSystem,
      this.props.client,
      this.props.level,
      this.props.riskType,
      this.props.riskLevel,
      this.props.businessModule,
      this.props.riskId,
      this.props.userinput,
      this.props.reportType,
      "============sending tech report"
    );
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.tableRiskTechReport).length > 0 ? (
          <GRCDraggableDialog
            dialogueState={this.props.dialogueState}
            colors={this.props.colors}
            header={this.props.tableRiskTechReport.header}
            data={this.props.tableRiskTechReport.data}
            name={this.props.tableRiskTechReport.reportName[0]}
            closeDialogue={this.props.closeDialogue}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //this methos use to retrive state from redux store as props
  return {
    token: state.login.token, //state.reducername.value
    isUserLogedIn: state.login.isUserLogedIn,
    username: state.login.username,
    riskType: state.filter.riskType,
    sapSystem: state.filter.sapSystem,
    client: state.filter.client,
    riskLevel: state.filter.riskLevel,
    businessModule: state.filter.businessModule,
    mitigation: state.filter.mitigation,
    level: state.filter.level,
    reportType: state.filter.reportType,
    riskid: state.filter.riskid,
    drillDown: state.filter.drillDown,
    breakDown: state.filter.breakDown,
    result: state.filter.result,
    userinput: state.filter.userinput,
    tableReport: state.filter.tableReport,
    levelSelected: state.filter.levelSelected,
    reportTypeSelected: state.filter.reportTypeSelected,
    colors: state.filter.colors,
    tableRiskTechReport: state.filter.tableRiskTechReport,
  };
};

const mapDispatchToProps = (dispatch) => {
  // this methos used for dispatch action to reducer
  return {
    riskReport: (
      token,
      sapSystem,
      client,
      level,
      riskType,
      riskLevel,
      businessModule,
      mitigation,
      drillDown,
      riskId,
      userinput
    ) =>
      dispatch(
        action.riskReport(
          token,
          sapSystem,
          client,
          level,
          riskType,
          riskLevel,
          businessModule,
          mitigation,
          drillDown,
          riskId,
          userinput
        )
      ),
    riskTechGrcReport: (
      token,
      sapSystem,
      client,
      level,
      riskType,
      riskLevel,
      businessModule,
      riskId,
      userinput,
      reportView
    ) =>
      dispatch(
        action.riskTechGrcReport(
          token,
          sapSystem,
          client,
          level,
          riskType,
          riskLevel,
          businessModule,
          riskId,
          userinput,
          reportView
        )
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GRCDragableDialogue); //connect which return a HOC taking two parameters which help connect to redux store and component
