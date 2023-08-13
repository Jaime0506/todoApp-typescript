import { CircularProgress } from "@nextui-org/react"

export const CheckingAuth = () => {
  return (
    <main className="w-screen flex items-center justify-center h-screen bg-slate-200">
        <CircularProgress aria-label="Loading" color="success"/>
    </main>
  )
}
