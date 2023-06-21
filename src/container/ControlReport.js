import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'

import Grid from '@material-ui/core/Grid';

import Loader from '../component/Loader'
import GRCDragableDialogue from './GRCDragableDialogue'
import MUControlReportTable from '../component/controlcomponent/MUControlReportTable'
import Typography from '@material-ui/core/Typography';
import ControlFilter from '../component/controlcomponent/ControlFilter'

class ControlReport extends Component {

    componentDidMount() {
        const { pathname } = this.props.location;
        this.props.updatePathname(pathname)
        this.props.loadFilter(this.props.token)
    }

    render() {
        return (
            <Grid container style={{ marginTop: 5, paddingRight: 10, paddingLeft: 10 }} spacing={0}>
                <Grid item md={12} style={{ margin: 5 }}>
                    {this.props.sapSystem.value.length > 0 ? <ControlFilter type='Report' /> : null}
                    {/* {Object.keys(this.props.grcreport).length>0?<GRCReportTable colors={this.props.colors} header={this.props.grcreport.header} data={this.props.grcreport.data}/>:null} */}
                    {Object.keys(this.props.controlreport).length > 0 && this.props.controlreport.data.length > 0 ? <MUControlReportTable colors={this.props.colors} header={this.props.controlreport.header} data={this.props.controlreport.data} name={this.props.controlreport.reportName[0]} /> : null}
                    {Object.keys(this.props.controlreport).length > 0 && this.props.controlreport.data.length < 1 ?
                        <Grid container style={{ marginTop: 5, paddingRight: 10, paddingLeft: 10 }} spacing={0}>
                            <Grid item md={12} style={{ margin: 5, alignItems: 'center' }}>
                                <Typography variant="subtitle2" color="inherit" style={{}}>
                                    No Records found
                                </Typography>
                            </Grid>
                        </Grid> : null}
                    {this.props.loader ? <Loader /> : null}

                </Grid >
            </Grid>
        )
    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        loader: state.control.loader,
        controlreport: state.control.controlreport,
        colors: state.control.colors,
        sapSystem: state.control.sapSystem,
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initControlFilter(token)),
        updatePathname: (value) => dispatch(action.updatePathname(value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlReport);//connect which return a HOC taking two parameters which help connect to redux store and component