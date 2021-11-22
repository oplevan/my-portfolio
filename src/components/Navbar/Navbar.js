import React from "react";
import avatar from "../../assets/avatar.png";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Home, Person, Timeline, Apps, ContactMail, GitHub, LinkedIn, Facebook, Instagram } from "@material-ui/icons";
import config from "../../config.json";

const drawerWidth = 75;

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  avatar: {
    background: "#181818",
    padding: "0",
    borderRadius: 0,
    margin: 0,
    width: "74px",
    height: "74px",
    position: "relative",
    overflow: "visible",
    "& img": {
      width: "80%",
      height: "80%",
      marginBottom: "10px",
    },
    "&:after": {
      content: '"Oleg P"',
      position: "absolute",
      bottom: "3px",
      fontSize: "0.8rem",
      color: "#08fdd8",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "99%",
      bottom: "-10px",
      borderBottom: "solid 2px #2d2d2d",
    },
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#181818",
    color: "#08fdd8",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: "none",
    },
  },
  menuButton: {
    left: "90%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#181818",
    border: "none",
    boxShadow: "none",
  },
  listItem: {
    color: "#a5a5a5",
    width: "74px",
    position: "relative",
    padding: 0,
    transition: "all 0.3s",
    "&:not(:last-child)": {
      marginBottom: "35px",
    },
    "&:hover": {
      "& $listItemText": {
        opacity: 1,
        color: "#08fdd8",
        transform: "scale(1)",
      },
      "& $listItemIcon": {
        color: "#08fdd8",
        opacity: 0,
      },
    },
  },
  listItemIcon: {
    color: "#a5a5a5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s",
    opacity: 1,
    width: "100%",
  },
  listItemText: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: "9px",
    letterSpacing: "1.5px",
    transition: "all 0.3s",
    position: "absolute",
    left: 0,
    opacity: 0,
    textAlign: "center",
    transform: "scale(0.7)",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  listContainer: {
    display: "flex",
  },
  socialContainer: {
    marginBottom: "20px",
    "& $listItem": {
      "&:not(:last-child)": {
        display: "block",
        marginBottom: "15px",
      },
      "&:hover": {
        "& $listItemIcon": {
          color: "#08fdd8",
          opacity: 1,
        },
      },
      "& $svg": {
        fontSize: "1rem",
      },
    },
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: config.url.HOME,
  },
  {
    listIcon: <Person />,
    listText: "About",
    listPath: config.url.ABOUT,
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: config.url.PORTFOLIO,
  },
  {
    listIcon: <Timeline />,
    listText: "Timeline",
    listPath: config.url.TIMELINE,
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: config.url.CONTACT,
  },
];

const socialItems = [
  {
    listIcon: <GitHub />,
    listPath: config.url.GitHub,
  },
  {
    listIcon: <LinkedIn />,
    listPath: config.url.LinkedIn,
  },
  {
    listIcon: <Facebook />,
    listPath: config.url.Facebook,
  },
  {
    listIcon: <Instagram />,
    listPath: config.url.Instagram,
  },
];

const Navbar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Avatar className={classes.avatar} src={avatar} alt="Oleg Plevan" />
      <div className="nav-wrap flex column">
        {menuItems.map((lsItem, key) => (
          <NavLink key={key} to={lsItem.listPath} exact>
            <div className="icon">{lsItem.listIcon}</div>
            <div className="title">{lsItem.listText}</div>
          </NavLink>
        ))}
      </div>
      <div className={classes.socialContainer}>
        {socialItems.map((lsItem, key) => (
          <a className={classes.listItem} key={key} href={lsItem.listPath} target="_blank" rel="noreferrer">
            <ListItemIcon className={classes.listItemIcon}>{lsItem.listIcon}</ListItemIcon>
          </a>
        ))}
      </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            // close
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Navbar;
