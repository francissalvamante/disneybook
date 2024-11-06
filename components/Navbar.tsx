import React from 'react'
import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

const Navbar = () => {
  return (
	<section className='w-full h-28'>
	  <nav className='w-full h-full flex justify-between items-center align-middle gap-10'>
		<Image src='/logo.png' alt='Disney Logo' width={96} height={40} />
		<SearchForm />
		<Link href='/profile' className='w-14'>
		  <Image src='/Avatar.png' alt='avatar' width={48} height={48} className='cursor-pointer' />
		</Link>
	  </nav>
	</section>
  )
}
export default Navbar
