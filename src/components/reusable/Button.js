import { ToastContainer } from 'react-toastify';
import loadersvg from '../../../public/images/loader.svg'

const Button = ({ title, loading = false, disabled }) => {
	return (
		<>
			<button type='submit' className='submit-btn' disabled={disabled}>
				{
					!loading ? title : <img src={loadersvg.src} className='spinner' alt='Loading' />
				}
			</button>
			<ToastContainer />
		</>
	)

}

export default Button;
