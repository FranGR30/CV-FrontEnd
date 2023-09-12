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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Divider from "@mui/material/Divider";

// Author page sections
import Profile from "pages/LandingPages/Author/sections/Profile";
import Desarrollos from "pages/LandingPages/Author/sections/Developments";
import JobExperience from "pages/LandingPages/Author/sections/JobExperience";
import Tecnologias from "pages/LandingPages/Author/sections/Tecnologias";
import Education from "pages/LandingPages/Author/sections/Education";
import Certification from "pages/LandingPages/Author/sections/Certification";
import SoftSkills from "pages/LandingPages/Author/sections/SoftSkills";
import Language from "pages/LandingPages/Author/sections/Language";

// Routes
import routes from "routes";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import getUsuarios from "api/getUsuarios.api";

// Images
import bgImage from "assets/images/developer-bg.jpg";

function Author() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    const checkLoggedIn = () => {
      const accessToken = sessionStorage.getItem("access-token");
      if (accessToken) {
        setIsLoggedIn(true);
      }
    };
    obtenerYMostrarUsuarios();
    checkLoggedIn();
  }, []);
  const obtenerYMostrarUsuarios = async () => {
    try {
      const usuarios = await getUsuarios();
      if (usuarios.status === 200) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const redirectToPage = async () => {
    if (!isRegistered) {
      navigate("/register");
    } else if (isLoggedIn) {
      navigate("/contactosRecibidos");
    } else if (!isLoggedIn) {
      navigate("/login");
    }
  };
  const filteredRoutes = routes.filter((route) => {
    if (route.loggedInOnly && isLoggedIn) {
      return false;
    }
    return true;
  });
  return (
    <>
      <DefaultNavbar
        routes={filteredRoutes}
        onClick={() => redirectToPage()}
        action={{
          type: "external",
          label: isRegistered ? (!isLoggedIn ? "Iniciar Sesión" : "Ver Contactos") : "Registrarse",
          color: "info",
        }}
        sticky
      />
      <MKBox bgColor="#F1F1F1">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        ></MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 35 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Profile />
        </Card>
        <Card
          sx={{
            p: 1,
            mx: { xs: 2, lg: 35 },
            mt: 2,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <JobExperience />
        </Card>
        <Card
          sx={{
            p: 1,
            mx: { xs: 2, lg: 35 },
            mt: 2,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Education />
        </Card>
        <Card
          sx={{
            p: 1,
            mx: { xs: 2, lg: 35 },
            mt: 2,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Language />
        </Card>
        <Card
          sx={{
            p: 1,
            mx: { xs: 2, lg: 35 },
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Certification />
        </Card>
        <Card
          sx={{
            p: 1,
            mx: { xs: 2, lg: 35 },
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Tecnologias />
          <Divider variant="middle" style={{ height: 3 }} />
          <SoftSkills />
        </Card>
        <Card
          sx={{
            p: 1,
            mx: { xs: 2, lg: 35 },
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: "8",
          }}
        >
          <Desarrollos />
        </Card>
      </MKBox>
    </>
  );
}

export default Author;
