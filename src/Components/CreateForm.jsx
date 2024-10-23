import IconPersona1 from "./Icons/IconPersona1";
import IconPuntoUbicacion1 from "./Icons/IconPuntoUbicacion1";
import IconVehiculo1 from "./Icons/IconVehiculo1";
import Input from "./Partials/Input";
import SearchForm from "./SearchForm";

export default function CreateForm({ setForm }) {
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
        <div className="flex justify-end gap-12">
          <button
            onClick={() => setForm(<SearchForm />)}
            className="px-4 w-[175px] hover:text-white hover:bg-[#E280BE] border-2 rounded-[10px] text-[28.66px] border-[#E280BE] text-[#C5C5C5] transition-all"
          >
            Cancelar
          </button>
          <button className="px-4 w-[175px] hover:text-white border-2 rounded-[10px] text-[28.66px] border-[#01BEDB] hover:bg-[#01BEDB] text-[#C5C5C5] transition-all">
            Crear
          </button>
        </div>
      </form>
    </>
  );
}
