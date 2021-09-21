const departamentos = () => {
  let nombre = prompt("Porfavor Ingresa tu Nombre");
  let departamento = prompt(
    "Porfavor ingrese uno de los 32 departamentos de Colombia"
  );

  switch (departamento) {
    case "Amazonas":
      alert("La Capital es Leticia");
      break;

    case "Antioquia":
      alert("La Capital es Medellin");
      break;

    case "Arauca":
      alert("La Capital es Arauca");
      break;
    case "Atlantico":
      alert("La Capital es Barranquilla");
      break;

    case "Bolivar":
      alert("La Capital es Cartagena de Indias");
      break;

    case "Boyaca":
      alert("La Capital es Tunja");
      break;

    case "Caldas":
      alert("La Capital es Manizales");
      break;

    case "Caqueta":
      alert("La Capital es Florencia");
      break;

    case "Casanare":
      alert("La Capital es Yopal");
      break;

    case "Cauca":
      alert("La Capital es Popayan");
      break;

    case "Cesar":
      alert("La Capital es Valledupar");
      break;

    case "Choco":
      alert("La Capital es Quibdo");
      break;

    case "Cordoba":
      alert("La Capital es Monteria");
      break;

    case "Cundinamarca":
      alert("La Capital es Bogota");
      break;

    case "Guainia":
      alert("La Capital es Inirida");
      break;

    case "Guaviare":
      alert("La Capital es San Jose del Guaviare");
      break;

    case "Huila":
      alert("La Capital es Neiva");
      break;

    case "La Guajira":
      alert("La Capital es Rioacha");
      break;

    case "Magdalena":
      alert("La Capital es Santa Marta");
      break;

    case "Meta":
      alert("La Capital es Villavicencio");
      break;

    case "Nariño":
      alert("La Capital es San Juan de Pasto");
      break;

    case "Norte de Santander":
      alert("La Capital es San Jose de Cucuta");
      break;

    case "Putumayo":
      alert("La Capital es Mocoa");
      break;

    case "Quindio":
      alert("La Capital es Armenia");
      break;

    case "Risaralda":
      alert("La Capital es Pereira");
      break;

    case "San Andres y Providencia":
      alert("La Capital es San Andres");
      break;

    case "Santander":
      alert("La Capital es Bucaramanga");
      break;

    case "Sucre":
      alert("La Capital es Sincelejo");
      break;

    case "Tolima":
      alert("La Capital es Ibague");
      break;

    case "Valle del Cuca":
      alert("La Capital es Cali");
      break;

    case "Vaupes":
      alert("La Capital es Mitu");
      break;

    case "Vichada":
      alert("La Capital es Puerto Carreño");
      break;

    default:
      alert("Porfavor ingrese un Departamento de Colombia");
      break;
  }
};
