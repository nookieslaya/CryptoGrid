import { Link } from 'react-router-dom'

const CoinTranding = ({ coin }) => {
	return (
		<Link to={`/coin/${coin.id}`} className='flex justify-center '>
			<div className='block w-full max-w-[200px]'>
				<div className='bg-card opacity-80 hover:opacity-100 p-4 text-white rounded-[15px]'>
					<div className='flex justify-evenly items-center'>
						<p className='text-2xl'>{coin.score + 1}</p>
						<img className={`w-8 h-8 mr-1`} src={coin.thumb} alt='' />
						<p className='text-xl'>{coin.name.length > 8 ? coin.symbol : coin.name}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CoinTranding
