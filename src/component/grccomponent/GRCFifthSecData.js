import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../../Store/actions/index'
import Grid from '@material-ui/core/Grid';
import GRCGraphCard from './GRCGraphCard'
import GRCStackGraphCard from './GRCStackGraphCard'




class GRCFifthSecData extends Component {

    componentDidMount() {

    }

    checkForDataToShow = (data) => {
        if (data && Object.keys(data).length > 0) {
            return true;
        }
        return false;
    }

    graphNameOnReportType = () => {
        if (this.props.reportTypeSelected == '1') {
            return 'Risk Type'
        }
        if (this.props.reportTypeSelected == '2') {
            return 'Risk Level'
        }
        if (this.props.reportTypeSelected == '3') {
            return 'Business Module'
        }
    }


    render() {

        let isDataReadtToShow = this.checkForDataToShow(this.props.result)

        return (
            <Grid container style={{ marginTop: 10 }} spacing={2}>
                <Grid item md={6} style={{ paddingTop: 0 }}>
                    {isDataReadtToShow ? <GRCGraphCard chart='03' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_03.data} name={this.props.result.E_REPORT.data[2].ZDESC} chartType={3} dialogueOpen={this.props.dialogueOpen} chartId="SEC321" header={this.props.result.header.data[2].ZDESC}/> : null}
                </Grid>

                <Grid item md={6} style={{ paddingTop: 0 }}>
                    {isDataReadtToShow ? <GRCGraphCard chart='04' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_03.data} name={this.props.result.E_REPORT.data[3].ZDESC} chartType={1} dialogueOpen={this.props.dialogueOpen} chartId="SEC34" header={this.props.result.header.data[3].ZDESC} /> : null}
                </Grid>

            </Grid>


        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        isUserLogedIn: state.login.isUserLogedIn,
        username: state.login.username,
        riskType: state.filter.riskType,
        sapSystem: state.filter.sapSystem,
        client: state.filter.client,
        riskLevel: state.filter.riskLevel,
        businessModule: state.filter.businessModule,
        risk: state.filter.risk,
        level: state.filter.level,
        reportType: state.filter.reportType,
        riskid: state.filter.riskid,
        breakDown: state.filter.breakDown,
        result: state.filter.result,
        reportTypeSelected: state.filter.reportTypeSelected,
        levelSelected: state.filter.levelSelected,
        colors: state.filter.colors

    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initFilter(token)),
        onChangeFilter: (data, value) => dispatch(action.changeFilter(data, value)),
        changeLevel: (level) => dispatch(action.changeLevel(level)),
        submitFilter: (token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown) => dispatch(action.submitFilter(token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown)),
        submitGRCFilter: (token, system, client, level, riskType, riskLevel, appclass, risk) => dispatch(action.riskGrcReport(token, system, client, level, riskType, riskLevel, appclass, risk))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GRCFifthSecData);//connect which return a HOC taking two parameters which help connect to redux store and component