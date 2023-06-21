import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiFormControl:{root:{
      width:'100%'
    }}
  
  },
});

  
 const LicenceTextFiled=(props) =>{

  return (
    <ThemeProvider theme={theme}>
    <TextField id="outlined-search" inputProps={{
        style: {
            height: 35,
            padding: '0 14px',
            fontSize: 12
        },
    }}
        InputLabelProps={{
            style: {
                fontSize: 12,
                fontFamily: 'Helvetica',

            },
        }}
        value={props.value}
        size="small" label={props.label} type="search" variant="outlined" onChange={(event) => { props.onchange(event.target.value) }} />
        </ThemeProvider>
  );
}

export default LicenceTextFiled;