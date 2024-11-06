import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
	<main className='font-lato-sans w-11/12'>
	  <Navbar />
	  {children}
	  <Footer displayFeatured={true}/>
	</main>
  )
}
export default Layout
