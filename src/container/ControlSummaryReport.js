import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'

import Grid from '@material-ui/core/Grid';

import Loader from '../component/Loader'
import MUSummaryControlReportTable from '../component/controlcomponent/MUSummaryControlReportTable'
import Typography from '@material-ui/core/Typography';
import ControlFilter from '../component/controlcomponent/ControlFilter'
import ControlsDraggableDialog from './ControlDragableDialogue'


class ControlSummaryReport extends Component {
    state = {
        dialogue: false,
        groupby: '',
        chart: ''
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.props.updatePathname(pathname)
        this.props.loadFilter(this.props.token)
    }

    openDialogue = (chart, groupby) => {
        console.log("reached parents" + groupby)
        this.setState({ dialogue: true, groupby: groupby, chart: chart })
    }

    closeDialogue = () => {
        this.props.clearControlTableReport()
        this.setState({ dialogue: false, groupby: '', chart: '' })
    }

    render() {
        return (
            <Grid container style={{ marginTop: 5, paddingRight: 10, paddingLeft: 10 }} spacing={0}>
                <Grid item md={12} style={{ margin: 5 }}>
                    {this.props.sapSystem.value.length > 0 ? <ControlFilter type='Summary' /> : null}
                    {/* {Object.keys(this.props.grcreport).length>0?<GRCReportTable colors={this.props.colors} header={this.props.grcreport.header} data={this.props.grcreport.data}/>:null} */}
                    {Object.keys(this.props.controlsummaryreport).length > 0 && this.props.controlsummaryreport.data.length > 0 ? <MUSummaryControlReportTable colors={this.props.colors} header={this.props.controlsummaryreport.header} data={this.props.controlsummaryreport.data} name={this.props.controlsummaryreport.reportName[0]} openDialogue={this.openDialogue} /> : null}
                    {Object.keys(this.props.controlsummaryreport).length > 0 && this.props.controlsummaryreport.data.length < 1 ?
                        <Grid container style={{ marginTop: 5, paddingRight: 10, paddingLeft: 10 }} spacing={0}>
                            <Grid item md={12} style={{ margin: 5, alignItems: 'center' }}>
                                <Typography variant="subtitle2" color="inherit" style={{}}>
                                    No Records found
                                </Typography>
                            </Grid>
                        </Grid> : null}
                    {this.props.loader ? <Loader /> : null}
                    {this.state.dialogue ? <ControlsDraggableDialog dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue} /> : null}
                </Grid >
            </Grid>
        )
    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        loader: state.control.loader,
        controlsummaryreport: state.control.controlsummaryreport,
        colors: state.control.colors,
        sapSystem: state.control.sapSystem,
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initControlFilter(token)),
        updatePathname: (value) => dispatch(action.updatePathname(value)),
        clearControlTableReport: () => dispatch(action.clearControlTableReport())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlSummaryReport);//connect which return a HOC taking two parameters which help connect to redux store and component