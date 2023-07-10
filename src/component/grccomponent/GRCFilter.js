import React, { Component } from "react";
import { connect } from "react-redux";
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from "../../Store/actions/index";

import FilterSingleSelectDropDown from "./FilterSingleSelectDropDown";
import FilterMultiSelectDropDown from "./FilterMultiSelectDropDown";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

class GRCFilter extends Component {
  componentDidMount() {
    // if (this.props.type == 'Dashbord') {
    //     this.props.submitFilter(this.props.token, this.props.riskType.selectedValue,
    //         this.props.sapSystem.selectedValue, this.props.client.selectedValue,
    //         this.props.riskLevel.selectedValue, this.props.businessModule.selectedValue,
    //         this.props.level.selectedValue, this.props.breakDown.selectedValue,
    //         this.props.riskid.selectedValue, this.props.reportType.selectedValue,
    //         this.props.mitigation.selectedValue)
    // } else {
    //     this.props.submitGRCFilter(this.props.token,
    //         this.props.sapSystem.selectedValue,
    //         this.props.client.selectedValue,
    //         this.props.level.selectedValue,
    //         this.props.riskType.selectedValue,
    //         this.props.riskLevel.selectedValue,
    //         this.props.businessModule.selectedValue,
    //         this.props.mitigation.selectedValue,
    //         this.props.drillDown.selectedValue,
    //         this.props.riskid.selectedValue, null)
    // }
  }

  changeSystem = (value) => {
    this.props.onChangeFilter(this.props.sapSystem, value);
  };
  changeClient = (value) => {
    this.props.onChangeFilter(this.props.client, value);
  };

  changeLevel = (value) => {
    this.props.onChangeFilter(this.props.level, value);
  };
  changeAccount = (value) => {
    this.props.onChangeFilter(this.props.account, value);
  };
  changeUserGroup = (value) => {
    this.props.onChangeFilter(this.props.userGroup, value);
  };
  changeRiskType = (value) => {
    this.props.onChangeFilter(this.props.riskType, value);
  };
  changeRiskLevel = (value) => {
    this.props.onChangeFilter(this.props.riskLevel, value);
  };
  changeBusinessModule = (value) => {
    this.props.onChangeFilter(this.props.businessModule, value);
  };

  changeMitigation = (value) => {
    this.props.onChangeFilter(this.props.mitigation, value);
  };

  changeRiskId = (value) => {
    this.props.onChangeFilter(this.props.riskid, value);
  };

  changeReportType = (value) => {
    this.props.onChangeFilter(this.props.reportType, value);
  };
  changeDrillDown = (value) => {
    this.props.onChangeFilter(this.props.drillDown, value);
  };

  onfilterSumbit = () => {
    console.log("type", this.props.type);
    if (this.props.type == "Dashbord") {
      this.props.submitFilter(
        this.props.token,
        this.props.riskType.selectedValue,
        this.props.sapSystem.selectedValue,
        this.props.client.selectedValue,
        this.props.riskLevel.selectedValue,
        this.props.businessModule.selectedValue,
        this.props.level.selectedValue,
        this.props.breakDown.selectedValue,
        this.props.riskid.selectedValue,
        this.props.reportType.selectedValue,
        this.props.mitigation.selectedValue,
        this.props.account.selectedValue,
        this.props.userGroup.selectedValue
      );
    } else {
      this.props.submitGRCFilter(
        this.props.token,
        this.props.sapSystem.selectedValue,
        this.props.client.selectedValue,
        this.props.level.selectedValue,
        this.props.riskType.selectedValue,
        this.props.riskLevel.selectedValue,
        this.props.businessModule.selectedValue,
        this.props.mitigation.selectedValue,
        this.props.drillDown.selectedValue,
        this.props.riskid.selectedValue,
        this.props.userinput,
        this.props.account.selectedValue,
        this.props.userGroup.selectedValue
      );
    }
  };
  render() {
    let level =
      Object.keys(this.props.level).length != 0
        ? this.props.level.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];

    let sapSystem =
      Object.keys(this.props.sapSystem).length != 0
        ? this.props.sapSystem.value.map((param) => {
            return { key: param.ZID, value: param.ZID };
          })
        : [];

