/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";
import SignIn from "layouts/pages/authentication/sign-in";
import Contact from "pages/LandingPages/Author/sections/Contact";

function ContactUs() {
  return (
    <>
      <MKBox position="absolute" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "/login",
            label: "Iniciar Sesión",
            color: "info",
            component: <SignIn />,
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}></Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox p={3}>
            <MKBox width="100%" component="form" method="post" autoComplete="off">
              <Grid container spacing={3}></Grid>
              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}></Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <Contact />
    </>
  );
}

export default ContactUs;
