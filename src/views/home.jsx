import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Layout from './layout'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
  {/* START PAGE CONTAINER */}
  <div className="page-container">
    {/* START PAGE SIDEBAR */}
    <Sidebar></Sidebar>
    {/* END PAGE SIDEBAR */}
    {/* PAGE CONTENT */}
    <div className="page-content">
      {/* START X-NAVIGATION VERTICAL */}
      <Header/>
      {/* END X-NAVIGATION VERTICAL */}   
      <Outlet/>                  
      {/* START BREADCRUMB */}
  {/* END MESSAGE BOX*/}                        
</div>
</div>
</div>

  )
}

export default Home
