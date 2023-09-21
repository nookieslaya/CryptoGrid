import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Coin = ({ coin }) => {
	const [savedCoin, setSavedCoin] = useState(false)
	const { user } = UserAuth()

	const coinPath = doc(db, 'users', `${user?.email}`)
	const saveCoin = async () => {
		if (user?.email) {
			setSavedCoin(true)
			await updateDoc(coinPath, {
				watchList: arrayUnion({
					id: coin.id,
					name: coin.name,
					image: coin.image,
					rank: coin.market_cap_rank,
					symbol: coin.symbol,
				}),
			})
		} else {
			alert('Please sign in to save a coin to your watch list')
		}
	}

	return (
		<div className='block mt-4'>
			<div className='bg-[#122656] opacity-80 hover:opacity-100  text-white rounded-[15px]'>
				<div className='p-4'>
					<div className='flex items-center relative'>
						<div className='absolute right-0 flex items-center'>
							{coin.market_cap_rank}
							<span onClick={saveCoin} className='ml-2 cursor-pointer' title='Add to favorite'>
								{savedCoin ? <AiFillStar /> : <AiOutlineStar />}
							</span>
						</div>
						<Link to={`/coin/${coin.id}`}>
							<img className={`w-8 h-8 mr-1`} src={coin.image} alt='' />
							<p className='text-xl font-semibold'>{coin.name.length > 8 ? coin.symbol : coin.name}</p>
						</Link>
					</div>
					<Link to={`/coin/${coin.id}`}>
						<div>
							<p className='text-xl pt-4 '>${coin.current_price}</p>
						</div>
						<div className='flex items-center pt-2'>
							<p
								className={`img-symbol flex justify-start my-2 mr-2  py-1 px-3 rounded-[12px] ${
									coin.price_change_percentage_24h > 0
										? 'text-teal-400 bg-green-gradient'
										: 'text-rose-400 bg-red-gradient '
								}`}>
								{coin.price_change_percentage_24h.toFixed(2)}%
							</p>
							<p className='text-white '>last 24h </p>
						</div>
					</Link>
				</div>
				<div className='my-4'>
					<Sparklines data={coin.sparkline_in_7d.price}>
						<SparklinesLine color='teal' />
					</Sparklines>
				</div>
			</div>
		</div>
	)
}

export default Coin
