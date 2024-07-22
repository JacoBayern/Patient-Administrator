type PatientDetailItemProps = {
    label: String,
    data: String
}

export default function PatientDetailItem( {label, data} : PatientDetailItemProps) {
  return (
    <p className=' text-gray-700 font-bold mb-3 uppercase'>{`${label}:`} {""}
        <span className=' font-normal normal-case'>
        {data}
        </span>
      </p>
  )
}
