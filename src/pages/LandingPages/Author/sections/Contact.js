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

import { useState } from "react";
import crearContacto from "api/contactar.api";
import { useNavigate } from "react-router-dom";
import validator from "validator";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/contacto.jpg";

function Contact() {
  const [email, setEmail] = useState("");
  const [nombreYApellido, setnombreYApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNombreYApellidoChange = (e) => {
    setnombreYApellido(e.target.value);
  };
  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };
  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };
  const validateEmail = () => {
    if (validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };
  const validateContacto = (e) => {
    if (email != "" && nombreYApellido != "" && telefono != "" && mensaje != "") {
      if (!validateEmail()) {
        alert("Email invalido");
      } else {
        alert("Se ha enviado la información.");
        handleSubmit(e);
      }
    } else {
      alert("Se deben completar todos los campos.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    crearContacto(nombreYApellido, email, telefono, mensaje);
    navigate("/curriculum-vitae");
  };
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.5),
                      rgba(gradients.dark.state, 0.5)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKBox display="flex" p={1}></MKBox>
                    <MKBox display="flex" color="white" p={1}></MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Contacto
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Rellene el formulario para contactarse.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Nombre y apellido"
                          placeholder="Nombre(s) y apellido(s)"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={handleNombreYApellidoChange}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="E-mail"
                          placeholder="nombre@gmicorreo.com"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={handleEmailChange}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Teléfono de contacto"
                          placeholder="Ingrese su número de teléfono"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={handleTelefonoChange}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Mensaje"
                          placeholder="Escriba el mensaje para el candidato"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={3}
                          onChange={handleMensajeChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton variant="gradient" color="info" onClick={validateContacto}>
                        enviar
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
