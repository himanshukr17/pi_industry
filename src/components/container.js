import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logoIcon from "assets/logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: theme.spacing(2)
  }
}));



const Container=(props) =>{

  let top = props
  const classes = useStyles();

  return (
    <div style={{paddingTop:props.top?top:55}}>
       {props.children}
       </div>
  );
}

export default (Container)
