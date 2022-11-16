import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logoIcon from "assets/logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./sidebar";
import { FiUser } from "react-icons/fi";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

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

export default function AppMainBar() {
  const classes = useStyles();

  return (
    <div style={{ position: 'fixed', backgroundColor: "rgb(29, 29, 31,0.9)", width: '100%', height: 45, padding: 2, paddingLeft: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'flex', padding: 10, display: 'flex' }}>
          <a href="">
            <FiUser
              size={21}
              color='white'
            />
          </a>
          <Typography style={{ fontSize:15,color: '#f5f5f7', marginLeft: 30, fontWeight: 'lighter'}}><a href='/dashboard' style={{ color: 'white', textDecoration: 'none' }}>Measurement Sheet</a></Typography>
          <Typography style={{ fontSize:15,color: '#f5f5f7', marginLeft: 30, fontWeight: 'lighter' }}><a href='/route' style={{ color: 'white', textDecoration: 'none' }}>Approvals</a></Typography>
          <Typography style={{ color: '#f5f5f7',fontSize:15, marginLeft: 30, fontWeight: 'lighter' }}><a href='/route' style={{ color: 'white', textDecoration: 'none' }}>Create Request</a></Typography>
          <Typography style={{ color: '#f5f5f7',fontSize:15, marginLeft: 30, fontWeight: 'lighter' }}><a href='/' style={{ color: 'white', textDecoration: 'none' }}>Logout</a></Typography>
        </div>
        <div style={{ position: 'fixed', right: 10 }}>
          <h3 style={{ color: 'white', marginTop: 11, marginLeft: 10, fontFamily: 'fantasy' }}>PI Industry</h3>
        </div>
      </div>
    </div>
  );
}
