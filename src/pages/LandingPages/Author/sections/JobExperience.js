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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/accenture.jpg";
import team2 from "assets/images/accenture.jpg";
import team3 from "assets/images/nespresso.png";

function JobExperience() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sx={{ mb: 0 }} mt={5}>
          <MKTypography variant="h3">Experiencia Laboral</MKTypography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={10}>
          <MKBox mb={1} bgColor="transparent">
            <HorizontalTeamCard
              image={team1}
              name="Application Development Analyst"
              position={{ color: "info", label: "Septiembre 2022 – Actualidad" }}
              description="Análisis y resolución de incidentes para la aplicación ICBC/Multipay Argentina. Tecnologías/metodologías utilizadas: Java, SQL, GIT, Jira y SCRUM."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MKBox mb={1} bgColor="transparent">
            <HorizontalTeamCard
              image={team2}
              name="Project Control Services Analyst"
              position={{ color: "info", label: "Noviembre 2019 - Agosto 2022" }}
              description="Facturación de servicios, análisis de contratos, comunicación efectiva en inglés, análisis y procesamiento de información en Excel."
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MKBox mb={{ xs: 6, lg: 5 }} bgColor="transparent">
            <HorizontalTeamCard
              image={team3}
              name="Coffee Specialist"
              position={{ color: "info", label: "Junio 2017 – Octubre 2019" }}
              description="Análisis de ventas, administración de clientes y atención al cliente."
            />
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default JobExperience;
