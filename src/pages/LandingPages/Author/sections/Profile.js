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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/fran.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Francisco García Reinoso" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Francisco Garcia Reinoso</MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Email:&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    fgr304@gmail.com
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Teléfono:&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    1157246742
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Localidad:&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Vicente López, Olivos
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Estudiante de tecnicatura en desarrollo de software promediando el último año de la
                carrera. Actualmente me encuentro trabajando como desarrollador Java en Accenture.
                Me apasiona el desarrollo back-end y me enfoco en mejorar mis habilidades técnicas y
                de resolución de problemas para brindar soluciones de alta calidad a los clientes.
                Me siento cómodo trabajando en equipo, tengo una actitud proactiva y enfocada en los
                resultados
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
