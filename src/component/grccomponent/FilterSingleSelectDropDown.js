import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  input: {
    fontSize: 50
  },
  icon:{
    right:0
  },
  select: {
    '&:before': {
      borderColor:'red',
  },
    '&:after': {
        borderColor:'red',
    }

},
dropdownchanges:{
  paddingRight:'25px !important'
},
horizontalscrol:{
  overflowX:'hidden'
}
}));

const ITEM_HEIGHT = 12;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8.5 + ITEM_PADDING_TOP,
    },
  },
};

  const  FilterSingleSelectDropDown=(props)=>{

    const classes = useStyles();
  const [selected, setSelected] = useState(props.preSelected==undefined?'':props.preSelected);
  useEffect(() => {
    setSelected(props.preSelected);
}, [props])
 
  
    const handleChange = (event) => {
      console.log('change value'+event.target.value)
      props.changeEventCallBack(event.target.value)
    };


    const MenuItems=props.values.map((v)=>{
      return <MenuItem key={v.key} value={v.value} style={{fontSize:12,fontFamily:'Helvetica'}}> {v.key}</MenuItem>
 }
   )

      return        <FormControl variant="outlined" className={classes.formControl} size="small" fullWidth='true'>
      <InputLabel id="demo-simple-select-outlined-label"  inputProps={{ style: { fontFamily: 'Helvetica', color: 'white'}}} style={{fontSize:12,fontFamily:'Helvetica',color:'#000000'}}>{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selected}
        onChange={handleChange}
        className={classes.select}
        inputProps={{
          classes: {
              icon: classes.icon,
          },
      }}
      classes={{
       outlined:classes.dropdownchanges,
       root:classes.horizontalscrol,
       select:classes.horizontalscrol,
       paper: classes.horizontalscrol,
      }}
        label={props.label}
        MenuProps={MenuProps}
        style={{fontSize:12,fontFamily:'Helvetica'}}    
        //input={<OutlinedInput classes={{ input: classes.input }} />}
      >
      <MenuItem value="" style={{fontSize:12,fontFamily:'Helvetica'}}></MenuItem>
      {MenuItems}
      </Select>
    </FormControl>
  }

  export default FilterSingleSelectDropDown