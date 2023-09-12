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
import Tooltip from "@mui/material/Tooltip";
import javaIcon from "assets/images/javaIcon.png";
import springBootIcon from "assets/images/springBootIcon.png";
import pythonIcon from "assets/images/pythonIcon.png";
import mongoDBIcon from "assets/images/mongoDBIcon.png";
import javaScriptIcon from "assets/images/javaScriptIcon.png";
import reactIcon from "assets/images/reactIcon.png";
import htmlIcon from "assets/images/htmlIcon.png";
import cssIcon from "assets/images/cssIcon.jpg";
import sqlIcon from "assets/images/sqlIcon.png";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Tecnologias() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }} mt={-6} mb={-3}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
      </MKBox>
      <Container>
        <Grid container item xs={8} lg={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={0} mb={3}>
              Skills tecnológicos
            </MKTypography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={javaScriptIcon} width="70%" mt={1} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px">
                      JavaScript
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={springBootIcon} width="100%" mt={4} />
                    <MKTypography variant="body2" fontWeight="bold" mt={2.3} fontSize="14px">
                      SpringBoot
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={javaIcon} width="100%" />
                    <MKTypography variant="body2" fontWeight="bold" mt={-1} fontSize="14px">
                      Java
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={pythonIcon} width="75%" mt={1} />
                    <MKTypography variant="body2" fontWeight="bold" mt={0.5} fontSize="14px">
                      Python
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox component="a" target="_blank">
                    <MKBox component="img" src={mongoDBIcon} width="100%" />
                    <MKTypography variant="body2" fontWeight="bold" mt={-1} fontSize="14px">
                      MongoDB
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={reactIcon} width="80%" mt={2} />
                    <MKTypography variant="body2" fontWeight="bold" mt={0} fontSize="14px">
                      ReactJS
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={htmlIcon} width="90%" />
                    <MKTypography variant="body2" fontWeight="bold" mt={-0.5} fontSize="14px">
                      HTML
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={cssIcon} width="65%" mt={0} />
                    <MKTypography variant="body2" fontWeight="bold" mt={-0.5} fontSize="14px">
                      CSS
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={sqlIcon} width="90%" mt={0} />
                    <MKTypography variant="body2" fontWeight="bold" mt={-0.5} fontSize="14px">
                      SQL
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tecnologias;
