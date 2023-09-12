import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import getContactosNoLeidos from "api/getContactos.api";
import MKButton from "components/MKButton";
import marcarLeidoApi from "api/marcarLeido.api";
import eliminarContactoApi from "api/eliminarContacto.api";
import { Grid } from "@mui/material";

export default function BasicTable() {
  const [contactos, setContactos] = useState([]);
  const accessToken = sessionStorage.getItem("access-token");
  const [selectLeido, setSelectLeido] = useState(false);
  useEffect(() => {
    getContactosNoLeidos(accessToken, setContactos, selectLeido);
  }, [setContactos, accessToken, selectLeido]);
  const marcarLeido = async (id, leidoActual) => {
    marcarLeidoApi(id, accessToken, !leidoActual);
    window.location.reload(true);
  };
  const eliminarContacto = async (id) => {
    eliminarContactoApi(id, accessToken);
    window.location.reload(true);
  };
  const verLeidos = async () => {
    setSelectLeido(true);
  };
  const verNoLeidos = async () => {
    setSelectLeido(false);
  };
  return (
    <Grid>
      <Grid item xs={12} md={8} sx={{ mb: 2 }} container={true}>
        <Grid>
          <MKButton color={selectLeido ? "info" : "secondary"} onClick={() => verLeidos()}>
            Ver Leidos
          </MKButton>
        </Grid>
        <Grid ml={2}>
          <MKButton color={selectLeido ? "secondary" : "info"} onClick={() => verNoLeidos()}>
            Ver Nuevos
          </MKButton>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ display: "table-header-group" }}>
            <TableRow>
              <TableCell>Nombre y apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Comentario</TableCell>
              <TableCell>Leido</TableCell>
              {selectLeido && <TableCell align="center">Eliminar Contacto</TableCell>}
              {!selectLeido && <TableCell align="center">Marcar Leido</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {contactos.map((contacto) => (
              <TableRow
                key={contacto.nombreYApellido}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    color: contacto.leido ? "black" : "royalblue",
                    fontWeight: contacto.leido ? "normal" : "bold",
                  }}
                >
                  {contacto.nombreYApellido}
                </TableCell>
                <TableCell
                  style={{
                    color: contacto.leido ? "black" : "royalblue",
                    fontWeight: contacto.leido ? "normal" : "bold",
                  }}
                >
                  {contacto.email}
                </TableCell>
                <TableCell
                  style={{
                    color: contacto.leido ? "black" : "royalblue",
                    fontWeight: contacto.leido ? "normal" : "bold",
                  }}
                >
                  {contacto.telefono}
                </TableCell>
                <TableCell
                  style={{
                    color: contacto.leido ? "black" : "royalblue",
                    fontWeight: contacto.leido ? "normal" : "bold",
                  }}
                >
                  {contacto.mensaje}
                </TableCell>
                <TableCell
                  style={{
                    color: contacto.leido ? "black" : "royalblue",
                    fontWeight: contacto.leido ? "normal" : "bold",
                  }}
                >
                  {contacto.leido ? "Leido" : "Nuevo"}
                </TableCell>
                {!selectLeido && (
                  <TableCell align="center">
                    <MKButton
                      variant="gradient"
                      color="info"
                      onClick={() => marcarLeido(contacto._id, contacto.leido)}
                    >
                      Leido
                    </MKButton>
                  </TableCell>
                )}
                {selectLeido && (
                  <TableCell align="center">
                    <MKButton
                      variant="gradient"
                      color="error"
                      onClick={() => eliminarContacto(contacto._id)}
                    >
                      Eliminar
                    </MKButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
