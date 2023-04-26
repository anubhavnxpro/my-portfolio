import AppFooter from "../shared/AppFooter"
import AppHeader from "../shared/AppHeader"
import PagesMetaHead from "../shared/PagesMetaHead"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div> 
      <AppFooter />
    </>
  )
}

export default DefaultLayout