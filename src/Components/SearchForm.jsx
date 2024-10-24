import IconPersona from "./Icons/IconPersona";
import IconPuntoUbicacion from "./Icons/IconPuntoUbicacion";
import IconVehiculo from "./Icons/IconVehiculo";
import Input from "./Partials/Input";

export default function SearchForm({ register }) {
  return (
    <form className="mx-10">
      <Input
        icon={<IconVehiculo />}
        placeholder={"Marca"}
        type={"text"}
        {...register("marca")}
      />
      <Input
        icon={<IconPuntoUbicacion />}
        placeholder={"Sucursal"}
        type={"text"}
        classNames={"my-8"}
        {...register("sucursal")}
      />
      <Input
        icon={<IconPersona />}
        placeholder={"Aspirante"}
        type={"text"}
        classNames={"my-8"}
        {...register("aspirante")}
      />
    </form>
  );
}
