import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import SingleSelectDropDown from '../component/SingleSelectDropDown'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import LicenseFilter from '../component/licensecomponent/LicenseFilter'
import LicenceFirstSection from '../component/licensecomponent/LicenceFirstSection'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LicenseSecondSecData from '../component/licensecomponent/LicenseSecondSecData'
import LicenceThirdSection from '../component/licensecomponent/LicenceThirdSection'
import LicenceFourthSection from '../component/licensecomponent/LicenceFourthSection'
import LicenceFiveSection from '../component/licensecomponent/LicenceFiveSection'
import Loader from '../component/Loader'
import LicenseDataCard from "../component/licensecomponent/LicenseDataCard"
import LicenceDragableDialogue from './LicenceDragableDialogue'
import FilterFloatAction from '../component/FilterFloatAction'



class LicenseDashbord extends Component {

    state={
        dialogue:false,
        groupby:'',
        chart:'',
        isScrolling: false
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.props.updatePathname(pathname)
        this.props.loadFilter(this.props.token)
    }

    openDialogue=(chart,groupby)=>{
        console.log("reached parents"+groupby)
        this.setState({dialogue:true,groupby:groupby,chart:chart})
   }
   closeDialogue=()=>{
       this.props.clearLicanceTableReport()
       this.setState({dialogue:false,groupby:'',chart:''})
  }

  filterHide = () => {
    this.setState({ isScrolling: !this.state.isScrolling });
  };


    render() {


        return (
            <Grid container style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }} spacing={0}>
                <Grid item md={12}>
                {this.props.sapSystem.value.length>0?
                <div>
                {!this.state.isScrolling?
              <LicenseFilter type='Dashbord' />
             :null}
             <FilterFloatAction onclick={this.filterHide} state={this.state.isScrolling}/>
             </div>
                :null}
                    <LicenceFirstSection dialogueOpen={this.openDialogue}/>
                    {this.props.result? 
                    <Grid container style={{marginTop:1}} spacing={2}>
                        <Grid item md={3} sm={6} > <LicenseDataCard result={this.props.result.E_RESULT_02.data[0]} index={0}/></Grid>
                        <Grid  item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[1]} index={1}/></Grid>
                        <Grid  item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[2]} index={2}/></Grid>
                        <Grid  item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[3]} index={3}/></Grid>
                    </Grid >:null
                    } 

                    <LicenceFourthSection dialogueOpen={this.openDialogue}/>

                    {this.props.result? 
                    <Grid container style={{marginTop:1}} spacing={2}>
                        <Grid item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[4]} index={0}/></Grid>
                        <Grid  item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[5]} index={1}/></Grid>
                        <Grid  item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[6]} index={2}/></Grid>
                        <Grid  item md={3} sm={6}> <LicenseDataCard result={this.props.result.E_RESULT_02.data[7]} index={3}/></Grid>
                    </Grid >:null
                    } 
                    {/* <LicenseSecondSecData result={this.props.licenseresult}/> */}
                    <LicenceFiveSection dialogueOpen={this.openDialogue}/>
                    <LicenceThirdSection  dialogueOpen={this.openDialogue}/>
                    {this.props.loader?<Loader/>:null}
                    {this.state.dialogue?<LicenceDragableDialogue dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue}/>:null}
                </Grid>
            </Grid>
        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        result:state.licensefilter.licenseresult,
        loader:state.licensefilter.loader,
        sapSystem: state.licensefilter.sapSystem,
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initLicenseFilter(token)),
        updatePathname: (value) => dispatch(action.updatePathname(value)),
        clearLicanceTableReport:()=>dispatch(action.clearLicanceTableReport())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseDashbord);//connect which return a HOC taking two parameters which help connect to redux store and component