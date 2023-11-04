import React, { useState, type FormEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthApi, type SessionParams } from "../../requests/AuthApi";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const defaultTheme = createTheme();

const SignIn = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "error" | undefined
  >(undefined); // Default to success
  const [alertMessage, setAlertMessage] = useState(
    "You are successfully logged in"
  );
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const sessionParams: SessionParams = {
      email: data.get("email") as string,
      password: data.get("password") as string
    };

    // You can access email and password directly from state
    AuthApi.login(sessionParams)
      .then((response) => {
        console.log(response);
        setOpen(true);
        window.location.href = "/home";
      })
      .catch((err) => {
        console.log(err);
        setAlertSeverity("error");
        setAlertMessage("Incorrect credentials entered");
        setOpen(true);
      });
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main"
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item={true}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          action={action}
        >
          <Alert
            onClose={handleClose}
            severity={alertSeverity}
            sx={{ width: "100%" }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
