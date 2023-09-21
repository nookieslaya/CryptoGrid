import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'

const CoinDetails = () => {
	const { id } = useParams()

	const { response } = useAxios(`coins/${id}?localization=false&sparkline=false`)
	console.log(response)
	if (!response) {
		return <div>Loading...</div>
	}

	return (
		<div className='container mx-auto lg:py-20 py-2 mt-10 rounded-[15px] lg:bg-white/5 lg:p-10'>
			<div className='flex items-center'>
				<img className='md:w-[100px] w-[60px] lg:mr-8 mr-4' src={response.image.large} alt='' />
				<h4 className='md:text-6xl text-2xl'>{id.toUpperCase()}</h4>
			</div>
			<div className='flex lg:flex-row flex-col  my-8'>
				<div className='flex lg:justify-normal justify-between gap-x-16  mt-8'>
					<div>
						<p className='text-sm  text-gray-500  pb-1'>Market Cap</p>
						{response.market_data.market_cap ? <p>$ {response.market_data.market_cap.usd.toLocaleString()}</p> : null}
					</div>
					<div>
						<p className='text-sm lg:w-[200px] text-gray-500  pb-1'>Volume 24h</p>
						{response.market_data.market_cap ? <p>$ {response.market_data.total_volume.usd.toLocaleString()}</p> : null}
					</div>
				</div>
				<div className='flex lg:justify-normal justify-between gap-x-16  mt-8'>
					<div className='w-[100px]'>
						<p className='text-sm lg:w-[200px] text-gray-500  pb-1'>24h High</p>
						{response.market_data.high_24h ? <p>$ {response.market_data.high_24h.usd.toLocaleString()}</p> : null}
					</div>
					<div className='w-[100px]'>
						<p className='text-sm lg:w-[200px] text-gray-500  pb-1'>24h Low</p>
						{response.market_data.low_24h ? <p>$ {response.market_data.low_24h.usd.toLocaleString()}</p> : null}
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row lg:items-center'>
				<p className='[&>a]:text-blue-500 lg:mr-8' dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
			</div>

			<div className='flex flex-col  gap-6'>
				<div className='stats mt-4'>Market Stats</div>
				<div className='flex lg:flex-row flex-wrap flex-col'>
					<div className='flex py-4 gap-4 lg:justify-normal justify-between gap-x-16  '>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Market Rank</p>
							{response.market_cap_rank}
						</div>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Hashing Algorithm</p>
							{response.hashing_algorithm ? <p>{response.hashing_algorithm}</p> : null}
						</div>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Trust Score</p>
							{response.tickers ? <p>{response.liquidity_score.toFixed(1)}</p> : null}
						</div>
					</div>
					<div className='flex py-4 gap-4 lg:justify-normal justify-between gap-x-16'>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Price Change 24h</p>
							{response.market_data ? <p>{response.market_data.price_change_percentage_24h.toFixed(2)} %</p> : null}
						</div>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Price Change 7d</p>
							{response.market_data ? <p>{response.market_data.price_change_percentage_7d.toFixed(2)} %</p> : null}
						</div>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Price Change 14d</p>
							{response.market_data ? <p>{response.market_data.price_change_percentage_14d.toFixed(2)} %</p> : null}
						</div>
					</div>
					<div className='flex py-4 gap-4 justify-between gap-x-16'>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Price Change 30d</p>
							{response.market_data ? <p>{response.market_data.price_change_percentage_30d.toFixed(2)} %</p> : null}
						</div>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Price Change 60d</p>
							{response.market_data ? <p>{response.market_data.price_change_percentage_60d.toFixed(2)} %</p> : null}
						</div>
						<div>
							<p className='text-sm lg:w-[150px] text-gray-500  pb-1'>Price Change 1y</p>
							{response.market_data ? <p>{response.market_data.price_change_percentage_1y.toFixed(2)} % </p> : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoinDetails
