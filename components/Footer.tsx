import React from 'react'
import FeaturedCharacters from "@/components/FeaturedCharacters";
import Image from "next/image";

const Footer = ({ displayFeatured }: { displayFeatured: boolean }) => {
  return (
	<div className='w-full'>
	  {displayFeatured && <FeaturedCharacters />}
	  <div className='flex flex-col items-center py-8 gap-3'>
		<Image src='/logo.png' alt='Disney Logo' width={96} height={40} />
		<p className='font-normal text-[11px]'>For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption</p>
	  </div>
	</div>
  )
}
export default Footer
