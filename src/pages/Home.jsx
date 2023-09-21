import React from 'react'
import Trending from '../components/Trending'
import Markets from '../components/Markets'
import Hero from '../components/Hero'

const Home = () => {
	return (
		<>
			<div className='bg-primary font-poppins sm:px-4 px-8'>
				<Hero />
				<Trending />
				<Markets />
			</div>
		</>
	)
}

export default Home
