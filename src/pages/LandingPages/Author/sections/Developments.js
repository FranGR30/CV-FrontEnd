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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/backtracking.png";
import post2 from "assets/images/javaApp.jpg";
import post3 from "assets/images/farmHouse.jpg";
import post4 from "assets/images/restaurant.jpg";

function Desarrollos() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Desarrollos Propios
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Backtracking"
              description="Desarrollo realizado en Java utilizando técnica de backtracking y poda"
              action={{
                type: "external",
                route: "https://github.com/FranGR30/BacktrackingGen",
                color: "info",
                label: "Ver Repositorio",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Java + Java Swing"
              description="Desarrollo realizado en java e interfaz gráfica en Java Swing sobre una empresa de aires acondicionados. El proyecto implementa patrones como MVC, Fachada y Singleton"
              action={{
                type: "external",
                route: "https://github.com/FranGR30/EmpresaAireAcondicionado",
                color: "info",
                label: "Ver Repositorio",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Spring Boot App"
              description="Desarrollo de simulación de granja utilizando Spring boot + SQL + thymeleaf"
              action={{
                type: "external",
                route: "https://github.com/FranGR30/GranjaGallinas",
                color: "info",
                label: "Ver Repositorio",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post4}
              title="Blog Restaurante Django"
              description="Desarrollo de un blog de restaurantes realizado en Django"
              action={{
                type: "external",
                route: "https://github.com/FranGR30/blogRestaurante",
                color: "info",
                label: "Ver Repositorio",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Desarrollos;
