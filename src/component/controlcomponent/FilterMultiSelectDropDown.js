import React ,{useState,useEffect}from 'react';
import { makeStyles,useTheme  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon:{
    right:0
  },
  dropdownchanges:{
    paddingRight:25
  },
  horizontalscrol:{
    overflowX:'hidden'
  }
}));
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }



  const ITEM_HEIGHT = 18;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8.5 + ITEM_PADDING_TOP
    },
  },
};
  const  FilterMultiSelectDropDown=(props)=>{

    const classes = useStyles();
    const theme = useTheme();
   const [selected, setSelected] = React.useState(props.preSelected==undefined?[]:props.preSelected);
  

   useEffect(() => {
    setSelected(props.preSelected);
}, [props])


    
      const handleChangeMultiple = (event) => {
        props.changeEventCallBack(event.target.value)
      };


    
    const MenuItems=props.values.map((v) => (
        <MenuItem key={v.key} value={v.value} style={{padding:0}} >
          <Checkbox size="small" style={{padding:0,paddingRight:3}} checked={selected.indexOf(v.value) > -1} />
          <ListItemText
        disableTypography primary={<Typography variant="caption" style={{ color: '#000000' }}>{v.key}</Typography>}/>
        </MenuItem>
      ))

   const findSelected=(selected)=>{

       return selected.length+'Selected'
   }

      return   <FormControl  variant="outlined" className={classes.formControl} size="small" fullWidth='true'>
      <InputLabel id="demo-mutiple-name-label" style={{fontSize:12,fontFamily:'Helvetica',color:'#000000'}}>{props.label}</InputLabel>
      <Select
      multiple
      labelId="demo-mutiple-name-label"
      id="demo-mutiple-name"
        value={selected}
        onChange={handleChangeMultiple}
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
        style={{fontSize:12}}
        renderValue={(selected) => findSelected(selected)}
        //input={<OutlinedInput classes={{ input: classes.input }} />}
      >

      {MenuItems}
      </Select>
    </FormControl>
  }

  export default FilterMultiSelectDropDown