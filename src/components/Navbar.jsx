import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const { user, logout } = UserAuth()
	const navigate = useNavigate()

	const handleNav = () => {
		setNav(!nav)
	}

	const handleSignOut = async () => {
		try {
			await logout()
			navigate('/')
		} catch (e) {
			console.log(e.message)
		}
	}

	return (
		<header className='p-4 bg-menu-gradient flex md:text-[16px] text-[10px]'>
			<Link to='/' className='text-gradient text-xl font-bold container'>
				CryptoGrid
			</Link>
			{user?.email ? (
				<div className='flex w-full justify-end'>
					<Link className='text-white px-4 py-2 border-1 border mx-2 border-white rounded-[15px]' to='/account'>
						Account
					</Link>
					<button
						className='text-white px-4 py-2 border-1 border mx-2 border-white rounded-[15px]'
						onClick={handleSignOut}>
						Sign out
					</button>
				</div>
			) : (
				<div className='flex w-full justify-end '>
					<Link className='text-white px-4 py-2 border-1 border mx-2 border-white rounded-[15px]' to='/signin'>
						Sign in
					</Link>
					<Link className='text-white px-4 py-2 border-1 border mx-2 border-white rounded-[15px]' to='/signup'>
						Sign up
					</Link>
				</div>
			)}
		</header>
	)
}

export default Navbar
