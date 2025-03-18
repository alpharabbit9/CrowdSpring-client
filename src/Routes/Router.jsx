
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

const Router = createBrowserRouter([
    {
        
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
                ,
                {
                    path:'addNew',
                    element:<AddNewCampaign></AddNewCampaign>
                },
                {
                    path:'allCampaign',
                    element:<AllCampaign></AllCampaign>
                },
                {
                    path:'allCampaign/:id',
                    element:<CampaignDetails></CampaignDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
                },
                {
                    path:'myCampaign',
                    element:<MyCampaign></MyCampaign>
                }
            ]

        
    },
    {
        path:'login',
        element:<Login></Login>
    },
    {
        path:'register',
        element:<Register></Register>
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default Router;