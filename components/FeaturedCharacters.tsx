import React from 'react'
import {fetchCharacters} from "@/utils";
import CharacterCard from "@/components/CharacterCard";

const DISNEY_API_MAX_CHARACTERS: number = 4;

const FeaturedCharacters = async () => {

  const { data } = await fetchCharacters(DISNEY_API_MAX_CHARACTERS);

  if (!data) {
	console.log('No characters were found.');
  }

  return (
	<div className='w-full h-[619px] bg-disney-blue text-center pt-10 px-20 pb-20'>
	  <h2 className='font-normal text-white text-4xl'>Featured Characters!</h2>
	  <div className='w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 justify-items-center mt-8'>
		{data.map((character: any) => (
		  <CharacterCard key={character._id} character={character}/>
		))}
	  </div>
	</div>
  )
}
export default FeaturedCharacters
