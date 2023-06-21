import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import ControlsDraggableDialog from '../component/controlcomponent/ControlsDraggableDialog'
import * as action from '../Store/actions/index'




class ControlDragableDialogue extends Component {

    componentDidMount() {
        console.log("Ssss")
        const chartData = {
            "SEC32":"002005",
            "SEC33":"002019",
            "SEC34":"006005",
            "SEC35":"002007",
            "SEC36":"005003",
            "SEC37":"002018",
            "SEC38":"006006",
            "chart": this.props.groupby
        }
        if(this.props.chart=="SEC31"){
            this.props.submitcontrolReportFilterSummaryDialogue(this.props.token, this.props.sapSystem.filtered,
                this.props.client.filtered, [])
        }else{
        this.props.submitcontrolReportFilterDialogue(this.props.token, this.props.sapSystem.filtered,
            this.props.client.filtered, chartData[this.props.chart])
        }
    }
        


    
    
    

 

    render() {
        

        return (
            <div>
          {this.props.dialogueState && !this.props.loader && Object.keys(this.props.controltablereport).length>0?<ControlsDraggableDialog dialogueState={this.props.dialogueState} colors={this.props.colors} header={this.props.controltablereport.header} data={this.props.controltablereport.data} closeDialogue={this.props.closeDialogue} name={this.props.controltablereport.reportName[0]}/>:null}
          </div>
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
        control: state.control.control,
        loader:state.control.loader,
        controltablereport:state.control.controltablereport,
        colors:state.control.colors
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
     return {
        submitcontrolReportFilterDialogue: (token, sapSystem, client, control) => dispatch(action.submitcontrolReportFilterDialogue(token, sapSystem, client, control)),
        submitcontrolReportFilterSummaryDialogue: (token, sapSystem, client, control) => dispatch(action.submitcontrolReportFilterSummaryDialogue(token, sapSystem, client, control))
         
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlDragableDialogue);//connect which return a HOC taking two parameters which help connect to redux store and component