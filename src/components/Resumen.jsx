import styled from "@emotion/styled";
import { capitalize } from "../helper";
import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838f;
color: #fff;
margin-top: 1rem;
`

const Resumen = ({ datos }) => {

  const { seguro, year, vehiculo } = datos;
  if (seguro === "" || year === "" || vehiculo === "") return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Seguro: {capitalize(seguro)}</li>
        <li>Vehículo: {capitalize(vehiculo)}</li>
        <li>Año: {capitalize(year)}</li>



      </ul>
    </ContenedorResumen>
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
}

export default Resumen