'use client';

import React from 'react'
import Input from "@/components/Input";
import {disneylands, states} from "@/constants/constants";
import moment from "moment";
import {computeAge} from "@/utils";

const Profile = ({ profile, save }: { profile: any, save: any }) => {
  const [edit, setEdit] = React.useState(!profile);
  const storedProfile = JSON.parse(profile.value);
  const [form, setForm] = React.useState(storedProfile || {
	firstName: '',
	lastName: '',
	birthDate: moment().format('yyyy-MM-DD'),
	city: '',
	state: '',
	favoriteDisneyCharacter: '',
	favoriteDisneyMovie: '',
	favoriteDisneyRide: '',
	favoriteDisneyLand: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	if (event.target.id === 'birthDate') {
	  setForm((prev) => ({ ...prev, birthDate: moment(event.target.value).format('yyyy-MM-DD') }));
	} else {
	  setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
	}
  };

  const handleSubmit = () => {
	save(form);
	setEdit(false);
  }

  return (
	<>
	  {edit ? (
		<form className='w-7/12 flex flex-col gap-4'>
		  <div className='form-group flex gap-3'>
			<Input type='text' required={true} label='First Name' placeholder='John' id='firstName' classes='w-1/2' formField={form.firstName} handleChange={handleChange} />
			<Input type='text' required={true} label='Last Name' placeholder='Doe' id='lastName' classes='w-1/2' formField={form.lastName} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex'>
			<Input type='date' required={false} label='Birth Date' id='birthDate' classes='w-1/2' formField={form.birthDate} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex gap-3'>
			<Input type='text' required={false} label='City' placeholder='San Francisco' id='city' classes='w-1/2' formField={form.city} handleChange={handleChange} />
			<Input type='dropdown' required={false} label='State' id='state' classes='w-2/6' inputClasses='!w-4/12' options={states} formField={form.state} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex'>
			<Input type='text' required={false} label='Favorite Disney Character' id='favoriteDisneyCharacter' placeholder='Olaf' classes='w-full' formField={form.favoriteDisneyCharacter} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex'>
			<Input type='text' required={false} label='Favorite Disney Movie' id='favoriteDisneyMovie' placeholder='Frozen' classes='w-full' formField={form.favoriteDisneyMovie} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex'>
			<Input type='text' required={false} label='Favorite Disney Ride' id='favoriteDisneyRide' placeholder='Space Mountain' classes='w-full' formField={form.favoriteDisneyRide} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex'>
			<Input type='dropdown' required={false} label='Favorite Disney Land' id='favoriteDisneyLand' classes='w-3/6' options={disneylands} formField={form.favoriteDisneyLand} handleChange={handleChange} />
		  </div>
		  <div className='form-group flex gap-3'>
			<div className='button confirmation' onClick={handleSubmit}>Update Profile</div>
			<div className={`button cancel ${!profile && 'hidden'}`} onClick={() => setEdit(false)}>Cancel</div>
		  </div>
		</form>
	  ) : (
		<>
		  <div className='flex flex-col gap-2'>
			<h2 className='font-semibold text-4xl'>{`${storedProfile.firstName} ${storedProfile.lastName}`}</h2>
			<span className='text-xs leading-4'>Last Updated {moment(storedProfile.updatedAt).format('MMMM Do, YYYY')}</span>
		  </div>
		  <div className='flex flex-col gap-3'>
			<h3 className='font-semibold text-lg'>Age: {computeAge(storedProfile.birthDate)}</h3>
			<h3 className='font-semibold text-lg'>Location: {`${storedProfile.city} ${storedProfile.state}`}</h3>
			<h3 className='font-semibold text-lg'>Favorite Disney Character: {`${storedProfile.favoriteDisneyCharacter}`}</h3>
			<h3 className='font-semibold text-lg'>Favorite Disney Ride: {`${storedProfile.favoriteDisneyRide}`}</h3>
			<h3 className='font-semibold text-lg'>Favorite Disney Movie: {`${storedProfile.favoriteDisneyMovie}`}</h3>
			<h3 className='font-semibold text-lg'>Favorite Disneyland: {`${storedProfile.favoriteDisneyLand}`}</h3>
		  </div>
		  <div className='button confirmation' onClick={() => setEdit(true)}>
			Edit Profile
		  </div>
		</>
	  )}
	</>
  )
}
export default Profile
