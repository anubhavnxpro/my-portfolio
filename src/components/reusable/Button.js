import { ToastContainer } from 'react-toastify';
import loadersvg from '../../../public/images/loader.svg'
import Image from 'next/image';

const Button = ({ title, loading = false, disabled }) => {
	return (
		<>
			<button type='submit' className='submit-btn' disabled={disabled}>
				{
					!loading ? title : <Image width={13} height={14} layout='responsive' src={loadersvg.src} className='spinner' alt='Loading' />
				}
			</button>
			<ToastContainer />
		</>
	)

}

export default Button;
