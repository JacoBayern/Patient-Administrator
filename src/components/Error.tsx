

export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center font-bold text-sm bg-red-500 py-3 ">{children}</div>
  )
}
