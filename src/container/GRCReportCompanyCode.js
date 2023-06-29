import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from "../Store/actions/index";
import logo_icon from "../resources/auditbotlogo.PNG";
import SingleSelectDropDown from "../component/SingleSelectDropDown";
import LoginCard from "../component/LoginCard";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "./HeaderContainer";
import SideBar from "./SideBar";
import GRCFilter from "../component/grccomponent/GRCFilter";

import Loader from "../component/Loader";
import GRCDragableDialogue from "./GRCDragableDialogue";
import GRCReportTable from "../component/grccomponent/GRCReportTable";
import MUGRCReportTable from "../component/grccomponent/MUGRCReportTable";
import Typography from "@material-ui/core/Typography";
import GRCCompanyFilter from "../component/grccomponent/GRCCompanyFilter";

class GRCReportCompanyCode extends Component {
  state = {
    dialogue: false,
    type: "",
    selectedData: {},
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updatePathname(pathname);
    this.props.loadFilter(this.props.token);
  }

  openDialogue = (type, data) => {
    this.setState({ dialogue: true, type: type, selectedData: data });
  };
  closeDialogue = () => {
    this.props.clearTableRiskTechReport();
    this.setState({ dialogue: false, type: "", selectedData: {} });
  };

  render() {
    return (
      <Grid
        container
        style={{ marginTop: 5, paddingRight: 10, paddingLeft: 10 }}
        spacing={0}
      >
        <Grid item md={12} style={{ margin: 5 }}>
          {this.props.sapSystem.value.length > 0 ? (
            <GRCCompanyFilter type="Report" />
          ) : null}
          {/* {Object.keys(this.props.grcreport).length>0?<GRCReportTable colors={this.props.colors} header={this.props.grcreport.header} data={this.props.grcreport.data}/>:null} */}
          {Object.keys(this.props.grcreport).length > 0 &&
          this.props.grcreport.data.length > 0 ? (
            <MUGRCReportTable
              colors={this.props.colors}
              header={this.props.grcreport.header}
              data={this.props.grcreport.data}
              name={this.props.grcreport.reportName[0]}
              openDialogue={this.openDialogue}
            />
          ) : null}
          {Object.keys(this.props.grcreport).length > 0 &&
          this.props.grcreport.data.length < 1 ? (
            <Grid
              container
              style={{ marginTop: 5, paddingRight: 10, paddingLeft: 10 }}
              spacing={0}
            >
              <Grid item md={12} style={{ margin: 5, alignItems: "center" }}>
                <Typography variant="subtitle2" color="inherit" style={{}}>
                  No Records found
                </Typography>
              </Grid>
            </Grid>
          ) : null}
          {this.props.loader ? <Loader /> : null}
          {this.state.dialogue ? (
            <GRCDragableDialogue
              dialogueState={this.state.dialogue}
              type={this.state.type}
              selectedData={this.state.selectedData}
              closeDialogue={this.closeDialogue}
            />
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  //this methos use to retrive state from redux store as props
  return {
    token: state.login.token, //state.reducername.value
    result: state.filter.result,
    sapSystem: state.filter.sapSystem,
    client: state.filter.client,
    loader: state.filter.loader,
    grcreport: state.filter.grcreport,
    colors: state.filter.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  // this methos used for dispatch action to reducer
  return {
    loadFilter: (token) => dispatch(action.initFilter(token)),
    updatePathname: (value) => dispatch(action.updatePathname(value)),
    clearTableRiskTechReport: () => dispatch(action.clearTableRiskTechReport()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GRCReportCompanyCode); //connect which return a HOC taking two parameters which help connect to redux store and component
