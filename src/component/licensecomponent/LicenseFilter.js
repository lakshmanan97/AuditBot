import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../../Store/actions/index'

import FilterSingleSelectDropDown from './FilterSingleSelectDropDown'
import FilterMultiSelectDropDown from './FilterMultiSelectDropDown'
import Datepicker from './Datepicker'
import LicenceTextFiled from './LicenceTextFiled'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';




class LicenseFilter extends Component {

    componentDidMount() {
    }



    changeSystem = (value) => {
        this.props.onChangeFilter(this.props.sapSystem, value)
    }
    changeClient = (value) => {
        this.props.onChangeFilter(this.props.client, value)
    }

    changeLevel = (value) => {
        this.props.onChangeFilter(this.props.level, value)
    }

    changeUserType = (value) => {
        this.props.onChangeFilter(this.props.userType, value)
    }

    changeUserGroup = (value) => {
        this.props.onChangeFilter(this.props.userGroup, value)
    }
    changeAccount = (value) => {
        this.props.onChangeFilter(this.props.account, value)
    }

    changeLicenseType = (value) => {
        this.props.onChangeFilter(this.props.licenseType, value)
    }

    changeUserStatus = (value) => {
        this.props.onChangeFilter(this.props.userStatus, value)
    }

    changeActiveUser = (value) => {
        this.props.onChangeFilter(this.props.activeUser, value)
    }
    changeTcodes = (value) => {
        this.props.onChangeFilter(this.props.tcodes, value)
    }

    changeCriteria = (value) => {
        this.props.onChangeFilter(this.props.criteria, value)
    }


