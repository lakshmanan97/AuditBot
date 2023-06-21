import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import SingleSelectDropDown from '../component/SingleSelectDropDown'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import LicenseDashbord from './LicenseDashbord'
import GRCDashbord from './GRCDashBord'
import GRCReport from './GRCReport'
import LicenseReport from './LicenseReport'
import GRCRiskTeccReport from './GRCRiskTeccReport'
import ControlDashbord from './ControlDashbord'
import ControlReport from './ControlReport'
import ControlSummaryReport from './ControlSummaryReport'
import Login from './Login';
import Landing from './Landing'
import Help from './Help'
import GRCReportCompanyCode from './GRCReportCompanyCode';



class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }



    render() {

        if (!this.props.isAuthenticated) {
            return <Redirect to='/login' />
        }

        let routes = (
            <Switch>
                <Route path='/grcdashbord' exact component={GRCDashbord} />
                <Route path='/' exact component={Landing} />
                <Route path='/grcreport' exact component={GRCReport} />
                <Route path='/grcreport-company' exact component={GRCReportCompanyCode} />
                <Route path='/licensedashbord' exact component={LicenseDashbord} />
                <Route path='/controldashbord' exact component={ControlDashbord} />
                <Route path='/controlreport' exact component={ControlReport} />
                <Route path='/controlsummaryreport' exact component={ControlSummaryReport} />
                <Route path='/grcrisktechviewreport' exact component={GRCRiskTeccReport} />
                <Route path='/licensereport' exact component={LicenseReport} />
                <Route path='/help' exact component={Help} />
            </Switch>
        );
        return (
            <Grid container style={{ paddingBottom: 15 }} spacing={0}>
                <Grid container md={12} style={{ paddingLeft: 1 }}>
                    <HeaderContainer />
                    {routes}
                </Grid>
            </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        isAuthenticated: state.login.token !== null,
        login: state.login
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);//connect which return a HOC taking two parameters which help connect to redux store and component