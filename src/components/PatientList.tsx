import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {
  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="text-3xl font-bold text-center" >Listado de Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-10" >Administra tus {""}

            <span className="text-indigo-600 font-bold" > Pacientes y citas</span>
          </p>
          {patients.map(patient => (
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}

        </>
      ) : (<>
        <h2 className="text-3xl font-bold text-center">No hay pacientes</h2>
        <p className="text-center text-xl mt-5 mb-10">
          Agrega tus pacientes y {""}
          <span className="text-indigo-600 font-bold">
            Aparecerán en este lugar
          </span>
        </p>
      </>)}
    </div>
  )
}
