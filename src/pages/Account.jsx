import SavedCoin from '../components/SavedCoin'

import { UserAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Account = () => {
	const { user, logout } = UserAuth()
	const navigate = useNavigate()

	const handleSignOut = async () => {
		try {
			await logout()
			navigate('/')
		} catch (e) {
			console.log(e.message)
		}
	}
	if (user) {
		return (
			<div className='min-h-[90vh] max-w-[1140px] mx-auto sm:p-8 p-4 bg-gray-200'>
				<div className='bg-card flex justify-between items-center my-12 py-8 border border-secondary rounded-2xl shadow-xl  px-2 max-w-[1140px] w-full mx-auto'>
					<div>
						<h1 className='text-2xl font-bold'>Account</h1>
						<div>
							<p> Welcome {user?.email}</p>
						</div>
					</div>
					<div>
						<button onClick={handleSignOut} className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>
							Sign Out
						</button>
					</div>
				</div>
				<div className='bg-card flex justfiy-between items-center my-12 py-8 border border-secondary rounded-2xl shadow-xl  px-2 max-w-[1140px] w-full mx-auto'>
					<div className='w-full min-h-[300px]'>
						<h1 className='text-2xl font-bold py-4'>Watch List</h1>
						<SavedCoin />
					</div>
				</div>
			</div>
		)
	} else {
		return <Navigate to='/signin' />
	}
}

export default Account
