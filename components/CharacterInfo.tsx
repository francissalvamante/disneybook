import React from 'react'
import {fetchCharacter} from "@/utils";
import Image from "next/image";
import moment from "moment";
import List from "@/components/List";
import Link from "next/link";

const CharacterInfo = async ({ id }: { id: string }) => {
  const { data } = await fetchCharacter(id);

  const {
	name,
	updatedAt,
	films,
	shortFilms,
	tvShows,
	sourceUrl,
	imageUrl
  } = data;

  const list = [
	{
	  displayName: 'Featured Films',
	  iterable: films
	},
	{
	  displayName: 'Short Films',
	  iterable: shortFilms
	},
	{
	  displayName: 'TV Shows',
	  iterable: tvShows
	}
  ]

  return (
	<div className='flex gap-4'>
	  <div className='w-1/3 flex justify-center'>
		<Image src={imageUrl} alt={name} height={529} width={439} className='rounded-2xl max-h-[529px] max-w-[439px] shadow-image'/>
	  </div>
	  <div className='w-2/3 flex flex-col gap-7'>
		<h2 className='font-bold text-5xl'>{ name }</h2>
		<span className='text-xs leading-4'>Last Updated {moment(updatedAt).format('MMMM Do, YYYY')}</span>
		{list.map(({ displayName, iterable }) => (
		  <List displayName={displayName} iterable={iterable} key={displayName} />
		))}
		<Link href={sourceUrl} className='button' target={'_blank'}>
		  Explore More Character Details
		</Link>
	  </div>
	</div>
  )
}
export default CharacterInfo
