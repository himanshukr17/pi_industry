import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logoIcon from "assets/logo.svg";
import Header from "../../components/AppBar"
import Container from "components/container";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { FiUser } from "react-icons/fi";





const Loginmain = (props) => {
    const navigate = useNavigate();
    const [pashow, setpashow] = useState(false)

    return (
        <>
            {/* <Header /> */}
            <Container top={1}>
                <div style={{ position: 'fixed', top: 0, right: 10 }}>
                    <h3 style={{ color: 'black', marginTop: 11, marginLeft: 10, fontFamily: 'fantasy', fontWeight: 'bolder' }}>PI Industry</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: 0, backgroundColor: 'rgb(29, 29, 31,0.9)', width: '100%', height: 50 }}>
                    <Typography style={{ color: '#f5f5f7', fontWeight: 'lighter', fontSize: 13 }}>Copyright © 2022 Samishti Infotech. All rights reserved.</Typography>
                    <Typography style={{ color: '#f5f5f7', fontSize: 13, marginLeft: 30 }}><Link style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link></Typography>
                    <div style={{ height: "40%", width: 0.3, backgroundColor: "white", marginLeft: 10 }}></div>
                    <Typography style={{ color: '#f5f5f7', fontSize: 13, marginLeft: 10 }}><Link style={{ color: 'white', textDecoration: 'none', }}>Online Support</Link></Typography>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    flexDirection: 'column'
                }}>
                    <Typography style={{ fontSize: 20, marginBottom: 3 }}>Sign in</Typography>
                    <form style={{ display: "flex", flexDirection: 'column' }}>
                        <input type="text" placeholder="E-mail" style={{ width: 250, borderRadius: 10, borderWidth: 0.8, padding: 10, marginBottom: 8 }} />
                        <input type={pashow === true ? "text" : "password"} placeholder="Password" style={{ width: 250, borderRadius: 10, borderWidth: 0.8, padding: 10, marginBottom: 10 }}
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        onClick={() => setpashow(!pashow)}
                                        onMouseDown={() => setpashow(!pashow)}
                                        style={{ width: 1, height: 1, backgroundColor: 'black' }}
                                    >
                                        {pashow == true ? <Visibility color="black" /> : <VisibilityOff color="black" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <Button variant="contained" color='primary' uppercase={false} style={{ textTransform: "none", alignSelf: 'flex-end', backgroundColor: "grey" }} disabled={false} onClick={()=>navigate("/dashboard")}>
                            SignIn
                        </Button>
                    </form>
                    <div style={{display:'flex',height:0.9,backgroundColor:'rgb(29, 29, 31,0.2)',width:'18%',marginTop:10}}/>
                    <Typography style={{  fontSize: 13, marginTop: 4 }}><Link style={{ color: 'black' }}>Forget your password</Link></Typography>
                </div>
            </Container>
        </>
    );
}
export default (Loginmain)