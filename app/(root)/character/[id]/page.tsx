import React from 'react'
import CharacterInfo from "@/components/CharacterInfo";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
  	<div className='bg-custom-white-100 p-20'>
	  <CharacterInfo id={id} />
	</div>
  )
}
export default Page
