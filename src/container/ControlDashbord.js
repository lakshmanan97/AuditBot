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
import ControlFilter from '../component/controlcomponent/ControlFilter'
import ControlFirstSection from '../component/controlcomponent/ControlFirstSection'
import ControlFourthSection from '../component/controlcomponent/ControlFourthSection'
import ControlFifthSection from '../component/controlcomponent/ControlFifthSection'
import ControlThirdSection from '../component/controlcomponent/ControlThirdSection'
import ControlDataCard from '../component/controlcomponent/ControlDataCard'

import ControlSecondSecData from '../component/controlcomponent/ControlSecondSecData'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Loader from '../component/Loader'
import ControlsDraggableDialog from './ControlDragableDialogue'
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
       this.props.clearControlTableReport()
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
                 <ControlFilter type='Dashbord' />
                  :null}
                  <FilterFloatAction onclick={this.filterHide} state={this.state.isScrolling}/>
                  </div>
                :null}
                <ControlFirstSection dialogueOpen={this.openDialogue}/>
                {this.props.result? 
                    <Grid container style={{marginTop:1}} spacing={2}>
                        <Grid item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[0]} index={0}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[1]} index={1}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[2]} index={2}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[3]} index={3}/></Grid>
                    </Grid >:null
                    } 


                <ControlFourthSection dialogueOpen={this.openDialogue}/>
                {/* <ControlSecondSecData result={this.props.controlresult}/> */}

                {this.props.result? 
                    <Grid container style={{marginTop:1}} spacing={2}>
                        <Grid item md={2}> <ControlDataCard result={this.props.result.E_RESULT_02.data[0]} index={4}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[1]} index={5}/></Grid>
                        <Grid  item md={2}> <ControlDataCard result={this.props.result.E_RESULT_02.data[2]} index={6}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[3]} index={7}/></Grid>
                        <Grid  item md={2}> <ControlDataCard result={this.props.result.E_RESULT_02.data[2]} index={8}/></Grid>
                       
                    </Grid >:null
                    } 

                <ControlThirdSection dialogueOpen={this.openDialogue}/>

                {this.props.result? 
                    <Grid container style={{marginTop:1}} spacing={2}>
                         <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[3]} index={9}/></Grid>
                        <Grid item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[0]} index={10}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[1]} index={11}/></Grid>
                        <Grid  item md={3}> <ControlDataCard result={this.props.result.E_RESULT_02.data[2]} index={12}/></Grid>
                    </Grid >:null
                    } 




                <ControlFifthSection dialogueOpen={this.openDialogue}/>
                {this.props.loader?<Loader/>:null}
                {this.state.dialogue?<ControlsDraggableDialog dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue}/>:null}
                    {/* <LicenceFirstSection dialogueOpen={this.openDialogue}/>
                    <ControlSecondSecData result={this.props.licenseresult}/>
                    <LicenceThirdSection result={this.props.licenseresult} dialogueOpen={this.openDialogue}/>
                    {this.props.loader?<Loader/>:null}
                    {this.state.dialogue?<LicenceDragableDialogue dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue}/>:null} */}
                </Grid>
            </Grid>
        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        result:state.control.controlresult,
        loader:state.control.loader,
        sapSystem: state.control.sapSystem,
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initControlFilter(token)),
        updatePathname: (value) => dispatch(action.updatePathname(value)),
        clearControlTableReport:()=>dispatch(action.clearControlTableReport())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseDashbord);//connect which return a HOC taking two parameters which help connect to redux store and component