    onfilterSumbit = () => {
        if (this.props.type == 'Dashbord') {
            this.props.submitLicenceFilter(this.props.token, this.props.sapSystem.selectedValue,
                this.props.client.selectedValue, this.props.level.selectedValue,
                this.props.userType.selectedValue, this.props.userGroup.selectedValue,
                this.props.account.selectedValue, this.props.licenseType.selectedValue,
                this.props.userStatus.selectedValue, this.props.activeUser.selectedValue,
                this.props.tcodes.selectedValue,this.props.criteria.selectedValue,
                this.props.userId,this.props.count,
                this.props.logondays,this.props.startDate,this.props.endDate)
            }else{
                this.props.licenceReport(this.props.token, this.props.sapSystem.selectedValue,
                    this.props.client.selectedValue, this.props.level.selectedValue,
                    this.props.userType.selectedValue, this.props.userGroup.selectedValue,
                    this.props.account.selectedValue, this.props.licenseType.selectedValue,
                    this.props.userStatus.selectedValue, this.props.activeUser.selectedValue,
                    this.props.tcodes.selectedValue,this.props.criteria.selectedValue,
                    this.props.userId,this.props.count,
                    this.props.logondays,this.props.startDate,this.props.endDate)
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
        let level = Object.keys(this.props.level).length != 0 ?
            this.props.level.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let userType = Object.keys(this.props.userType).length != 0 ?
            this.props.userType.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []

        let userGroup = Object.keys(this.props.userGroup).length != 0 ?
            this.props.userGroup.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []

        let account = Object.keys(this.props.account).length != 0 ?
            this.props.account.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let licenseType = Object.keys(this.props.licenseType).length != 0 ?
            this.props.licenseType.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let userStatus = Object.keys(this.props.userStatus).length != 0 ?
            this.props.userStatus.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let activeUser = Object.keys(this.props.activeUser).length != 0 ?
            this.props.activeUser.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let tcodes = Object.keys(this.props.tcodes).length != 0 ?
            this.props.tcodes.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let criteria = Object.keys(this.props.criteria).length != 0 ?
            this.props.criteria.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []


        return (
            // <Grid container style={{}} spacing={0}>
            //     <Grid item md={12}>
            <Card elevation='5' >
                <CardContent id="idFilterCard" style={{ minHeight: '6vh', padding: 0, marginTop: 'auto', marginBottom: 'auto' }}>
                    <Grid container spacing={2} style={{height: 'inherit', minHeight: 'inherit',paddingRight:'8px' }} >
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={level} preSelected={this.props.level.selectedValue} changeEventCallBack={this.changeLevel} label="Level" width='100' />
                        </Grid>
                        <Grid item md={1} sm={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <Datepicker onchange={this.props.changestartDate} value={this.props.startDate}/>
                        </Grid>
                        <Grid item md={1} sm={3} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <Datepicker onchange={this.props.changeendDate}  value={this.props.endDate}/>
                        </Grid>
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterMultiSelectDropDown values={sapSystem} preSelected={this.props.sapSystem.selectedValue} changeEventCallBack={this.changeSystem} label="System" width='100' />
                        </Grid>
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterMultiSelectDropDown values={sapClient} preSelected={this.props.client.selectedValue} changeEventCallBack={this.changeClient} label="Client" width='100' />
                        </Grid>
                        <Grid item md={2} sm={4} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterMultiSelectDropDown values={licenseType} preSelected={this.props.licenseType.selectedValue} changeEventCallBack={this.changeLicenseType} label="License Type" width='100' />
                        </Grid>

                        <Grid item md={2} sm={4} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterMultiSelectDropDown values={userGroup} preSelected={this.props.userGroup.selectedValue} changeEventCallBack={this.changeUserGroup} label="User Group" width='100' />
                        </Grid>
                        <Grid item md={2} sm={4} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterMultiSelectDropDown values={userType} preSelected={this.props.userType.selectedValue} changeEventCallBack={this.changeUserType} label="User Type" width='100' />
                        </Grid>
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterMultiSelectDropDown values={account} preSelected={this.props.account.selectedValue} changeEventCallBack={this.changeAccount} label="Account" width='100' />
                        </Grid>
                   
                  
                      
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto',paddingTop:1}}>
                            <FilterMultiSelectDropDown values={userStatus} preSelected={this.props.userStatus.selectedValue} changeEventCallBack={this.changeUserStatus} label="User Status" width='100' />
                        </Grid>
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto',paddingTop:1 }}>
                            <FilterSingleSelectDropDown values={activeUser} preSelected={this.props.activeUser.selectedValue} changeEventCallBack={this.changeActiveUser} label="Active User" width='100' />
                        </Grid>
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto' ,paddingTop:1 }}>
                            <FilterSingleSelectDropDown values={tcodes} preSelected={this.props.tcodes.selectedValue} changeEventCallBack={this.changeTcodes} label="Tcodes" width='100' />
                        </Grid>
                        <Grid item md={1} sm={2} style={{ marginTop: 'auto', marginBottom: 'auto',paddingTop:1 }}>
                            <FilterSingleSelectDropDown values={criteria} preSelected={this.props.criteria.selectedValue} changeEventCallBack={this.changeCriteria} label="Criteria" width='100' />
                        </Grid>
                        <Grid item md={1} sm={2} style={{ margin:'auto ',paddingTop:1 }}>
                        <LicenceTextFiled  label="Logon Days"  onchange={this.props.changelogon} value={this.props.logondays}/>
                            </Grid>
                           
                            <Grid item md={2} sm={3} style={{ margin:'auto ',paddingTop:1 }}>
                            <LicenceTextFiled label="% or Count"  onchange={this.props.changecount} value={this.props.count}/>
                            </Grid>

                            <Grid item md={2} sm={3} style={{ margin:'auto ',paddingTop:1}}>
                            <LicenceTextFiled label="User Id"  onchange={this.props.changeuserId} value={this.props.userId}/>
                            </Grid>
                            
                            <Grid item md={2} sm={4} style={{ margin:'auto ',paddingTop:1}}>
                           
                            </Grid>


                            <Grid item md={1} sm={2} style={{ margin:'auto',paddingTop:0}}>
                            <Button variant="contained" size="small" color="primary" style={{fontFamily:'Helvetica',padding:4,backgroundColor:'#009ED7', textTransform:'none', minWidth:'80px'}} onClick={() => this.onfilterSumbit()}>
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
        sapSystem: state.licensefilter.sapSystem,
        client: state.licensefilter.client,
        level: state.licensefilter.level,
        userType: state.licensefilter.userType,
        userGroup: state.licensefilter.userGroup,
        account: state.licensefilter.account,
        licenseType: state.licensefilter.licenseType,
        userStatus: state.licensefilter.userStatus,
        activeUser: state.licensefilter.activeUser,
        tcodes: state.licensefilter.tcodes,
        criteria: state.licensefilter.criteria,
        userId:state.licensefilter.userId,
        count: state.licensefilter.count,
        logondays: state.licensefilter.logondays,
        startDate: state.licensefilter.startDate,
        endDate: state.licensefilter.endDate

    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {

        onChangeFilter: (data, value) => dispatch(action.changeLicenceFilter(data, value)),
        changelogon:(input)=>dispatch(action.changelogon(input)),
        changecount:(input)=>dispatch(action.changecount(input)),
        changeendDate:(input)=>dispatch(action.changeendDate(input)),
        changestartDate:(input)=>dispatch(action.changestartDate(input)),
        changeuserId:(input)=>dispatch(action.changeuserId(input)),
        submitLicenceFilter:(token, sapSystem, client, level, userType, userGroup, 
            account, licenseType, userStatus, activeUser, tcodes,criteria,userId,count,logondays,startDate,endDate)=>dispatch(action.submitLicenceFilter(token, sapSystem, client, level, userType, userGroup, 
                account, licenseType, userStatus, activeUser, tcodes,criteria,userId,count,logondays,startDate,endDate)),
        licenceReport: (token, sapSystem, client, level, userType, userGroup, 
            account, licenseType, userStatus, activeUser, tcodes,criteria,userId,count,logondays,startDate,endDate)=>dispatch(action.licenceReport(token, sapSystem, client, level, userType, userGroup, 
                account, licenseType, userStatus, activeUser, tcodes,criteria,userId,count,logondays,startDate,endDate))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseFilter);//connect which return a HOC taking two parameters which help connect to redux store and component