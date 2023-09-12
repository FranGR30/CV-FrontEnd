import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKTypography from "components/MKTypography";
import Divider from "@mui/material/Divider";

function Language() {
  return (
    <MKBox mb={4}>
      <Container>
        <MKTypography variant="h3" mb={4} mt={4}>
          Idiomas
        </MKTypography>
        <DefaultInfoCard title="Inglés" description="Nivel: Avanzado" />
        <Divider variant="middle" style={{ height: 3 }} />
        <DefaultInfoCard title="Francés" description="Nivel: Básico" />
      </Container>
    </MKBox>
  );
}

export default Language;
