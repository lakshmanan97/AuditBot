import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import logo_icon from '../resources/auditlogo.png'

import { makeStyles } from '@material-ui/core/styles';
import { NavLink, withRouter, Link, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';



import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';

import AccountApp from './AccountApp'

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TableChartIcon from '@material-ui/icons/TableChart';
import GridOnIcon from '@material-ui/icons/GridOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';




const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //width: `calc(100% - 190px)`,
    width: '100%',
    backgroundColor: '#4f4f54',
    height: "6vh",
    minHeight: '40px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 135,
    height: 42.54
  }, drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#4f4f54'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  IconColor: {
    color: '#009ED7',
  },
  IconColorchild: {
    color: '#009ED7',
    width: 20
  },
  ItemIcon: {
    minWidth: 35
  },
  listitmentext: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  listitmentextchild: {
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    //marginLeft:25,
    width: '90%',
    height: 50.54,
    //backgroundColor:'#FFFFFF'
  },
  selecteditme: {
    backgroundColor: '#3f7284',
    color: 'white',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    paddingTop: 4,
    paddingBottom: 4
  },
  nested: {
    color: 'white',
    paddingTop: 4,
    paddingBottom: 4
  }
}));

const ApplicationAppBar = (props) => {

  const signInCallback = (data) => {
    console.log(data)
  }

  const classes = useStyles();
  const [pathname, setPathname] = React.useState('/');
  const location = useLocation()


  //const [anchorEl, setAnchorEl] = React.useState(null);
  //const open = Boolean(anchorEl);
  const [data, setData] = React.useState([]);

  const [grc, setGrc] = React.useState(true);
  const [dashbord, setDashbord] = React.useState(false);
  const [report, setReport] = React.useState(false);


  const [license, setLicense] = React.useState(false);
  const [licenceDashbord, setLicenceDashbord] = React.useState(false);
  const [licencereport, setLicenceReport] = React.useState(false);

  const [controls, setControls] = React.useState(false);
  const [controlsdashbord, setControlsdashbord] = React.useState(false);
  const [controlsreport, setControlsReport] = React.useState(false);

  const [auditor, setAuditor] = React.useState(false);
  const [auditordashbord, setAuditordashbord] = React.useState(false);
  const [auditorreport, setAuditorReport] = React.useState(false);

  const [manager, setManager] = React.useState(false);
  const [managerdashbord, setManagerdashbord] = React.useState(false);
  const [managerreport, setManagerReport] = React.useState(false);

  const [basis, setBasis] = React.useState(false);
  const [basisdashbord, setBasisdashbord] = React.useState(false);
  const [basisreport, setBasisReport] = React.useState(false);

  const [security, setSecurity] = React.useState(false);
  const [securitydashbord, setSecuritydashbord] = React.useState(false);
  const [securityreport, setSecurityReport] = React.useState(false);

  const [users, setUsers] = React.useState(false);
  const [usersdashbord, setUsersdashbord] = React.useState(false);
  const [usersreport, setUsersReport] = React.useState(false);


  const [hana, setHana] = React.useState(false);
  const [hanadashbord, setHanadashbord] = React.useState(false);
  const [hanareport, setHanaReport] = React.useState(false);


  const [misc, setMisc] = React.useState(false);
  const [miscdashbord, setMiscdashbord] = React.useState(false);
  const [miscreport, setMiscReport] = React.useState(false);






  const [drawerswitch, setDrawerswitch] = React.useState(false);


  React.useEffect(() => {

    setData(props.userauthorization.value == undefined ? [] : props.userauthorization.value.map(p => p.ZDESC))
    setPathname(props.pathname);
    openSelectedDropDown(props.pathname)
    console.log(JSON.stringify(data))

  }, [props])


  const isValid = (value) => {
    if (data.length < 1) {
      return false;
    }
    return data.includes(value)

  }

  const makeAllclose = () => {
    setReport(false)
    setDashbord(false);
    setGrc(false);
    setLicense(false);
    setLicenceDashbord(false);
    setLicenceReport(false);
    setControls(false);
    setControlsReport(false);
    setControlsdashbord(false);
    setControls(false);
    setControlsReport(false);
    setControlsdashbord(false);
    setAuditor(false);
    setAuditorReport(false);
    setAuditordashbord(false);
    setManager(false);
    setManagerReport(false);
    setManagerdashbord(false);
    setBasis(false);
    setBasisReport(false);
    setBasisdashbord(false);
    setUsers(false);
    setUsersReport(false);
    setUsersdashbord(false);
    setHana(false);
    setHanaReport(false);
    setHanadashbord(false);
    setMisc(false);
    setMiscReport(false);
    setMiscdashbord(false);
  }

  const openSelectedDropDown = (path) => {
    if (path == '/grcreport') {
      makeAllclose()
      setGrc(true);
      setReport(true)
    }
    else if (path == '/grcrisktechviewreport') {
      makeAllclose()
      setGrc(true);
      setReport(true)
    }
    else if (path == '/licensedashbord') {
      makeAllclose()
      setLicense(true)
      setLicenceDashbord(true)
    }
    else if (path == '/licensereport') {
      makeAllclose()
      setLicense(true)
      setLicenceReport(true)
    }
    else if (path == '/controldashbord') {
      makeAllclose()
      setControls(true)
      setControlsdashbord(true)
    }
    else if (path == '/controlreport') {
      makeAllclose()
      setControls(true)
      setControlsReport(true)
    }
    else if (path == '/controlsummaryreport') {
      makeAllclose()
      setControls(true)
      setControlsReport(true)
    }
    else {
      makeAllclose()
      setGrc(true);
      setDashbord(true);
    }
  }



  const handleReport = () => {
    setReport(!report);
  };

  const handlegrc = () => {
    setGrc(!grc);
  };

  const handleDashbord = () => {
    setDashbord(!dashbord);
  };


  const handleLicenseReport = () => {
    setLicenceReport(!licencereport);
  };

  const handleLicense = () => {
    setLicense(!license);
  };

  const handleLicenseDashbord = () => {
    setLicenceDashbord(!licenceDashbord);
  };



  const handleControlReport = () => {
    setControlsReport(!controlsreport);
  };

  const handleControl = () => {
    setControls(!controls);

  };

  const handleControlDashbord = () => {
    setControlsdashbord(!controlsdashbord);
  };




  const handleAuditorReport = () => {
    setAuditorReport(!auditorreport);
  };

  const handleAuditor = () => {
    setAuditor(!auditor);
    setAuditorReport(!auditor);
    setAuditordashbord(!auditor);
  };

  const handleAuditorDashbord = () => {
    setAuditordashbord(!auditordashbord);
  };




  const handleManagerReport = () => {
    setManagerReport(!managerreport);
  };

  const handleManager = () => {
    setManager(!manager);
    setManagerReport(!manager);
    setManagerdashbord(!manager);
  };

  const handleManagerDashbord = () => {
    setManagerdashbord(!managerdashbord);
  };


  const handleBasisReport = () => {
    setBasisReport(!basisreport);
  };

  const handleBasis = () => {
    setBasis(!basis);
    setBasisReport(!basis);
    setBasisdashbord(!basis);
  };

  const handleBasisDashbord = () => {
    setBasisdashbord(!basisdashbord);
  };


  const handleSecurityReport = () => {
    setSecurityReport(!securityreport);
  };

  const handleSecurity = () => {
    setSecurity(!security);
    setSecurityReport(!security);
    setSecuritydashbord(!security);
  };

  const handleSecurityDashbord = () => {
    setSecuritydashbord(!securitydashbord);
  };



  const handleUsersReport = () => {
    setUsersReport(!usersreport);
  };

  const handleUsers = () => {
    setUsers(!users);
    setUsersReport(!users);
    setUsersdashbord(!users);
  };

  const handleUsersDashbord = () => {
    setUsersdashbord(!usersdashbord);
  };



  const handleHanaReport = () => {
    setHanaReport(!hanareport);
  };

  const handleHana = () => {
    setHana(!hana);
    setHanaReport(!hana);
    setHanadashbord(!hana);
  };

  const handleHanaDashbord = () => {
    setHanadashbord(!hanadashbord);
  };



  const handleMiscReport = () => {
    setMiscReport(!miscreport);
  };

  const handleMisc = () => {
    setMisc(!misc);
    setMiscReport(!misc);
    setMiscdashbord(!misc);
  };

  const handleMiscDashbord = () => {
    setMiscdashbord(!miscdashbord);
  };




  const toggleDrawer = (drawerswitch) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerswitch(drawerswitch)
  };

  const findName = () => {
    const pathname = location.pathname

    if (pathname === '/grcreport') {
      return 'AuditBOT GRC Report';
    }

    if (pathname === '/grcreport-company') {
      return 'AuditBOT GRC Report Company Code';
    }

    if (pathname === '/grcrisktechviewreport') {
      return 'AuditBOT GRC Risk Business Tech View Report';
    }

    if (pathname === '/licensereport') {
      return 'AuditBOT License Report';
    }
    if (pathname === '/licensedashbord') {
      return 'AuditBOT License Dashbord';
    }
    if (pathname === '/controlreport') {
      return 'AuditBOT Controls Details Report';
    }
    if (pathname === '/controldashbord') {
      return 'AuditBOT Controls Dashbord';
    }
    if (pathname === '/controlsummaryreport') {
      return 'AuditBOT Controls Summary Report';
    }
    if (pathname === "/grcdashbord") {
      return 'AuditBOT GRC Dashbord';
    }
    return 'AuditBOT Dashbord';
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root} title={<img src={logo_icon} />}>
        <Toolbar style={{ minHeight: 'inherit', padding: 0, marginTop: 'auto', marginBottom: 'auto' }}>
          <Grid container spacing={0} style={{ padding: 0 }}>
            <Grid item sm={1} >
              <IconButton color="inherit" aria-label="open drawer" style={{ padding: 0 }} edge="start" onClick={toggleDrawer(true)} > <MenuIcon /> </IconButton>
            </Grid>
            <Grid item sm={9} style={{ margin: 'auto' }} >
              <Typography type="body2" >{findName()}</Typography>
            </Grid>

            <Grid item sm={2}  >
              {props.isAuthenticated ?
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    style={{ padding: 0 }}
                  ><Typography variant="button" style={{ color: '#FFF' }}>
                      {props.username}
                    </Typography>
                  </IconButton><AccountCircle style={{ padding: 2, fontSize: 30, color: '#009ED7', marginLeft: 5 }} /></div> : null}
            </Grid>


          </Grid>

        </Toolbar>

      </AppBar>
      <main>


        <Drawer
          className={classes.drawer}
          //variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
          open={drawerswitch}
          onClose={toggleDrawer(false)}
        >

          <img
            className={classes.logo}
            src={
              logo_icon
            }
            alt="Bosch Logo"
          />
          <Grid container spacing={0}>
            {/* <Grid item md={6} style={{paddingLeft:1}}>
                <AccountCircleIcon style={{color:'#009ed7',minWidth:100,height: 35.54}}/>
                </Grid> */}
            {/* <Grid item md={6}>
                <Typography type="body2" style={{color:'#009ed7',width:50,margin:5}}>Audit</Typography>
                </Grid> */}
          </Grid>


          <Divider style={{}} />

          {/* this is for grc Dashbord */}

          {isValid('GRC') ?
            <List>
              <ListItem button key='DashBord' onClick={handlegrc} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>GRC</Typography>} />
                {grc ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={grc} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {dashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={dashbord} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/grcdashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/grcdashbord' || pathname == '/' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>
                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {report ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={report} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/grcreport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/grcreport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Report</Typography>} />
                        </ListItem>
                      </Link>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/grcreport-company'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/grcreport-company' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Report - Company Code</Typography>} />
                        </ListItem>
                      </Link>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/grcrisktechviewreport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/grcrisktechviewreport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Risk Bus/Tech View</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>

            : null}


          {isValid('License') ?
            <List>
              <ListItem button key='DashBord' onClick={handleLicense} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>License</Typography>} />
                {license ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={license} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleLicenseDashbord}>
                    {/* <ListItemIcon className={classes.ItemIcon} >
                    <LineStyleIcon className={classes.IconColorchild} />
                  </ListItemIcon> */}
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {licenceDashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={licenceDashbord} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>License Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleLicenseReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {licencereport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={licencereport} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>License Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}




          {isValid('Controls') ?
            <List>
              <ListItem button key='DashBord' onClick={handleControl} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Controls</Typography>} />
                {controls ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={controls} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleControlDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {controlsdashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={controlsdashbord} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/controldashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/controldashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleControlReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {controlsreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={controlsreport} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/controlsummaryreport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/controlsummaryreport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Summary Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/controlreport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/controlreport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Details Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>

                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}


          {isValid('Auditor') ?
            <List>
              <ListItem button key='DashBord' onClick={handleAuditor} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Auditors</Typography>} />
                {auditor ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={auditor} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleAuditorDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {auditordashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleAuditorReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {auditorreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}


          {isValid('Manager') ?
            <List>
              <ListItem button key='DashBord' onClick={handleManager} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Managers</Typography>} />
                {manager ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={manager} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleManagerDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {managerdashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleManagerReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {managerreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}


          {isValid('Basis') ?
            <List>
              <ListItem button key='DashBord' onClick={handleBasis} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Basis</Typography>} />
                {basis ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={basis} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleBasisDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {basisdashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleBasisReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {basisreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}



          {isValid('Security') ?
            <List>
              <ListItem button key='DashBord' onClick={handleSecurity} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Security</Typography>} />
                {security ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={security} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleSecurityDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {securitydashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleSecurityReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {securityreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}
          {isValid('Users') ?
            <List>
              <ListItem button key='DashBord' onClick={handleUsers} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Users</Typography>} />
                {users ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={users} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleUsersDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {securitydashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleUsersReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {usersreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}

          {isValid('Hana') ?
            <List>
              <ListItem button key='DashBord' onClick={handleHana} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Hana</Typography>} />
                {hana ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={users} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleHanaDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {hanadashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleHanaReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {hanareport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}

          {isValid('Misc') ?
            <List>
              <ListItem button key='DashBord' onClick={handleMisc} className={classes.nested}>
                <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Misc</Typography>} />
                {misc ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse in={users} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleMiscDashbord}>
                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Dashbord</Typography>} />
                    {miscdashbord ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensedashbord'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensedashbord' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Dashbord</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>


                  <ListItem button className={classes.nested} style={{ paddingLeft: 64 }} onClick={handleMiscReport} >

                    <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Report</Typography>} />
                    {miscreport ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={false} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link style={{ color: 'white', textDecoration: 'none' }} to={'/licensereport'} onClick={toggleDrawer(false)}>
                        <ListItem button className={pathname == '/licensereport' ? classes.selecteditme : classes.nested} style={{ paddingLeft: 74 }}>

                          <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Controls Report</Typography>} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </List>
            : null}


          <Divider />
          <List>
            <Link style={{ color: 'white', textDecoration: 'none' }} to={'/help'} onClick={toggleDrawer(false)}>
              <ListItem button key='Help'>
                <ListItemIcon className={classes.ItemIcon} ><HelpIcon className={classes.IconColor} /></ListItemIcon>
                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Help</Typography>} />
              </ListItem>
            </Link>
            <ListItem button key='Logout' onClick={() => props.onLogout()}>
              <ListItemIcon className={classes.ItemIcon} ><ExitToAppIcon className={classes.IconColor} />     </ListItemIcon>
              <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Logout</Typography>} />
            </ListItem>

          </List>
        </Drawer>

      </main>

    </div>
  );

}

export default withRouter(ApplicationAppBar)