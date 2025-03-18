import { Link } from 'react-router-dom';
import img2 from '../../assets/Logo/404.gif'

const ErrorPage = () => {
    return (
        <div className='p-16 h-screen' >
            <Link to={'/'}><button className='btn btn-outline'>Back to Home</button></Link>
            <div className='flex justify-center'>
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;