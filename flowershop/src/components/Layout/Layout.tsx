import { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        { children }
      <Footer />
    </>
  )
}

export default Layout
