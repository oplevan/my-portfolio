import React from "react";
import avatar from "../images/avatar.png";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Home,
  Person,
  Timeline,
  Apps,
  ContactMail,
  GitHub,
  LinkedIn,
  Facebook,
  Instagram,
} from "@material-ui/icons";

const drawerWidth = 75;

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  avatar: {
    background: "#070707",
    padding: "0",
    borderRadius: 0,
    margin: 0,
    width: "74px",
    height: "74px",
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
    listPath: "/",
  },
  {
    listIcon: <Person />,
    listText: "About",
    listPath: "/about",
  },
  {
    listIcon: <Apps />,
    listText: "My works",
    listPath: "/portfolio",
  },
  {
    listIcon: <Timeline />,
    listText: "Timeline",
    listPath: "/timeline",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const socialItems = [
  {
    listIcon: <GitHub />,
    listPath: "/",
  },
  {
    listIcon: <LinkedIn />,
    listPath: "/",
  },
  {
    listIcon: <Facebook />,
    listPath: "/",
  },
  {
    listIcon: <Instagram />,
    listPath: "/",
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
    <div className={classes.navContainer}>
      <Avatar className={classes.avatar} src={avatar} alt="Oleg Plevan" />
      <div className={classes.listContainer}>
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem
              className={classes.listItem}
              button
              key={key}
              component={Link}
              to={lsItem.listPath}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {lsItem.listIcon}
              </ListItemIcon>
              <div className={classes.listItemText}>{lsItem.listText}</div>
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.socialContainer}>
        <List>
          {socialItems.map((lsItem, key) => (
            <ListItem
              className={classes.listItem}
              button
              key={key}
              component={Link}
              to={lsItem.listPath}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {lsItem.listIcon}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Navbar;
