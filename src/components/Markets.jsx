import useAxios from '../hooks/useAxios'
import Coin from './Coin'
import { useState } from 'react'

const Markets = () => {
	const { response } = useAxios(
		'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
	)
	const [visible, setVisible] = useState(10)
	const [searchText, setSearchText] = useState('')

	const showMoreCards = () => {
		setVisible(prev => prev + 10)
	}

	return (
		<section className=' flex flex-col py-8 container mx-auto'>
			<div className='flex sm:flex-row flex-col sm:items-center'>
				<h2 className='text-white uppercase py-8 text-4xl sm:text-normal text-center'>
					Market <span className='text-white text-xl'> top 100</span>
				</h2>
				<form className='sm:ml-10 ml-0 sm:mb-0 mb-4 sm:text-normal text-center'>
					<input
						className='py-2 px-4 rounded-[25px]'
						onChange={e => setSearchText(e.target.value)}
						type='text'
						placeholder='search a coin'
					/>
				</form>
			</div>
			<div className='flex flex-col items-center gap-2 px-4 mx-auto container'>
				<div className='grid grid-cols-card w-full gap-x-5'>
					{response &&
						response
							.filter(value => {
								if (searchText === '') {
									return value
								} else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
									return value
								}
							})
							.slice(0, visible)
							.map(coin => <Coin key={coin.id} coin={coin} />)}
				</div>
				<button
					onClick={showMoreCards}
					className='text-white px-4 py-2 border-1 border mx-2 border-white rounded-[15px]'>
					Show more
				</button>
			</div>
		</section>
	)
}

export default Markets
