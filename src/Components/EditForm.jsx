import IconPersona1 from "./Icons/IconPersona1";
import IconCancelar from "./Icons/IconCancelar";
import IconConfirmar from "./Icons/IconConfirmar";
import IconPuntoUbicacion1 from "./Icons/IconPuntoUbicacion1";
import IconVehiculo1 from "./Icons/IconVehiculo1";
import Input from "./Partials/Input";
import SearchForm from "./SearchForm";
import { getAllData, updateData } from "../api/monitoring.api";
import { toast } from "sonner";

export default function EditForm({
  setForm,
  register,
  handleSubmit,
  setMonitoring,
  reset,
  setValue,
}) {
  const updateDataMonitoring = (data) => {
    const dataUpdateApi = async () => {
      try {
        const response = await updateData(data.id, data);

        if (response.status === 200) {
          toast.success("Se actualizo correctamente");
          reset();
          const data = await getAllData();
          setForm(<SearchForm register={register} />);
          setMonitoring(data.data);
        } else {
          console.error("No se pudo actualizar el dato");
          toast.error("No se pudo actualizar el dato");
        }
      } catch (error) {
        console.error("Ocurrio un error: ", error);
        toast.error("Ocurrio un error");
      }
    };

    dataUpdateApi();
  };

  return (
    <>
      <form onSubmit={handleSubmit(updateDataMonitoring)} className="mx-10">
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
        <div className="flex justify-end gap-4">
          <IconCancelar
            className="hover:cursor-pointer"
            onClick={() => {
              setValue("id", "");
              setForm(<SearchForm register={register} />);
            }}
          />
          <button type="submit">
            <IconConfirmar />
          </button>
        </div>
      </form>
    </>
  );
}
