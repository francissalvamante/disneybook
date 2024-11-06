import React from 'react'
import Profile from "@/components/Profile";
import {cookies} from "next/headers";

const Page = async () => {
  const profile = (await cookies()).get('profile');

  const saveToCookie = async (vals: any) => {
	'use server';
	vals.updatedAt = new Date();
	(await cookies()).set('profile', JSON.stringify(vals));
  }

  return (
	<div className='flex flex-col gap-8 p-20 bg-custom-white-100'>
	  <Profile profile={profile} save={saveToCookie}/>
	</div>
  )
}
export default Page
