import React from 'react'
import Link from "next/link";
import {CharacterData} from "@/types/interface";

const CharacterCard = ({ character }: { character: CharacterData }) => {
  const {
	name,
	films,
	shortFilms,
	tvShows,
	imageUrl,
	_id
  } = character;

  const featuredFilms = [...films, ...shortFilms, ...tvShows];

  return (
	<div className='flex flex-col bg-white w-full items-center text-center'>
	  <img src={imageUrl ?? 'https://placehold.co/248x248?text=No Image Found'} alt='Character Card' style={{ height: '248px', width: '100%' }} />
	  <div className='w-full px-3 mt-4 mb-8 flex gap-4 flex-col'>
		<h2 className='font-bold text-xl'>{name}</h2>
		<h3 className='font-[600] text-lg'>Featured Films</h3>
		<p className='font-normal text-base text-ellipsis line-clamp-2'>{featuredFilms.length ? featuredFilms.join(', ') : 'No featured films found. We\'re sorry.'}</p>
		<Link href={`/character/${_id}`} className='uppercase underline font-black text-base leading-[14.4px]'>View Profile</Link>
	  </div>
	</div>
  )
}
export default CharacterCard
