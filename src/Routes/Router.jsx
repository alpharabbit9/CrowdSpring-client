
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../Pages/Home/Home';
import AddNewCampaign from '../Pages/Add New Campaign/AddNewCampaign';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AllCampaign from '../Pages/All Campaign/AllCampaign';
import ErrorPage from '../Pages/Error Page/ErrorPage';
import CampaignDetails from '../Pages/All Campaign/CamapaignDetails/CampaignDetails';
import MyCampaign from '../Pages/MyCampaign/MyCampaign';
import PrivateRoutes from './PrivateRoute';
import MyDonation from '../Pages/MyDonation/MyDonation';

const Router = createBrowserRouter([
    {

        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: 'addNew',
                element: <PrivateRoutes>
                    <AddNewCampaign></AddNewCampaign>
                </PrivateRoutes>
            },
            {
                path: 'allCampaign',
                element: <AllCampaign></AllCampaign>,
                loader : () => fetch('http://localhost:5000/campaignCount')
            },
            {
                path: 'allCampaign/:id',
                element: <PrivateRoutes>

                    <CampaignDetails></CampaignDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://crowd-funding-server-beryl.vercel.app/campaigns/${params.id}`)
            },
            {
                path: 'myCampaign',
                element: <PrivateRoutes>
                    <MyCampaign></MyCampaign>
                </PrivateRoutes>
            },
            {
                path: 'myDonation',
                element: <PrivateRoutes>
                    <MyDonation></MyDonation>
                </PrivateRoutes>
            }
        ]


    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Router;