import React from 'react'
import CoinDetails from '../components/CoinDetails'
import PageChart from '../components/PageChart'

const Details = () => {
	return (
		<div className='bg-primary text-white sm:px-4 px-8 py-20'>
			<PageChart />
			<CoinDetails />
		</div>
	)
}

export default Details
