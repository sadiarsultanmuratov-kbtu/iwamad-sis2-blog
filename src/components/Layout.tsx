import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

// Header and Footer stay on screen; only <Outlet /> changes when the page changes.
function Layout() {
  return (
    <>
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
