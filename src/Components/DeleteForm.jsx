import IconPersona1 from "./Icons/IconPersona1";
import IconCancelar from "./Icons/IconCancelar";
import IconConfirmar from "./Icons/IconConfirmar";
import IconPuntoUbicacion1 from "./Icons/IconPuntoUbicacion1";
import IconVehiculo1 from "./Icons/IconVehiculo1";
import Input from "./Partials/Input";
import SearchForm from "./SearchForm";

export default function DeleteForm({ setForm }) {
  return (
    <>
      <form className="mx-10">
        <Input icon={<IconVehiculo1 />} placeholder={"Mazda"} type={"text"} />
        <Input
          icon={<IconPuntoUbicacion1 />}
          placeholder={"Chapinero"}
          type={"text"}
          classNames={"my-8"}
        />
        <Input
          icon={<IconPersona1 />}
          placeholder={"David Sandoval"}
          type={"text"}
          classNames={"my-8"}
        />
        <div className="flex justify-end gap-4">
          <IconCancelar
            className="hover:cursor-pointer"
            onClick={() => setForm(<SearchForm />)}
          />
          <IconConfirmar />
        </div>
      </form>
    </>
  );
}
