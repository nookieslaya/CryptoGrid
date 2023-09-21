import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import { AuthContextProvider } from './context/AuthContext'

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthContextProvider>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/coin/:id' element={<Details />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/signin' element={<SignIn />} />

						<Route path='/account' element={<Account />} />
					</Routes>
					<Footer />
				</AuthContextProvider>
			</BrowserRouter>
		</>
	)
}

export default App
