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
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCardV2";

// Images
import team1 from "assets/images/coderHouse.png";
import team2 from "assets/images/cisco.jpg";
import team3 from "assets/images/cambridge.jpg";

function Certification() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Licencias y Certificaciones
          </MKTypography>
        </Grid>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={4} lg={3} justifyContent="center">
            <TransparentBlogCard
              image={team1}
              title="Python"
              description="CoderHouse - 2022"
              action={{
                type: "external",
                route: "https://www.coderhouse.com/certificados/62b1e54dd6ed480020ffe696",
                color: "info",
                label: "Ver Certificacion",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={3}>
            <TransparentBlogCard
              image={team2}
              title="CCNA1"
              description="Cisco - 2021"
              action={{
                type: "external",
                route:
                  "https://www.credly.com/badges/480ce1d2-866c-43bf-8922-a7630960ba13?source=linked_in_profile",
                color: "info",
                label: "Ver Certificacion",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={3}>
            <TransparentBlogCard
              image={team3}
              title="First Certificate"
              description="Cambridge - 2012"
              action={{
                type: "internal",
                route: "",
                color: "white",
                label: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Certification;
