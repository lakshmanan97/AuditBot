import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import SingleSelectDropDown from '../SingleSelectDropDown'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import IconButton from '@material-ui/core/IconButton';
import TocIcon from '@material-ui/icons/Toc';

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import CloseIcon from '@material-ui/icons/Close';
import BarChartIcon from '@material-ui/icons/BarChart';
import LicenceReportTable from './LicenceReportTable'
import LicenseReportStackedTable from './LicenseReportStackedTable'


const height = 100
const labelOffset = -6
const focused = 3

let COLORS = ["#004c6d", "#255e7e", "#3d708f", "#5383a1", "#7CB342", "#64B5F6", "#4DD0E1", "#AED581", "#0277bd", "#90caf9", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSFIRSTSTACK = ["#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSSECONDSTACK = ["#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSTHIRDSTACK = ["#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const RADIAN = Math.PI / 180;

const legendMap = [{ id: 'COL1', value: 'Executed Risk', type: "square" }, { id: 'COL2', value: 'Executed Risk', type: "square" }, { id: 'COL3', value: 'Executed Risk', type: "square" }]

const useStyles = makeStyles((theme) => ({
  root: {

    padding: 2,
    alignItems: "center",
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  dialoguewidth: {
    maxWidth: 'inherit'
  },
  media: {
    width: 300,
    height: 75,
    marginLeft: '5%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  resize: {
    fontSize: 15,
    padding: '12px 14px'
  },
  icon: {
    right: 0,
    height: 20
  },
  rootSelect: {
    paddingLeft: '3px',
    paddingRight: '18px !important'
  },
  title:{
    fontSize:'1.0rem !important'
  }
}));



function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

/* #0288D1 */



const LicenceStackGraphCard = (props) => {

  const proesResultData = (data, key) => {
    if (data && data != null && data.length > 0) {
      let filtereddata = data.filter(p => p.ZTYPE === key)
  
      let mappedData = [];
      filtereddata.map(v => {
        let temp = {};
        temp.name = v.UTYPLONGTEXT;
        temp.COUNT1 = v.COL1;
        temp.COUNT2 = v.COL2;
        if(v.COL3!=0)
        temp.COUNT3 = v.COL3;
        if(v.COL4!=0)
        temp.COUNT4 = v.COL4;
        temp.ZTYPE = v.ZTYPE;
        temp.REC = v.REC;
        temp.LIC_TYPE = v.LIC_TYPE;
        mappedData.push(temp);
      })
      /*     let array=[1,2,3,4,5,6,7,8,9,10]
          array.map(p=>{
              let temp={};
              temp.x='test'+p;
              temp.y=p*2;
              values.push(temp); 
          }) */
      return filtereddata
    } else {
      return [];
    }
  }
  const getChart = (data, value, color, stack) => {
    switch (value) {


      case 1:
        if (stack == '4')
          return getRCHBarChartFourStack(data, color);
        if (stack == '3')
          return getRCHBarChartThreeStack(data, color);

      case 2:
        if (stack == '4')
          return getRCVBarChartFourStack(data, color);
        if (stack == '3')
          return getRCVBarChartThreeStack(data, color);
      case 3:
        if (stack == '4')
          return getRCVBarChartFour(data, color);
        if (stack == '3')
          return getRCVBarChartThree(data, color);

      default:
        return getRCHBarChartFourStack(data, color)
    }
  }





  const getRCVBarChartFourStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="4%"
      margin={{
        top: 5, right: 30, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <LabelList dataKey="name" position="top" />
      <CartesianGrid vertical={false} horizontal={true} />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={15} align='center' layout='horizontal' verticalAlign='top' height='35px' wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis axisLine={false} tickLine={false} dataKey="UTYPLONGTEXT" interval={0} type="category" stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis axisLine={false} tickLine={false} interval={0} stroke="#bdbdbd" width={80} tick={CustomizedYAxisTick} />
      <Bar dataKey="COL1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="COL1" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white',fontFamily:'bold' }} />
      </Bar>
      <Bar dataKey="COL2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)}>
        <LabelList dataKey="COL2" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white' ,fontFamily:'bold'}} />
      </Bar>
      <Bar dataKey="COL3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)}>
        <LabelList dataKey="COL3" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white',fontFamily:'bold' }} />
      </Bar>
      <Bar dataKey="COL4" stackId="a" fill={colorState[3]} onClick={(data) => getData(data)}>
        <LabelList dataKey="COL4" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white',fontFamily:'bold' }} />
      </Bar>

      {/* <Bar dataKey="COL1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
              {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
              }
          </Bar>
          <Bar dataKey="COL2" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
              {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
              }
          </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartFour = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="4%"
      barGap={1}
      margin={{
        top: 5, right: 30, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <LabelList dataKey="name" position="top" />
      <CartesianGrid vertical={false} horizontal={true} />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={15} align='center' layout='horizontal' verticalAlign='top' height='35px' wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis axisLine={false} tickLine={false} dataKey="UTYPLONGTEXT" interval={0} type="category" stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis axisLine={false} tickLine={false} interval={0} stroke="#bdbdbd" width={80} tick={CustomizedYAxisTick} />
      <Bar dataKey="COL1" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="COL1" position="top"  style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black' ,fontFamily:"bold"} }/>
      </Bar>
      <Bar dataKey="COL2" fill={colorState[1]} onClick={(data) => getData(data)}>
        <LabelList dataKey="COL2" position="top"  style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black' ,fontFamily:"bold"}} />
      </Bar>
      <Bar dataKey="COL3" fill={colorState[2]} onClick={(data) => getData(data)}>
        <LabelList dataKey="COL3" position="top"  style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black',fontFamily:"bold" }} />
      </Bar>
      <Bar dataKey="COL4" fill={colorState[3]} onClick={(data) => getData(data)}>
        <LabelList dataKey="COL4" position="top"  style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black' ,fontFamily:"bold"}} />
      </Bar>


    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartThreeStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="4%"
      stackOffset="sign"
      barGap={2}
      margin={{
        top: 5, right: 30, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} horizontal={true} />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={15} align='center' layout='horizontal' verticalAlign='top' height='35px' wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis axisLine={false} tickLine={false} dataKey="UTYPLONGTEXT" interval={0} type="category" stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis  domain={['dataMin', 'dataMax']} axisLine={false} tickLine={false} interval={0} stroke="#bdbdbd" width={80} tick={CustomizedYAxisTick} />
      <Bar dataKey="COL1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="COL1" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white',fontFamily:'bold' }} />
      </Bar>
      <Bar dataKey="COL2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
        <LabelList dataKey="COL2" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white',fontFamily:'bold' }} />
      </Bar>
      <Bar dataKey="COL3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >
        <LabelList dataKey="COL3" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white' ,fontFamily:'bold'}} />
      </Bar>
      {/* <Bar dataKey="COL1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
            }
        </Bar>
        <Bar dataKey="COL2"  stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
            }
        </Bar>
        <Bar dataKey="COL3" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSTHIRDSTACK[index % COLORSTHIRDSTACK.length]} />)
            }
        </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartThree = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="5%"
      margin={{
        top: 5, right: 30, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} horizontal={true} />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={15} align='center' layout='horizontal' verticalAlign='top' height='35px' wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} margin={{ top: 0, left: 0, right: 0, bottom: 20 }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis axisLine={false} tickLine={false} dataKey="UTYPLONGTEXT" interval={0} type="category" stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis  axisLine={false} tickLine={false} interval={0} stroke="#bdbdbd" width={80} tick={CustomizedYAxisTick} />
      <Bar dataKey="COL1" fill={colorState[0]} onClick={(data) => getData(data)} >

        <LabelList dataKey="COL1" position="top" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black',fontFamily:'bold' }} />
      </Bar>
      <Bar dataKey="COL2" fill={colorState[1]} onClick={(data) => getData(data)} >

        <LabelList dataKey="COL2" position="top" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black',fontFamily:'bold' }} />
      </Bar>
      <Bar dataKey="COL3" fill={colorState[2]} onClick={(data) => getData(data)} >

        <LabelList dataKey="COL3" position="top" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'black',fontFamily:'bold' }} />
      </Bar>
    </BarChart></ResponsiveContainer>)
  }


  const CustomizedAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={15}  textAnchor="middle" fontSize={12} fill="black" fontFamily={colorState[16]} transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }

  const CustomizedYAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={0} dx={-10} textAnchor="end" fontSize={12} fill="black" fontFamily={colorState[16]} transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }





  const getRCHBarChartThreeStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="4%"
        stackOffset="sign"
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
          <CartesianGrid vertical={true} horizontal={false} />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={15} align='center' layout='horizontal' verticalAlign='top' height='35px' wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />

        <XAxis domain={['dataMin', 'dataMax']} type='number' axisLine={false} tickLine={false} stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis axisLine={false} tickLine={false} dataKey="UTYPLONGTEXT" type="category" stroke="#bdbdbd" width={80} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="COL1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL1" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white' ,fontFamily:'bold'}} />
        </Bar>
        <Bar dataKey="COL2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL2" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white',fontFamily:'bold' }} />
        </Bar>
        <Bar dataKey="COL3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL3" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white',fontFamily:'bold' }} />
        </Bar>
      </BarChart></ResponsiveContainer>)
  }


  const getRCHBarChartFourStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="4%"
        margin={{
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid vertical={true} horizontal={false} />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={15} align='center' layout='horizontal' verticalAlign='top' height='35px' wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />
        <XAxis type='number' axisLine={false} tickLine={false} stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis axisLine={false} tickLine={false} dataKey="UTYPLONGTEXT" type="category" stroke="#bdbdbd" width={120} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="COL1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL1" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="COL2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL2" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="COL3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL3" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="COL4" stackId="a" fill={colorState[3]} onClick={(data) => getData(data)} >
          <LabelList dataKey="COL4" position="center" style={{ textAnchor: 'middle', fontSize: '90%', fill: 'white' }} />
        </Bar>

      </BarChart></ResponsiveContainer>)
  }



  const legendText = (value) => {
    if (value == 'COL1') {
      return "Purchased"
    }
    if (value == 'COL2') {
      return "Recommened"
    }
    if (value == 'COL3') {
      if(chartId=='SEC111')
      return "Additional/Excess (Percentage)"
      else
      return "Additional/Excess"
    }
    if (value == 'COL4') {
      return "Unused"
    }
  }

  const legendTextPercentage = (value) => {
    if (value == 'COL1') {
      return "Purchased"
    }
    if (value == 'COL2') {
      return "Recommened"
    }
    if (value == 'COL3') {
      return "Additional/Excess (Percentage)"
    }
    if (value == 'COL4') {
      return "Unused"
    }
  }

  const tooltipText = (value, name) => {
    if (name == 'COL1') {
      return [value, "Purchased",]
    }
    if (name == 'COL2') {
      return [value, "Recommened"]
    }
    if (name == 'COL3') {
      return [value, "Additional"]
    }
    if (name == 'COL4') {
      return [value, "Unused"]
    }
  }


  const changeGraph = (event) => {
    setChartState(event.target.value)
  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTableHeader = (data, key,headerdata) => {
    if (data == undefined || data == null || data.length < 1) {
      return []
    }
    let filtereddata = data.filter(p => p.ZTYPE === key);
    if (filtereddata.length < 1) {
      return []
    }

    let columnarray = (key == '03') ? ["LIC_TYPE", "UTYPLONGTEXT", "COL1", "COL2", "COL3"] : ["LIC_TYPE", "UTYPLONGTEXT", "COL1", "COL2", "COL3", "COL4"]
    // let header = Object.keys(filtereddata[0]).filter(t => columnarray.includes(t)).map(p => {
    //   if (p == 'LIC_TYPE') {
    //     return 'COLUMN1'
    //   }
    //   if (p == 'UTYPLONGTEXT') {
    //     return 'COLUMN2'
    //   }
    //   if (p == 'COL1') {
    //     return 'COUNT1'
    //   }
    //   if (p == 'COL2') {
    //     return 'COUNT2'
    //   }
    //   if (p == 'COL3') {
    //     return 'COUNT3'
    //   }
    //   if (p == 'COL4') {
    //     return 'COUNT4'
    //   }
    // })
    let header = headerdata.split(',')

    let dataset = filtereddata.map(dt => {
      let tem = [];
      tem.push(dt.LIC_TYPE)
      tem.push(dt.UTYPLONGTEXT)
      tem.push(dt.COL1)
      tem.push(dt.COL2)
      tem.push(dt.COL3)
      if (['01', '02'].includes(key)) {
        tem.push(dt.COL4)
      }
      return tem;
    })


    let dataset2 = filtereddata.map(dt => {
      let tem = {};
      tem.COLUMN1 = dt.LIC_TYPE
      tem.COLUMN2 = dt.UTYPLONGTEXT
      tem.COUNT1 = dt.COL1
      tem.COUNT2 = dt.COL2
      tem.COUNT3 = dt.COL3
      if (['01', '02'].includes(key)) {
        tem.COUNT4 = dt.COL4
      }
      return tem;
    })

    return [header, dataset, dataset2]


  }

  let getData = (data) => {
    console.log(data)
    props.dialogueOpen(props.chartId, data.LIC_TYPE)
  }

  const classes = useStyles();
  const [chartState, setChartState] = useState(props.chartType);
  const [chartId,setChartId]=useState(props.chartId)
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [colorState, setColorState] = useState([...COLORS]);

  let getchartDataResult1 = proesResultData(props.data, props.chart);
  let tableData = getTableHeader(props.data, props.chart,props.chartHeader)
  let firctChart = getchartDataResult1.length > 0 ? getChart(getchartDataResult1, chartState, '#00bcd4', props.stack) : <Typography variant="subtitle2" color="inherit" style={{ width: 500 }}>
    No Records found
</Typography>
  useEffect(() => {
    let arr = [...props.color, ...COLORS]
    setColorState(arr);
  }, []);

  return (
    <div>
      <Card className={classes.root} elevation='5' style={{ height: "39vh" }}>
        <CardContent style={{ padding: 5, marginRight: 5, height: '85%' }}>
          {firctChart}
        </CardContent>

        <CardActions style={{ margin: 'auto', padding: 2, height:'15%' }}>
          <Grid container spacing={2}>
            <Grid item md={1}>
              <FormControl variant="outlined" className={classes.formControl} size="small">
                <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={chartState}
                  onChange={(event) => changeGraph(event)}
                  label={props.label}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  style={{ height: 20 }}
                  classes={{ outlined: classes.rootSelect }}
                >
                  <MenuItem value={1} key='horizontal' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" style={{ transform: 'rotate(90deg)' }} /></MenuItem>
                  <MenuItem value={2} key='vertical' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" /></MenuItem>
                  <MenuItem value={3} key='vertical-mul' style={{ padding: 5 }}><BarChartIcon fontSize="small" /></MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={10} style={{ textAlign: 'center'}}>
            <Typography variant="subtitle2" style={{ fontFamily: 'Helvetica' ,fontWeight:"bold" }}>
                {props.name}
              </Typography>

            </Grid>
            <Grid item md={1}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={{ padding: 0 }}
                onClick={handleClickOpen}
              >
                <TocIcon />
              </IconButton>
            </Grid>

          </Grid>


        </CardActions>

      </Card>


      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{ width: 'inherit' }}
        classes={{
          paper: classes.dialoguewidth
        }}
      >
        <Grid container spacing={1} style={{ width: '100%' }}>
          <Grid item md={11} style={{ textAlign: 'center'}}>
            <DialogTitle  disableTypography={true} style={{ cursor: 'move', maxHeight: 30, fontFamily: 'Helvetica', fontSize: 10 }} id="draggable-dialog-title">

              <Typography variant="body1">{props.name}</Typography>
            </DialogTitle>
          </Grid>
          <Grid item md={1} style={{textAlign:'end'}}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              style={{ padding: 0 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>


        <DialogContent style={{ paddingTop: 10 }}>
          {/* <GRCDashbordTable name={props.name} header={tableData[0]} data={tableData[1]} /> */}
          {/* <LicenceReportTable name={props.name} header={tableData[0]} data={tableData[2]} colors={colorState} /> */}

          <LicenseReportStackedTable data={props.chartdata} header={tableData[0]} colors={colorState} />
        </DialogContent>

      </Dialog>
    </div>
  );

}

export default withRouter(LicenceStackGraphCard)