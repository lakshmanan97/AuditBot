import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../../Store/actions/index'

import FilterSingleSelectDropDown from './FilterSingleSelectDropDown'
import FilterMultiSelectDropDown from './FilterMultiSelectDropDown'



import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';





class ControlFilter extends Component {

    componentDidMount() {
    }


    changeSystem = (value) => {
        this.props.onChangeFilter(this.props.sapSystem, value)
    }
    changeClient = (value) => {
        this.props.onChangeFilter(this.props.client, value)
    }

    changeMitigation = (value) => {
        this.props.onChangeFilter(this.props.mitigation, value)
    }
    changeDrillDown = (value) => {
        this.props.onChangeFilter(this.props.drillDown, value)
    }
    changeControls = (value) => {
        this.props.onChangeFilter(this.props.controls, value)
    }
    changeControl = (value) => {
        this.props.onChangeFilter(this.props.control, value)
    }



    onfilterSumbit = () => {
        if (this.props.type == 'Dashbord') {
            this.props.submitcontrolFilter(this.props.token, this.props.sapSystem.selectedValue,
                this.props.client.selectedValue, this.props.controls.selectedValue)
        } else if (this.props.type == 'Summary') {
            this.props.submitcontrolReportFilterSummary(this.props.token, this.props.sapSystem.selectedValue,
                this.props.client.selectedValue, this.props.controls.selectedValue)
        }
        else {
            this.props.submitcontrolReportFilter(this.props.token, this.props.sapSystem.selectedValue,
                this.props.client.selectedValue, this.props.control.selectedValue)
        }


    }
    dropDownFilter = (control, controls) => {
        if(this.props.type == "Dashbord") {
            return <Grid item md={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            </Grid>
        } else if(this.props.type == "Report") {
            return <Grid item md={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <FilterSingleSelectDropDown values={control} preSelected={this.props.control.selectedValue} changeEventCallBack={this.changeControl} label="Controls" width='100' />
        </Grid>
        } else {
            return <Grid item md={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <FilterMultiSelectDropDown values={controls} preSelected={this.props.controls.selectedValue} changeEventCallBack={this.changeControls} label="Controls" width='100' />
        </Grid>
        }
    }
    render() {


        let sapSystem = Object.keys(this.props.sapSystem).length != 0 ?
            this.props.sapSystem.value.map((param) => {
                return { 'key': param.ZID, 'value': param.ZID };
            }) : []

        let sapClient = Object.keys(this.props.client).length != 0 ?
            this.props.client.value.map((param) => {
                return { 'key': param.ZID, 'value': param.ZID };
            }) : []
        let mitigation = Object.keys(this.props.mitigation).length != 0 ?
            this.props.mitigation.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let drillDown = Object.keys(this.props.drillDown).length != 0 ?
            this.props.drillDown.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let controls = Object.keys(this.props.controls).length != 0 ?
            this.props.controls.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let control = Object.keys(this.props.control).length != 0 ?
            this.props.control.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
            console.log("cccc")
        
        return (
            // <Grid container style={{}} spacing={0}>
            //     <Grid item md={12}>
            <Card elevation='5' >
                <CardContent id="idFilterCard" style={{ minHeight: '7vh', padding: 0, marginTop: 'auto', marginBottom: 'auto' }}>
                    <Grid container spacing={2} style={{ height: 'inherit', minHeight: 'inherit', paddingRight: '8px' }} >

                        <Grid item md={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={sapSystem} preSelected={this.props.sapSystem.selectedValue} changeEventCallBack={this.changeSystem} label="System" width='100' />
                        </Grid>
                        <Grid item md={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={sapClient} preSelected={this.props.client.selectedValue} changeEventCallBack={this.changeClient} label="Client" width='100' />
                        </Grid>
                        {  this.dropDownFilter(control, controls) }
                        {/*  <Grid item md={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                           <FilterSingleSelectDropDown values={mitigation} preSelected={this.props.mitigation.selectedValue} changeEventCallBack={this.changeMitigation} label="Mitigation" width='100' /> 
                        </Grid>
                        <Grid item md={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            {/*  <FilterSingleSelectDropDown values={drillDown} preSelected={this.props.drillDown.selectedValue} changeEventCallBack={this.changeDrillDown} label="Drill Down" width='100' /> 
                        </Grid>*/}

                        <Grid item md={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                           
                        </Grid>

                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <Button variant="contained" size="small" color="primary" style={{ fontFamily: 'Helvetica', padding: 4, backgroundColor: '#009ED7', textTransform: 'none', minWidth: '80px' }} onClick={() => this.onfilterSumbit()}>
                                Execute
                            </Button>
                        </Grid>

                    </Grid>


                </CardContent>

            </Card>
            //     </Grid>

            // </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        sapSystem: state.control.sapSystem,
        client: state.control.client,
        mitigation: state.control.mitigation,
        drillDown: state.control.drillDown,
        controls: state.control.controls,
        control: state.control.control
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {

        onChangeFilter: (data, value) => dispatch(action.changeControlFilter(data, value)),
        submitcontrolFilter: (token, sapSystem, client, controls) => dispatch(action.submitcontrolFilter(token, sapSystem, client, controls)),
        submitcontrolReportFilter: (token, sapSystem, client, control) => dispatch(action.submitcontrolReportFilter(token, sapSystem, client, control)),
        submitcontrolReportFilterSummary: (token, sapSystem, client, controls) => dispatch(action.submitcontrolReportFilterSummary(token, sapSystem, client, controls))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlFilter);//connect which return a HOC taking two parameters which help connect to redux store and component