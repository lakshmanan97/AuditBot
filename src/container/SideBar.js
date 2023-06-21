import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
import logo_icon from '../resources/auditbotlogo.PNG'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: '#222021',
        height: 38

    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#222021'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
    },
    IconColor: {
        color: '#009ed7',
    },
    IconColorchild: {
        color: '#009ed7',
        width: 20
    },
    ItemIcon: {
        minWidth: 35
    },
    listitmentext: {
        color: '#ffffff',
        fontSize: 15
    },
    listitmentextchild: {
        color: '#ffffff',
        fontSize: 13
    },
    logo: {
        margin: 10,
        marginLeft: 25,
        width: 145,
        height: 35.54
    }
}));

const SideBar = () => {
    const classes = useStyles();

    const [dashbord, setDashbord] = React.useState(true);
    const [open, setOpen] = React.useState(true);

    const handleReport = () => {
        setOpen(!open);
    };
    const handleDashbord = () => {
        setDashbord(!dashbord);
    };

    return (
        <div className={classes.root}>
            {/* <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar> */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >

                {/* <img
                className={classes.logo}
                src={
                  logo_icon
                }
                alt="Bosch Logo"
              /> */}
                <Grid container spacing={0}>
                    <Grid item md={6} style={{ paddingLeft: 1 }}>
                        <AccountCircleIcon style={{ color: '#009ed7', minWidth: 100, height: 35.54 }} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography type="body2" style={{ color: '#009ed7', width: 50, margin: 5 }}>Audit</Typography>
                    </Grid>
                </Grid>


                <Divider style={{}} />
                <List>
                    <ListItem button key='DashBord' onClick={handleDashbord}>
                        <ListItemIcon className={classes.ItemIcon} ><DashboardIcon className={classes.IconColor} /></ListItemIcon>
                        <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Dashbord</Typography>} />
                        {dashbord ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={dashbord} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <LineStyleIcon className={classes.IconColorchild} />
                                </ListItemIcon>
                                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Dashbord</Typography>} />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <LineStyleIcon className={classes.IconColorchild} />
                                </ListItemIcon>
                                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Dashbord</Typography>} />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button key='Report' onClick={handleReport}>
                        <ListItemIcon className={classes.ItemIcon} > <TableChartIcon className={classes.IconColor} /></ListItemIcon>
                        <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Report</Typography>} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <GridOnIcon className={classes.IconColorchild} />
                                </ListItemIcon>
                                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Report</Typography>} />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.ItemIcon} >
                                    <GridOnIcon className={classes.IconColorchild} />
                                </ListItemIcon>
                                <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>GRC Report</Typography>} />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button key='Help'>
                        <ListItemIcon className={classes.ItemIcon} ><HelpIcon className={classes.IconColor} /></ListItemIcon>
                        <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentext}>Help</Typography>} />
                    </ListItem>


                </List>
                <Divider />
                <List>

                    <ListItem button key='Logout'>
                        <ListItemIcon className={classes.ItemIcon} ><ExitToAppIcon className={classes.IconColor} />     </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography type="body2" className={classes.listitmentextchild}>Logout</Typography>} />
                    </ListItem>

                </List>
            </Drawer>


        </div>
    );
}

export default SideBar;