import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='p-4 bg-menu-gradient'>
			<Link to='/' className='text-gradient text-xl font-bold container'>
				CryptoGrid
			</Link>
		</footer>
	)
}

export default Footer
