
import { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    

    if(loading)
    {
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children ;
    }

    return <Navigate  to = {'/login'}></Navigate>
};

export default PrivateRoutes;