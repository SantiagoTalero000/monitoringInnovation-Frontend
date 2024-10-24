import IconPersona1 from "./Icons/IconPersona1";
import IconPuntoUbicacion1 from "./Icons/IconPuntoUbicacion1";
import IconVehiculo1 from "./Icons/IconVehiculo1";
import Input from "./Partials/Input";
import SearchForm from "./SearchForm";
import { createData, getAllData } from "../api/monitoring.api";
import { toast } from "sonner";

export default function CreateForm({
  setForm,
  setMonitoring,
  register,
  handleSubmit,
  reset,
}) {
  const sendData = (data) => {
    const postDataMonitoring = async () => {
      try {
        const response = await createData(data);

        if (response.status === 201) {
          toast.success("Se creo exitosamente");
          reset();
          const data = await getAllData();
          setForm(<SearchForm register={register} />);
          setMonitoring(data.data);
        } else {
          console.error("No se pudo crear el dato");
          toast.error("No se pudo crear el dato");
        }
      } catch (error) {
        console.error("Ocurrio un error: ", error);
        toast.error("Ocurrio un error al intentar crear la tarea");
      }
    };

    postDataMonitoring();
  };

  return (
    <>
      <form onSubmit={handleSubmit(sendData)} className="mx-10">
        <Input
          icon={<IconVehiculo1 />}
          placeholder={"Marca"}
          type={"text"}
          {...register("marca", { required: true })}
        />
        <Input
          icon={<IconPuntoUbicacion1 />}
          placeholder={"Sucursal"}
          type={"text"}
          classNames={"my-8"}
          {...register("sucursal", { required: true })}
        />
        <Input
          icon={<IconPersona1 />}
          placeholder={"Aspirante"}
          type={"text"}
          classNames={"my-8"}
          {...register("aspirante", { required: true })}
        />
        <div className="flex justify-end gap-12">
          <button
            type="button"
            onClick={() => setForm(<SearchForm register={register} />)}
            className="px-4 w-[175px] hover:text-white hover:bg-[#E280BE] border-2 rounded-[10px] text-[28.66px] border-[#E280BE] text-[#C5C5C5] transition-all"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 w-[175px] hover:text-white border-2 rounded-[10px] text-[28.66px] border-[#01BEDB] hover:bg-[#01BEDB] text-[#C5C5C5] transition-all"
          >
            Crear
          </button>
        </div>
      </form>
    </>
  );
}
