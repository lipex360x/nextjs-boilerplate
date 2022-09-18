import { ToastContainer } from "@/components/bosons/ToastContainer"

export type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}