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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";
import { useNavigate } from "react-router-dom";
import BasicTable from "pages/LandingPages/Contactos/BasicTable";
import bgImage from "assets/images/fondoContactos.jpg";
import React, { useState, useEffect } from "react";

function Contactos() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cerrarSesion = () => {
    sessionStorage.clear();
    navigate("/curriculum-vitae");
  };
  useEffect(() => {
    const checkLoggedIn = () => {
      const accessToken = sessionStorage.getItem("access-token");
      if (accessToken) {
        setIsLoggedIn(true);
      }
    };
    checkLoggedIn();
  }, []);
  const filteredRoutes = routes.filter((route) => {
    if (route.loggedInOnly && isLoggedIn) {
      console.log("a");
      return false;
    }
    return true;
  });
  return (
    <>
      <MKBox position="absolute" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={filteredRoutes}
          onClick={() => cerrarSesion()}
          action={{
            type: "external",
            //route: "/login",
            label: "Cerrar Sesión",
            color: "info",
          }}
        ></DefaultNavbar>
      </MKBox>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
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
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 35 },
            mt: 15,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }} mt={2}>
              <MKTypography variant="h3">Contactos recibidos</MKTypography>
            </Grid>
          </Grid>
          <BasicTable />
        </Card>
      </MKBox>
    </>
  );
}

export default Contactos;
