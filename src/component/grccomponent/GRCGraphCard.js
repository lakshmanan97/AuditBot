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
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import GRCDashbordTable from './GRCDashbordTable';
import IconButton from '@material-ui/core/IconButton';
import TocIcon from '@material-ui/icons/Toc';
import CloseIcon from '@material-ui/icons/Close';
import BarChartIcon from '@material-ui/icons/BarChart';
import GRCReportTable from './GRCReportTable'


const height = 100
const labelOffset = -6
const focused = 3

const COLORS = ["#009ed7", "#a05195", "#665191", "#665191", "#ffa600", "#d45087", "#f95d6a", "#ff7c43", "#2f4b7c", "#00bdd7", "#0093ff", "#005fc0", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const RADIAN = Math.PI / 180;

const useStyles = makeStyles((theme) => ({
  root: {


    alignItems: "center",
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
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
  }, icon: {
    right: 0,
    height:20
  },
  rootSelect:{
    paddingLeft: '3px',
    paddingRight: '18px !important'
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



const GRCGraphCard = (props) => {

  const proesResultData = (data, key) => {
    if (data && data != null && data.length > 0) {
      let filtereddata = data.filter(p => p.ZTYPE === key)

      let mappedData = [];
      filtereddata.map(v => {
        let temp = {};
        temp.name = v.GROUP_DESC1;
        temp.ZCOUNT1 = v.ZCOUNT1;
        temp.ZCOUNT2 = v.ZCOUNT2;
        temp.ZCOUNT3 = v.ZCOUNT3;
        temp.ZCOUNT = v.ZCOUNT;
        temp.ZTYPE = v.ZTYPE;
        temp.GROUPBY1 = v.GROUPBY1;
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
  const getChart = (data, value, color) => {
    switch (value) {
      case 1:
        return getRCVBarChart(data, color);
      case 2:
        return getPiChart(data)
      case 3:
        return getPiCustomChart(data)
      case 4:
        return getRCHBarChart(data, color);
      case 5:
        return getRCVBarChartThreeStack(data, color);
      case 6:
        return getRCHBarChartThreeStack(data, color);
      case 7:
        return getRCVBarChartThree(data, color);
      default:
        return getRCVBarChart(data, color)
    }
  }

  const getRCVBarChart = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={40}
      margin={{
        top: 10, right: 0, left: 0, bottom: 17,
      }}
    >
       <CartesianGrid  vertical={false} horizontal={true} /> 
      <XAxis axisLine={false} tickLine={false} dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis  axisLine={false} tickLine={false} dataKey="ZCOUNT1" interval={0} stroke="#bdbdbd" width={70} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" fill={'#00bcd4'} onClick={(data) => getData(data)} >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={colorState[index % colorState.length]} />)
        }
         <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white',fontWeight:'bold' }} />
      </Bar>
    </BarChart></ResponsiveContainer>)
  }




  const CustomizedAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={10} textAnchor="middle" fontSize={12} fill="black" fontFamily={colorState[16]} transform="rotate(0)">{payload.value}</text>
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




  const getPiChart = (data) => {
    return (
      <ResponsiveContainer width='100%' height={200}>
        <PieChart width={375} height={190}>
          <Pie
            data={data}
            /* cx={168} cy={137} */
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            dataKey="ZCOUNT1"
            onClick={(data) => getData(data)}
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }

          </Pie>
          <Tooltip wrapperStyle={{ 'padding': '0px', 'margin': '0px' }} itemStyle={{ 'border': '1px solid #00bcd4', 'padding': '0px', 'margin': '0px', 'background-color': '#00bcd4', 'color': 'white' }} contentStyle={{ 'padding': '0px', 'margin': '0px' }} />
          {/*  <Legend layout="vertical" align="right" verticalAlign="top"  content={this.renderLegend} /> */}
          <Legend layout="vertical" align="right" verticalAlign="top" iconSize={10} width={120} height={90} margin={{ top: 0, left: 20, right: 0, bottom: 0 }} wrapperStyle={{
            paddingLeft: "10px", fontFamily: 'arial', fontSize: '14px', 'line-height': '1em'
          }} />
        </PieChart>
      </ResponsiveContainer>)
  }
  const onPieEnter = (data, index) => {
    setActiveIndex(index)
  };

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, value,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {value}
      </text>
    );
  };

  const getPiCustomChart = (data) => {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius='50%'
            outerRadius='85%'
            dataKey="ZCOUNT1"
            onMouseEnter={onPieEnter}
            onClick={(data) => getData(data)}
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={colorState[index % colorState.length]} stroke={'white'} />)
            }
          </Pie>
        </PieChart></ResponsiveContainer>)
  }


  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value, name
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 11;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.ZCOUNT1}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke={fill} />
        <text x={ex + (cos >= 0 ? 1 : -1) * 5} y={ey} angle={-45} fontSize={12} textAnchor={textAnchor} fill={fill}>{`${payload.GROUP_DESC1}`}</text>
      </g>
    );
  };


  const getRCHBarChart = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="10%"
        maxBarSize={35}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
         <CartesianGrid  vertical={true} horizontal={false} /> 
        <XAxis axisLine={false} tickLine={false} dataKey="ZCOUNT1" type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis  axisLine={false} tickLine={false}  dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={100} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" fill={'#48C9B0'} onClick={(data) => getData(data)} >
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={colorState[index % colorState.length]} />)
          }
           <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '70%', fill: 'white' }} />
        </Bar>
      </BarChart></ResponsiveContainer>)
  }



  const getRCVBarChartTwoStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}

      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={70} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'white' }} />
      </Bar>

      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                    }
                </Bar>
                <Bar dataKey="ZCOUNT2" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                    }
                </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartThreeStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 10, right: 0, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid  vertical={false} horizontal={true} /> 
      <Legend iconSize={15} align='right' layout='vertical' verticalAlign='middle' iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis tickLine={false} dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis tickLine={false} interval={0} stroke="#bdbdbd" width={70} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT3" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                  }
              </Bar>
              <Bar dataKey="ZCOUNT2"  stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                  }
              </Bar>
              <Bar dataKey="ZCOUNT3" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
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
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 10, right: 0, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid  vertical={false} horizontal={true} /> 
      <Legend iconSize={15} align='right' layout='vertical' verticalAlign='middle' iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '12px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis tickLine={false} dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis tickLine={false} interval={0} stroke="#bdbdbd" width={70}tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1"  fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2"  fill={colorState[1]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT3"  fill={colorState[2]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT3" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                  }
              </Bar>
              <Bar dataKey="ZCOUNT2"  stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                  }
              </Bar>
              <Bar dataKey="ZCOUNT3" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSTHIRDSTACK[index % COLORSTHIRDSTACK.length]} />)
                  }
              </Bar> */}
    </BarChart></ResponsiveContainer>)
  }
  const getRCHBarChartThreeStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="10%"
        maxBarSize={35}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
       <CartesianGrid  vertical={true} horizontal={false} /> 
        <Legend iconSize={15} align='right' layout='vertical' verticalAlign='middle' wrapperStyle={{
          fontFamily: 'Helvetica', fontSize: '12px'
        }} formatter={(value, entry, index) => legendText(value)} />
        <XAxis tickLine={false} type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis tickLine={false} dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={100} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="ZCOUNT3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT3" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                            {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                            }
                            </Bar>
                            <Bar dataKey="ZCOUNT2" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                            {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                            }
                            </Bar>
                            <Bar dataKey="ZCOUNT3" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                            {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSTHIRDSTACK[index % COLORSTHIRDSTACK.length]} />)
                            }
                            </Bar> */}
      </BarChart></ResponsiveContainer>)
  }


  


  const getRCHBarChartTwoStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="10%"
        maxBarSize={35}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
         <CartesianGrid  vertical={true} horizontal={false} /> 
        <XAxis type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={60} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} />
        <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} />

        {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                                {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                                }
                                </Bar>
                                <Bar dataKey="ZCOUNT2" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                                {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                                }
                                </Bar> */}

      </BarChart></ResponsiveContainer>)
  }
  const legendText = (value) => {
    if (value == 'ZCOUNT1') {
      return "Enabled Risk"
    }
    if (value == 'ZCOUNT2') {
      return "Risk Found"
    }
    if (value == 'ZCOUNT3') {
      return "Risk Not Found"
    }
  }

  const changeGraph = (event) => {
    setChartState(event.target.value)
  }

  const getTableHeader = (data, key,headerdata) => {


    if(data==undefined || data==null ||data.length<1){
      return []
    }

    let filtereddata = data.filter(p => p.ZTYPE === key);
    if(filtereddata.length<1){
      return []
    }

    let columnarray = (key == '01') ? ["GROUPBY1", "GROUP_DESC1", "ZCOUNT1", "ZCOUNT2", "ZCOUNT3"] : ["GROUPBY1", "GROUP_DESC1", "ZCOUNT1"]
    let header = headerdata.split(',')


    let dataset = filtereddata.map(dt => {
      let tem = [];
      if(key != '04'){
      tem.push(dt.GROUPBY1)
      }
      tem.push(dt.GROUP_DESC1)
      tem.push(dt.ZCOUNT1)

      if (key == '01') {
        tem.push(dt.ZCOUNT2)
        tem.push(dt.ZCOUNT3)
      }
      return tem;
    })

    let dataset2 = filtereddata.map(dt => {
      let tem = {};

      tem.COLUMN1=dt.GROUPBY1
      tem.COLUMN2=dt.GROUP_DESC1
      tem.COUNT1=dt.ZCOUNT1
   
      if (key == '01') {
        tem.COUNT2=dt.ZCOUNT2
        tem.COUNT3=dt.ZCOUNT3
      }
      return tem;
    })

    return [header, dataset,dataset2]


  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let getData = (data) => {
    let barNumber;
    if(props.chartId == 'SEC32') {
      barNumber = 8;
    } else if(props.chartId == 'SEC321') {
      barNumber = 1;
    }
    props.dialogueOpen(props.chartId, data.GROUPBY1, barNumber)
  }


  const classes = useStyles();
  const [chartState, setChartState] = useState(props.chartType);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stack, setStack] = useState(props.stack ? props.stack : false);
  const [open, setOpen] = React.useState(false);
  const [colorState, setColorState] = useState([...COLORS]);
  let getchartDataResult1 = proesResultData(props.data, props.chart);
  let tableData = getTableHeader(props.data, props.chart,props.header)
  let firctChart = getchartDataResult1.length>0?getChart(getchartDataResult1, chartState, '#00bcd4'):<Typography  variant="subtitle2" color="inherit" style={{width:500}}>
  No Records found
