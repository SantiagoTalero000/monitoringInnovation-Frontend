import IconCrear from "../Components/Icons/IconCrear";
import SearchForm from "../Components/SearchForm";
import { useState } from "react";
import CreateForm from "../Components/CreateForm";
import IconEditar1 from "../Components/Icons/IconEditar1";
import IconEliminar1 from "../Components/Icons/IconEliminar1";
import EditForm from "../Components/EditForm";
import ImagoLogotipoMotion from "../Components/Icons/ImagologotipoMotion";
import DeleteForm from "../Components/DeleteForm";

export default function Index() {
  const [form, setForm] = useState(<SearchForm />);

  return (
    <>
      <div className="flex flex-col justify-center gap-16 px-40 my-20 xl:flex-row">
        <div className="rounded-[20px] h-full card-shadow xl:w-[40%] py-4 px-8">
          <IconCrear
            className="mb-1 hover:cursor-pointer"
            onClick={() => setForm(<CreateForm setForm={setForm} />)}
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
                <tr className="bg-white border-b border-[#E280BE]">
                  <td
                    scope="row"
                    className="px-6 py-1 text-[#C5C5C5] text-2xl whitespace-nowrap"
                  >
                    Mazda
                  </td>
                  <td className="px-6 py-1 text-2xl text-[#C5C5C5]">
                    Localidad
                  </td>
                  <td className="flex py-1 justify-between gap-4 text-[#C5C5C5] px-6 text-2xl">
                    Nombre Apellido
                    <div className="flex gap-6">
                      <IconEditar1
                        className="hover:cursor-pointer"
                        onClick={() => setForm(<EditForm setForm={setForm} />)}
                      />
                      <IconEliminar1
                        className="hover:cursor-pointer"
                        onClick={() =>
                          setForm(<DeleteForm setForm={setForm} />)
                        }
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ImagoLogotipoMotion className="mx-auto" />
    </>
  );
}
