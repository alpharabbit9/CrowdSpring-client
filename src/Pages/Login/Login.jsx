
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
const Login = () => {

    const {UserLogIn,setUser , createGoogleUser} = useContext(AuthContext);

    const navigate = useNavigate();


    const HandleGoogle = () =>{
        
        createGoogleUser()
        .then(result => {
            // console.log(result.user);
            setUser(result.user)
            navigate("/")
        })
        .catch(error =>{
            console.log('ERROR',error.message)
           
        })
    }

    const HandleLogin = (e) =>{
        e.preventDefault();

        

        
       
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email,password);

        

        UserLogIn(email,password)
        .then(result => {
            // console.log(result.user);
            setUser(result.user);
            navigate("/")

        })
        .catch(error =>{
            console.log('ERROR' , error.message);
           
        })



        
    }
    return (
        <div className='bander min-h-screen p-20'>

            <h2 className='text-3xl md:text-4xl font-bold text-white mt-3 mb-3 text-center'> Welcome Back !</h2>
            <p className='font-light text-center text-white mb-8'>Log in to continue your journey of making a difference</p>

            <div className='flex justify-center items-center'>

                <div className="card bg-transparent text-white w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={HandleLogin} className="card-body">
                        <fieldset className="fieldset text-white">
                            <label className="fieldset-label text-white">Email</label>
                            <input name='email' type="email" className="input text-white w-full bg-transparent border border-white rounded-3xl" placeholder="Email" />
                            <label className="fieldset-label text-white">Password</label>
                            <input name='password' type="password" className="input text-white w-full bg-transparent border border-white rounded-3xl" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <p>New Here ? <Link to={'/register'}>Create Account</Link></p>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                             <button onClick={HandleGoogle} className="btn btn-outline mt-4">Login with Google  <FaGoogle></FaGoogle></button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;