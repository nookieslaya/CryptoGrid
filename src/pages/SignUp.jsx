import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'

const SingUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const { signUp } = UserAuth()

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')
		try {
			await signUp(email, password)
			navigate('/account')
		} catch (e) {
			setError(e.message)
			console.log(e.message)
		}
	}
	return (
		<div className='min-h-[90vh] bg-gray-200 '>
			<div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
				<h1 className='text-2xl font-bold'>Sign Up</h1>
				{error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
				<form className='' onSubmit={handleSubmit}>
					<div className='my-4'>
						<label>Email</label>
						<div className='my-2 w-full relative rounded-2xl shadow-xl'>
							<input
								type='email'
								className='w-full p-2  border border-input rounded-2xl'
								onChange={e => setEmail(e.target.value)}
							/>
							<AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
						</div>
					</div>
					<div className='my-4'>
						<label>Password</label>
						<div className='my-2 w-full relative rounded-2xl shadow-xl'>
							<input
								type='password'
								className='w-full p-2  border border-input rounded-2xl'
								onChange={e => setPassword(e.target.value)}
							/>
							<AiFillLock className='absolute right-2 top-3 text-gray-400' />
						</div>
						<button className='w-full bg-menu-gradient text-white my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
							Sing Up
						</button>
					</div>
				</form>
				<p className='my-4'>
					Already have an have an Account?{' '}
					<Link className='underline' to='/signin'>
						Sing in
					</Link>
				</p>
			</div>
		</div>
	)
}

export default SingUp