</Typography>
  useEffect(() => {
    let arr = [...props.color, ...COLORS]
    setColorState(arr);
  }, []);

  return (
    <div>
      <Card className={classes.root} elevation='5' style={{ height: "39vh" }}>
        <CardContent style={{ padding: 5, marginRight: 5, height: '85%'  }}>
          {firctChart}
        </CardContent>

        <CardActions style={{ margin: 'auto', padding: 2, height:'15%' }}>
          <Grid container spacing={0}>
            <Grid item md={1}>
              <FormControl variant="outlined" className={classes.formControl} size="small">
                <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>

                {!stack
                  ?
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
                    classes={{outlined:classes.rootSelect}}
                  >
                    <MenuItem value={4} key='horizontal' style={{ padding: 5, height: 'inherit' }}><AssessmentOutlinedIcon fontSize="small" style={{ transform: 'rotate(90deg)' }} /></MenuItem>
                    <MenuItem value={1} key='vertical' style={{ padding: 5, height: 'inherit' }}><AssessmentOutlinedIcon fontSize="small" /></MenuItem>
                    <MenuItem value={3} key='vertical' style={{ padding: 5, height: 'inherit' }}><DonutSmallIcon fontSize="small" /></MenuItem>
                  </Select>
                  :
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
                    classes={{outlined:classes.rootSelect}}
                  >
                    <MenuItem value={6} key='horizontal' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" style={{ transform: 'rotate(90deg)' }} /></MenuItem>
                    <MenuItem value={5} key='vertical' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" /></MenuItem>
                    <MenuItem value={7} key='vertical' style={{ padding: 5 }}><BarChartIcon fontSize="small" /></MenuItem>
                  </Select>
                }

              </FormControl>
            </Grid>
            <Grid item md={10} style={{margin:'auto'}}>
              <Typography variant="subtitle2" style={{ fontFamily: 'Helvetica' ,fontWeight:"bold" }}>
                {props.name}
              </Typography>

            </Grid>
            <Grid item md={1} style={{margin:'auto', height: 'inherit'}}>

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
        style={{width:'inherit'}}
      >
        <Grid container spacing={1} style={{width:'100%'}}>
          <Grid item md={11} style={{ textAlign: 'center'}}>
            <DialogTitle disableTypography={true} style={{ cursor: 'move', maxHeight: 30, fontFamily: 'Helvetica', fontSize: 10 }} id="draggable-dialog-title">

            <Typography variant="body1">{props.name}</Typography>
            </DialogTitle>
          </Grid>
          <Grid item md={1}>
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


        <DialogContent style={{paddingTop:10}}>
          {/* <GRCDashbordTable name={props.name} header={tableData[0]} data={tableData[1]} /> */}
          <GRCReportTable name={props.name} header={tableData[0]} data={tableData[2]} colors={colorState}/>
        </DialogContent>

      </Dialog>
    </div>
  );

}

export default withRouter(GRCGraphCard)