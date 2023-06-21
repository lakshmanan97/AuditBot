import React,{useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiOutlinedInput:{
      inputAdornedEnd:{
      fontSize:12,
    },
    adornedEnd:{
     paddingRight:'2px !important'
    }
  },
    MuiIconButton:{root:{
      padding:0
    }},
    MuiPickersToolbarText:{toolbarBtnSelected:{
      fontSize:'1rem'
    }},
    MuiPickersDatePickerRoot:{toolbar:{
      maxHeight:'10px'
    }},
    // MuiIconButton:{label:{
    //   color:'#009ED7'
    // }}

  },
});

  
 const Datepicker=(props) =>{

  const [selectedDate, setSelectedDate] = useState(props.value);
  const [maxDate, setMaxDate] = useState(new Date());
  let dt = new Date()
  useEffect(() => {
    setSelectedDate(props.value);
  }, [props]);
  dt.setDate( dt.getDate());
  const [minDate, setMinDate] = useState(dt);
  return (
    <ThemeProvider theme={theme}>
 <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      placeholder="2018/10/10"
      value={selectedDate}
      format="yyyy/MM/dd"
      variant="inline"
      inputVariant="outlined"
      // maxDate={maxDate}
      // minDate={minDate}
      size='small'
      onChange={date => props.onchange(date)}

    />
    </MuiPickersUtilsProvider>
 </ThemeProvider>
  );
}

export default Datepicker;