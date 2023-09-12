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
import teamWork from "assets/images/teamwork.png";
import problemSolving from "assets/images/problemsolving.png";
import criticalThinking from "assets/images/criticalThinking.png";
import flexibility from "assets/images/flexibility.png";
import adaptability from "assets/images/adapatability.png";
import positiveattitude from "assets/images/positiveattitude.png";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function SoftSkills() {
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
              Soft Skills
            </MKTypography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={teamWork} width="100%" mt={-2.5} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px">
                      Teamwork
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={problemSolving} width="80%" mt={0} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px">
                      Problem Solving
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={criticalThinking} width="90%" mt={-0.5} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px">
                      Critical Thinking
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={flexibility} width="80%" mt={1} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px">
                      Flexibility
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox component="a" target="_blank">
                    <MKBox component="img" src={adaptability} width="100%" mt={-0.5} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px" mt={-0.5}>
                      Adaptability
                    </MKTypography>
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={6} lg={2}>
                <Tooltip>
                  <MKBox>
                    <MKBox component="img" src={positiveattitude} width="100%" mt={-1} />
                    <MKTypography variant="body2" fontWeight="bold" fontSize="14px">
                      Positive Attitude
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

export default SoftSkills;
