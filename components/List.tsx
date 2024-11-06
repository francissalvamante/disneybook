import React from 'react'

const List = ({ displayName, iterable }: { displayName: string, iterable: any[] }) => {
  return (
	<div>
	  <h3 className='font-bold text-lg leading-6'>{ displayName }</h3>
	  {iterable.length ? (
		<ul className='list-disc ml-6'>
		  {iterable.map((item) => (
			<li className='text-sm' key={item}>{item}</li>
		  ))}
		</ul>
	  ) : <p className='font-bold text-md'>No { displayName }.</p>}
	</div>
  )
}
export default List
