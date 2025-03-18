import { FaGoogle } from 'react-icons/fa6';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser, setUser, createGoogleUser ,updateUserProfile} = useContext(AuthContext);
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

    const HandleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target ;
        const name = form.name.value;
        const photo= form.photo.value;
        const email = form.email.value ;
        const password = form.password.value ;

        console.log(name,photo,email,password)

        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
                updateUserProfile({displayName : name , photoURL : photo})
                .then(() =>{
                    navigate('/');
                })
                .catch(error =>{
                    console.log(error.message)
                })
                
            })
            .catch(Error => {
                console.log("ERROR", Error.message);
               
            })
    }
    return (
        <div className='bander min-h-screen p-20'>

            <h2 className='text-3xl md:text-4xl font-bold text-white mt-3 mb-3 text-center'> Join Us & Make an Impact !</h2>
            <p className='font-light text-center text-white mb-8'>Create an account to start funding and launching campaigns that change lives</p>

            <div className='flex justify-center items-center'>

                <div className="card bg-transparent text-white w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={HandleSubmit} className="card-body">
                        <fieldset className="fieldset text-white">
                            <label className="fieldset-label text-white">Name</label>
                            <input name='name' type="text" className="input text-white w-full bg-transparent border border-white rounded-3xl" placeholder="Name" />
                            <label className="fieldset-label text-white">Photo URL</label>
                            <input name='photo' type="text" className="input text-white w-full bg-transparent border border-white rounded-3xl" placeholder="photo" />
                            <label className="fieldset-label text-white">Email</label>
                            <input name='email' type="email" className="input text-white w-full bg-transparent border border-white rounded-3xl" placeholder="Email" />
                            <label className="fieldset-label text-white">Password</label>
                            <input name='password' type="password" className="input text-white w-full bg-transparent border border-white rounded-3xl" placeholder="Password" />
                            
                            <div>
                                <p>Already have an account ? <Link to={'/login'}>Sign in</Link></p>
                            </div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                            <button  onClick={HandleGoogle} className="btn btn-outline mt-4">Login with Google  <FaGoogle></FaGoogle></button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;