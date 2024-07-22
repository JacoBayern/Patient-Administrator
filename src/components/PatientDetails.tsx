import { toast } from 'react-toastify'
import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'
import { usePatientStore } from '../store'

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

  const deletePatient = usePatientStore( state => state.deletePatient)
  const getPatientById = usePatientStore( state => state.getPatientById)

  const handleClick = () => {
    deletePatient(patient.id)
    
    toast.error("Paciente eliminado exitosamente")
  }

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Dueño" data={patient.caretaker} />
      <PatientDetailItem label="Correo Electrónico" data={patient.email} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />

      <div className='flex justify-between mt-10'>

        <button
          type='button'
          className=' bg-blue-600 rounded-lg py-1 text-white hover:bg-blue-700 font-bold px-5 uppercase'
          onClick={() => getPatientById(patient.id)}
        >
          editar  
        </button>

        <button
          type='button'
          className=' bg-red-600 rounded-lg py-1 text-white hover:bg-red-700 font-bold px-5 uppercase'
          onClick={handleClick}
        >
          eliminar 
        </button>


      </div>
    </div>
  )
}
