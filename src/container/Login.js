import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import SingleSelectDropDown from '../component/SingleSelectDropDown'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';


class Login extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.onStart()
    }

    changeInSystem = (value) => {
        this.props.onchangeSystem(value, this.props.systemConfig);
    }

    changeInClient = (value) => {
        let clientSelected = this.props.systemConfig.systemConf[this.props.systemConfig.selectedSys].filter(param => param.client === value)[0]
        console.log(clientSelected)
        this.props.onchangeClient(value, clientSelected.ipAddress, clientSelected.instanse);
    }
    onLogin = () => {

        this.props.onLogin({
            username: this.props.username,
            password: this.props.password,
            system: this.props.systemConfig.selectedSys,
            client: this.props.systemConfig.selectedClient,
            ip: this.props.systemConfig.selectedIP,
            instanse: this.props.systemConfig.selectedinstanse,
            loginCallBack: (isSuccess) => {
                if (isSuccess) {
                    this.props.history.push('/')
                }
            }
        })
        // this.props.onLogin(this.props.username, this.props.password, this.props.systemConfig.selectedSys,
        //   this.props.systemConfig.selectedClient, this.props.systemConfig.selectedIP, this.props.systemConfig.selectedinstanse, "test")
    }

    render() {

        if (this.props.isAuthenticated) {
            return <Redirect to='/' />
        }

        let systemValues = Object.keys(this.props.systemConfig).length != 0 ?
            Object.keys(this.props.systemConfig.systemConf).map((param) => {
                return { 'key': param, 'value': param };
            }) : []
        let clientValue = Object.keys(this.props.systemConfig).length != 0 ?
            this.props.systemConfig.systemConf[this.props.systemConfig.selectedSys].map(param => {
                return { 'key': param.client, 'value': param.client }
            }) : []

        return (
            <Grid container style={{ marginTop: 90, marginLeft: 20, marginRight: 20, alignItems: 'center' }} spacing={0}>
                <Grid item md={4} />
                <Grid item md={4} >
                    <LoginCard
                        systemValues={systemValues} systemPreSelected={this.props.systemConfig.selectedSys ? this.props.systemConfig.selectedSys : ''} systemEventCallBack={this.changeInSystem}
                        clientValues={clientValue} clientPreSelected={this.props.systemConfig.selectedClient ? this.props.systemConfig.selectedClient : ''} clientEventCallBack={this.changeInClient}
                        onChangeUsername={this.props.onchangeUsername}
                        onChangeOfPassword={this.props.onchangePassword}
                        onLogin={this.onLogin}
                        error={this.props.error}
                    />
                </Grid>
                <Grid item md={4} />
            </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        isAuthenticated: state.login.token !== null,
        error: state.login.error,
        systemConfig: state.login.systemConfig,
        username: state.login.username,
        password: state.login.password
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        onLogin: (username, password, system, client, ip, instanse) => dispatch(action.onLogin(username, password, system, client, ip, instanse)),
        onchangeSystem: (value, data) => dispatch(action.onchangeSystem(value, data)),
        onchangeClient: (client, ip, instanse) => dispatch(action.onchangeClient(client, ip, instanse)),
        onchangeUsername: (value) => dispatch(action.onchangeUserName(value)),
        onchangePassword: (value) => dispatch(action.onchangePassword(value)),
        onStart: () => dispatch(action.fetchDefaultData()),
        onLogout: () => dispatch(action.onLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);//connect which return a HOC taking two parameters which help connect to redux store and component