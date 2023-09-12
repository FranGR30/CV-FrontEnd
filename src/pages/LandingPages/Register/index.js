/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import register from "api/register.api";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import getUsuarios from "api/getUsuarios.api";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/login-bg4.jpg";

function RegisterBasic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obtenerYMostrarUsuarios = async () => {
      try {
        const usuarios = await getUsuarios();
        if (usuarios.status != 200) {
          let response = await register(nombre, apellido, email, password);
          if (response.status == 200) {
            navigate("/curriculum-vitae");
          } else {
            alert("Error al crear usuario");
          }
        } else if (usuarios.status == 200) {
          alert("Error. Solo puede haber un usuario registrado");
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };
    obtenerYMostrarUsuarios();
  };
  const validateLogin = (e) => {
    if (email != "" && password != "" && nombre != "" && apellido != "") {
      if (!validateEmail()) {
        alert("Email invalido");
      } else {
        handleSubmit(e);
      }
    } else {
      alert("Los datos deben estar completos");
    }
  };
  const validateEmail = () => {
    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
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
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Registrar Usuario
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="nombre"
                      label="Nombre"
                      value={nombre}
                      onChange={handleNombreChange}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="apellido"
                      label="Apellido"
                      value={apellido}
                      onChange={handleApellidoChange}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      value={email}
                      onChange={handleEmailChange}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={validateLogin}>
                      Registrar
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center"></MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default RegisterBasic;
