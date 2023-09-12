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
import team1 from "assets/images/uadeLogo.png";
import team2 from "assets/images/povedaLogo.jpg";

function Education() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8} sx={{ mb: 0 }} mt={5}>
          <MKTypography variant="h3">Formación</MKTypography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={10}>
          <MKBox mb={1}>
            <HorizontalTeamCard
              image={team1}
              name="Tecnicatura en Desarrollo de software"
              position={{ color: "info", label: "Julio 2020 – Actualidad" }}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={10}>
          <MKBox mb={5}>
            <HorizontalTeamCard
              image={team2}
              name="Bachiller Orientación Económica"
              position={{ color: "info", label: "Marzo 2003 - Diciembre 2014" }}
            />
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Education;
