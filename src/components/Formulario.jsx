import { useState } from "react";
import { diferenciaYear, calcularSeguro, calcularVehiculo } from "../helper";
import styled from "@emotion/styled";

const Campo = styled.div`
display: flex;
margin-bottom: 1rem;
align-items:center;
`;

const Label = styled.label`
 flex: 0 0 100px;
`;

const Select = styled.select`
display: block;
width: 100%;
padding: 1rem;
border: 1px solid #e1e1e1;
appearance: none;
-webkit-appearance: none;
`;

const InputRadio = styled.input`
margin:0 1rem;
`;

const Boton = styled.button`
background-color: #00838f;
font-size:16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
transition: background-color .3s ease;
margin-top: 2rem;

&:hover {
  background-color: #26c6da;
  cursor: pointer;
}
`;

const Error = styled.div`
background-color: red;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
margin-bottom: 2rem;
`;

const Formulario = ({ setResumen, setCargando }) => {

  const [datos, setDatos] = useState({
    seguro: "",
    year: "",
    vehiculo: ""
  })
  const [error, setError] = useState(false);

  const { seguro, year, vehiculo } = datos;

  const obtenerInfo = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const cotizarSeguro = e => {
    e.preventDefault();

    if (seguro.trim() === "" || year.trim() === "" || vehiculo.trim() === "") {
      setError(true);
      return
    }
    setError(false);
    let resultado = 2000;

    const diferencia = diferenciaYear(year);

    resultado -= ((diferencia * 3) * resultado) / 100;

    resultado = calcularSeguro(seguro) * resultado;

    const valorTipoVehiculo = calcularVehiculo(vehiculo);

    resultado = parseFloat(valorTipoVehiculo * resultado).toFixed(2);

    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      setResumen({
        cotizacion: resultado,
        datos
      });
    }, 3000)
  }


  return (
    <form
      onSubmit={cotizarSeguro}
    >
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Seguro</Label>
        <Select
          name="seguro"
          value={seguro}
          onChange={obtenerInfo}
        >
          <option value="">--Seleccione--</option>
          <option value="civil">Resposabilidad Civil</option>
          <option
            value="terceros">Contra Terceros</option>
          <option
            value="todo riesgo">Contra Todo Riesgo</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange={obtenerInfo}
        >
          <option value="">--Seleccione--</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Vehículo</Label>
        <InputRadio
          type="radio"
          name="vehiculo"
          value="moto"
          checked={vehiculo === "moto"}
          onChange={obtenerInfo}
        />Moto
        <InputRadio
          type="radio"
          name="vehiculo"
          value="automovil"
          checked={vehiculo === "automovil"}
          onChange={obtenerInfo}
        />Automóvil
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  )
}

export default Formulario