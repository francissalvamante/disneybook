import CharacterCard from "@/components/CharacterCard";
import {fetchCharacters} from "@/utils";

const DISNEY_API_MAX_CHARACTERS: number = 8;

const Home = async ({searchParams}: { searchParams: Promise<{ query?: string }> }) => {
  const query = (await searchParams).query;
  const {data} = await fetchCharacters(DISNEY_API_MAX_CHARACTERS, !query, query);

  if (data.length < 1) {
    return (
      <div className={`bg-custom-white-100 ${query ? 'p-20 pt-14' : 'p-20'}`}>
        <h2 className='text-4xl font-bold'>No Disney&trade; character found for query &apos;{query}&apos;.</h2>
      </div>
    )
  }

  return (
    <>
      <div className={`bg-custom-white-100 ${query ? 'p-20 pt-14' : 'p-20'}`}>
        {query && (
          <div className='w-full flex justify-center mb-10'>
            <h2 className='text-4xl'>Search Results - {query}</h2>
          </div>
        )}
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 justify-items-center'>
          {data.length ? data.map((character: any) => (
            <CharacterCard key={character._id} character={character}/>
          )) : <CharacterCard key={data._id} character={data}/>}
        </div>
      </div>
    </>
  );
}

export default Home;