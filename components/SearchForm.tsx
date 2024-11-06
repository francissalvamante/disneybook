'use client';

import React, {useEffect, useRef, useState} from 'react'
import {redirect, RedirectType} from "next/navigation";

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const debounceTimer = useRef<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setQuery(e.target.value);
	if(debounceTimer.current) clearTimeout(debounceTimer.current);

	debounceTimer.current = setTimeout(() => {
	  if (e.target.value) {
	  	redirect(`/?query=${e.target.value}`, RedirectType.push)
	  } else {
		redirect(`/`, RedirectType.push);
	  }
	}, 300);
  }

  useEffect(() => {
	return () => {
	  if (debounceTimer.current) clearTimeout(debounceTimer.current);
	}
  }, []);

  return (
	<input
	  name='query'
	  placeholder='Find a character...'
	  className='px-4 w-full bg-custom-white-100 h-12 rounded-[100px]'
	  autoComplete='off'
	  value={query}
	  onChange={handleChange}
	/>
  )
}
export default SearchForm