    let sapClient =
      Object.keys(this.props.client).length != 0
        ? this.props.client.value.map((param) => {
            return { key: param.ZID, value: param.ZID };
          })
        : [];
    let riskType =
      Object.keys(this.props.riskType).length != 0
        ? this.props.riskType.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];
    let riskLevel =
      Object.keys(this.props.riskLevel).length != 0
        ? this.props.riskLevel.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];
    let businessModule =
      Object.keys(this.props.businessModule).length != 0
        ? this.props.businessModule.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];

    let mitigation =
      Object.keys(this.props.mitigation).length != 0
        ? this.props.mitigation.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];

    let riskid =
      Object.keys(this.props.riskid).length != 0
        ? this.props.riskid.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];
    let account =
      Object.keys(this.props.account).length != 0
        ? this.props.account.value.map((param) => {
            return { key: param.ZID, value: param.ZID };
          })
        : [];
    let userGroup =
      Object.keys(this.props.userGroup).length != 0
        ? this.props.userGroup.value.map((param) => {
            return { key: param.ZID, value: param.ZID };
          })
        : [];
    let reportType =
      Object.keys(this.props.reportType).length != 0
        ? this.props.reportType.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];
    let drillDown =
      Object.keys(this.props.drillDown).length != 0
        ? this.props.drillDown.value.map((param) => {
            return { key: param.ZDESC, value: param.ZID };
          })
        : [];

    return (
      // <Grid container style={{}} spacing={0}>
      //     <Grid item md={12}>
      <Card
        elevation="10"
        style={{ position: "sticky", position: "-webkit-sticky" }}
      >
        <CardContent
          id="idFilterCard"
          style={{
            minHeight: "7vh",
            padding: 10,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <Grid
            container
            spacing={1}
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              height: "inherit",
              minHeight: "inherit",
            }}
          >
            <Grid
              item
              md={1 / 2}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterSingleSelectDropDown
                values={level}
                preSelected={this.props.level.selectedValue}
                changeEventCallBack={this.changeLevel}
                label={this.props.level.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1 / 2}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterSingleSelectDropDown
                values={sapSystem}
                preSelected={this.props.sapSystem.selectedValue}
                changeEventCallBack={this.changeSystem}
                label={this.props.sapSystem.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1 / 2}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterSingleSelectDropDown
                values={sapClient}
                preSelected={this.props.client.selectedValue}
                changeEventCallBack={this.changeClient}
                label={this.props.client.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterMultiSelectDropDown
                values={riskType}
                preSelected={this.props.riskType.selectedValue}
                changeEventCallBack={this.changeRiskType}
                label={this.props.riskType.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterMultiSelectDropDown
                values={riskLevel}
                preSelected={this.props.riskLevel.selectedValue}
                changeEventCallBack={this.changeRiskLevel}
                label={this.props.riskLevel.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterMultiSelectDropDown
                values={businessModule}
                preSelected={this.props.businessModule.selectedValue}
                changeEventCallBack={this.changeBusinessModule}
                label={this.props.businessModule.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterMultiSelectDropDown
                values={riskid}
                preSelected={this.props.riskid.selectedValue}
                changeEventCallBack={this.changeRiskId}
                label={this.props.riskid.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterSingleSelectDropDown
                values={mitigation}
                preSelected={this.props.mitigation.selectedValue}
                changeEventCallBack={this.changeMitigation}
                label={this.props.mitigation.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterMultiSelectDropDown
                values={account}
                preSelected={this.props.account.selectedValue}
                changeEventCallBack={this.changeAccount}
                label={this.props.account.name}
                width="100"
              />
            </Grid>
            <Grid
              item
              md={1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <FilterMultiSelectDropDown
                values={userGroup}
                preSelected={this.props.userGroup.selectedValue}
                changeEventCallBack={this.changeUserGroup}
                label={this.props.userGroup.name}
                width="100"
              />
            </Grid>
            {/*this.props.type == 'Dashbord' ?
                        <Grid item md={1} style={{ marginTop:'auto', marginBottom:'auto'}}>
                            <FilterSingleSelectDropDown values={reportType} preSelected={this.props.reportType.selectedValue} changeEventCallBack={this.changeReportType} label="Report Type" width='100' />
                        </Grid>
        :null*/}

            {/*<Grid item md={1} style={{ marginTop:'auto', marginBottom:'auto'}}>
                            <FilterSingleSelectDropDown values={drillDown} preSelected={this.props.drillDown.selectedValue} changeEventCallBack={this.changeDrillDown} label={this.props.type == 'Report'?"Report Type":"Drill Down"} width='100' />
                    </Grid>*/}
            {this.props.type == "Report" ? (
              <Grid
                item
                md={1}
                style={{ margin: "auto 0px", padding: "0px 16px" }}
              >
                <TextField
                  id="outlined-search"
                  inputProps={{
                    style: {
                      height: 35,
                      padding: "0 14px",
                      fontSize: 12,
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: 12,
                      fontFamily: "Helvetica",
                    },
                  }}
                  size="small"
                  label={
                    this.props.level.selectedValue == "1" ? "User" : "Role"
                  }
                  type="search"
                  variant="outlined"
                  onChange={(event) => {
                    this.props.changeUserInput(event.target.value);
                  }}
                />
              </Grid>
            ) : null}
            <Grid
              item
              md={this.props.type == "Dashbord" ? 1 : 1}
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              {/* <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => this.onfilterSumbit()}>
                                <SearchIcon />
                            </IconButton> */}
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{
                  fontFamily: "Helvetica",
                  padding: 2,
                  backgroundColor: "#009ED7",
                  textTransform: "none",
                  minWidth: "70px",
                }}
                onClick={() => this.onfilterSumbit()}
              >
                Execute
              </Button>
            </Grid>
          </Grid>

          {/* <Grid container spacing={1}>
                                <Grid item md={4}>
                                    <FilterMultiSelectDropDown values={riskid} preSelected={this.props.riskid.selectedValue} changeEventCallBack={this.changeRiskId} label="Risk Id" width='100' />
                                </Grid>
                                <Grid item md={2}>
                                    <FilterSingleSelectDropDown values={mitigation} preSelected={this.props.risk.selectedValue} changeEventCallBack={this.changeMitigation} label="Mitigation" width='100' />
                                </Grid>
                                <Grid item md={2}>
                                    <FilterSingleSelectDropDown values={reportType} preSelected={this.props.reportType.selectedValue} changeEventCallBack={this.changeReportType} label="Report Type" width='100' />
                                </Grid>
                                <Grid item md={2}>

                                </Grid>
                                <Grid item md={2}>
                                    <Button variant="contained" color="primary"  onClick={()=>this.onfilterSumbit()}>
                                      Search
                                    </Button>
                                </Grid>

                            </Grid> */}
        </CardContent>
      </Card>
      //     </Grid>

      // </Grid>
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
    account: state.filter.account,
    userGroup: state.filter.userGroup,
    mitigation: state.filter.mitigation,
    level: state.filter.level,
    reportType: state.filter.reportType,
    riskid: state.filter.riskid,
    drillDown: state.filter.drillDown,
    breakDown: state.filter.breakDown,
    result: state.filter.result,
    userinput: state.filter.userinput,
  };
};

const mapDispatchToProps = (dispatch) => {
  // this methos used for dispatch action to reducer
  return {
    loadFilter: (token) => dispatch(action.initFilter(token)),
    onChangeFilter: (data, value) => dispatch(action.changeFilter(data, value)),
    changeUserInput: (value) => dispatch(action.changeUserInput(value)),
    // changeLevel: (level) => dispatch(action.changeLevel(level)),
    submitFilter: (
      token,
      riskType,
      sapSystem,
      client,
      riskLevel,
      businessModule,
      level,
      breakDown,
      riskId,
      reportType,
      mitigation,
      account,
      userGroup
    ) =>
      dispatch(
        action.submitFilter(
          token,
          riskType,
          sapSystem,
          client,
          riskLevel,
          businessModule,
          level,
          breakDown,
          riskId,
          reportType,
          mitigation,
          account,
          userGroup
        )
      ),
    submitGRCFilter: (
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
      userinput,
      account,
      userGroup
    ) =>
      dispatch(
        action.riskGrcReport(
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
          userinput,
          account,
          userGroup
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GRCFilter); //connect which return a HOC taking two parameters which help connect to redux store and component
