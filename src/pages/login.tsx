import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import {  Box, Stack } from "@mui/material";
import { OrgSL, OrgLOGO, IluCover,CenterCover,AbsCover2,AbsCover1} from "assets";
import { CredentialResponse } from "../interfaces/google";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>({
        v3LegacyAuthProviderCompatible: true,
    });

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);
        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: "401413356254-manfhkc3t2u7ctlmecl9bqmrtl6rinrl.apps.googleusercontent.com",
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "outline",
                    size: "large",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, []); // you can also add your client id as dependency here
        return <div ref={divRef} />;
    };

    return (
        <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>

            <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${AbsCover1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
           
            }}
          >
            <img src={OrgLOGO} alt="Logo" width="150px" />
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>

            {/* <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="info" 
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="info" 
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="info" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="info"
              >
                Sign In
              </Button>     
               
              <Grid container>
         
                <Grid item xs>
                  <Link href="#" variant="body2" color="#475be8">
                    Forgot password?
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="#" variant="body2"  color="#475be8">
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box> */}

                  {/* MAIN LOGIN */}         
                  <Box mt={5}>
                  <GoogleButton />  
                    </Box>        
          
                {/* END LOGIN */}
          </Box>
         
      
       

     
        
        </Grid>
        
      </Grid>
        </Box>
    );
};
