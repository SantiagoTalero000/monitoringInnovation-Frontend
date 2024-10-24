import IconCrear from "../Components/Icons/IconCrear";
import SearchForm from "../Components/SearchForm";
import { useEffect, useState } from "react";
import CreateForm from "../Components/CreateForm";
import IconEditar1 from "../Components/Icons/IconEditar1";
import IconEliminar1 from "../Components/Icons/IconEliminar1";
import IconEditar from "../Components/Icons/IconEditar";
import IconEliminar from "../Components/Icons/IconEliminar";
import EditForm from "../Components/EditForm";
import ImagoLogotipoMotion from "../Components/Icons/ImagologotipoMotion";
import DeleteForm from "../Components/DeleteForm";
import { getAllData } from "../api/monitoring.api";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: {
      id: "",
      marca: "",
      sucursal: "",
      aspirante: "",
    },
  });
  const [form, setForm] = useState(<SearchForm register={register} />);
  const [monitoring, setMonitoring] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [marca, sucursal, aspirante, id] = watch([
    "marca",
    "sucursal",
    "aspirante",
    "id",
  ]);

  //   useEffect(() => {
  //     navigate("/");
  //   }, []);

  useEffect(() => {
    const monitoringData = async () => {
      try {
        const response = await getAllData();
        setMonitoring(response.data);
      } catch (error) {
        console.error("Ocurrio un error: ", error);
        toast.error("Ocurrio un error");
      }
    };

    monitoringData();
  }, []);

  useEffect(() => {
    if (form.type.name === "SearchForm") {
      const filtrarDatos = () => {
        let filtered = monitoring;

        if (marca) {
          filtered = filtered.filter((item) => item.marca.includes(marca));
        }
        if (sucursal) {
          filtered = filtered.filter((item) =>
            item.sucursal.includes(sucursal)
          );
        }
        if (aspirante) {
          filtered = filtered.filter((item) =>
            item.aspirante.includes(aspirante)
          );
        }

        setFilteredData(filtered);
      };
      filtrarDatos();
    }
  }, [marca, sucursal, aspirante, monitoring]);

  const setValuesData = (data) => {
    setValue("id", data.id);
    setValue("marca", data.marca);
    setValue("sucursal", data.sucursal);
    setValue("aspirante", data.aspirante);
  };

  return (
    <>
      <Toaster richColors />
      <div className="flex flex-col justify-center gap-16 px-40 my-20 xl:flex-row">
        <div className="rounded-[20px] h-full card-shadow xl:w-[40%] py-4 px-8">
          <IconCrear
            className="mb-1 hover:cursor-pointer"
            onClick={() =>
              setForm(
                <CreateForm
                  setForm={setForm}
                  setMonitoring={setMonitoring}
                  register={register}
                  handleSubmit={handleSubmit}
                  reset={reset}
                />
              )
            }
          />
          {form}
        </div>
        <div className="xl:w-[60%] h-[70vh] overflow-auto">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
              <thead className="text-xs text-white uppercase bg-[#E280BE]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-3xl font-medium text-center border-8 border-white"
                  >
                    Marca
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-3xl font-medium text-center border-8 border-white"
                  >
                    Sucursal
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-3xl font-medium text-center border-8 border-white"
                  >
                    Aspirante
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data) => (
                  <tr
                    key={data.id}
                    className="bg-white border-b border-[#E280BE]"
                  >
                    <td
                      scope="row"
                      className="px-6 py-1 text-[#C5C5C5] text-2xl whitespace-nowrap"
                    >
                      {data.marca}
                    </td>
                    <td className="px-6 py-1 text-2xl text-[#C5C5C5]">
                      {data.sucursal}
                    </td>
                    <td className="flex py-1 justify-between gap-4 text-[#C5C5C5] px-6 text-2xl">
                      {data.aspirante}
                      <div className="flex gap-6">
                        {(form.type.name == "EditForm" ||
                          form.type.name == "DeleteForm") &&
                        id !== data.id ? (
                          <>
                            <IconEditar className="hover:cursor-not-allowed" />
                            <IconEliminar className="hover:cursor-not-allowed" />
                          </>
                        ) : (
                          <>
                            <IconEditar1
                              className="hover:cursor-pointer"
                              onClick={() => {
                                setForm(
                                  <EditForm
                                    setForm={setForm}
                                    register={register}
                                    handleSubmit={handleSubmit}
                                    setMonitoring={setMonitoring}
                                    reset={reset}
                                    setValue={setValue}
                                  />
                                );
                                setValuesData(data);
                              }}
                            />
                            <IconEliminar1
                              className="hover:cursor-pointer"
                              onClick={() => {
                                setForm(
                                  <DeleteForm
                                    setForm={setForm}
                                    register={register}
                                    handleSubmit={handleSubmit}
                                    setMonitoring={setMonitoring}
                                    reset={reset}
                                    setValue={setValue}
                                  />
                                );
                                setValuesData(data);
                              }}
                            />
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ImagoLogotipoMotion className="mx-auto" />
    </>
  );
}
