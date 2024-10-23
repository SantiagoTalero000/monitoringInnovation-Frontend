import IconPersona from "./Icons/IconPersona";
import IconPuntoUbicacion from "./Icons/IconPuntoUbicacion";
import IconVehiculo from "./Icons/IconVehiculo";
import Input from "./Partials/Input";

export default function SearchForm() {
  return (
    <form className="mx-10">
      <Input icon={<IconVehiculo />} placeholder={"Mazda"} type={"text"} />
      <Input
        icon={<IconPuntoUbicacion />}
        placeholder={"Chapinero"}
        type={"text"}
        classNames={"my-8"}
      />
      <Input
        icon={<IconPersona />}
        placeholder={"David Sandoval"}
        type={"text"}
        classNames={"my-8"}
      />
    </form>
  );
}
