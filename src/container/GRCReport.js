import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../Store/actions/index";
import Grid from "@material-ui/core/Grid";

import Loader from "../component/Loader";
import MUGRCReportTable from "../component/grccomponent/MUGRCReportTable";
import Typography from "@material-ui/core/Typography";
import GRCFilter from "../component/grccomponent/GRCFilter";
import GRCDragableDialogue from "./GRCDragableDialogue";

class GRCReport extends Component {
  state = {
    dialogue: false,
    type: "",
    ztype: "",
  };
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.updatePathname(pathname);
    this.props.loadFilter(this.props.token);
  }

  // openDialogue = (type, ztype) => {

  // }
  openDialogue = (type, ztype) => {
    this.setState({ dialogue: true, type: type, ztype: ztype });
  };
  closeDialogue = () => {
    console.log("ener for cloase dialoguhe");
    this.props.clearTableRiskTechReport();
    this.setState({ dialogue: false, type: "", ztype: "" });
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
            <GRCFilter type="Report" />
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
              ztype={this.state.ztype}
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
    client: state.filter.client,
    loader: state.filter.loader,
    grcreport: state.filter.grcreport,
    colors: state.filter.colors,
    sapSystem: state.filter.sapSystem,
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

export default connect(mapStateToProps, mapDispatchToProps)(GRCReport); //connect which return a HOC taking two parameters which help connect to redux store and component
