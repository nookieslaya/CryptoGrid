import useAxios from '../hooks/useAxios'
import CoinTranding from './CoinTranding'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Trending = () => {
	const { response } = useAxios('search/trending')

	return (
		<div>
			<div className='items-center gap-2  mx-auto container'>
				<h2 className='text-white uppercase py-8 text-4xl sm:text-left text-center'>
					trendings <span className='text-white text-xl'> 24h</span>
				</h2>
				<Swiper
					className='grid-cols-card justify-center items-center auto w-full p-4 bg-white/5 rounded-[15px]'
					spaceBetween={50}
					slidesPerView={1}
					breakpoints={{
						500: { slidesPerView: 2 },
						900: { slidesPerView: 3 },
						1200: { slidesPerView: 5 },
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
						loop: true,
					}}
					modules={[Autoplay]}>
					{response &&
						response.coins.map(coin => (
							<SwiperSlide key={coin.item.coin_id}>
								<CoinTranding key={coin.item.coin_id} coin={coin.item} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	)
}

export default Trending
