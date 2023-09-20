import { Route, Routes } from 'react-router-dom';
import Layout from '@/layout/Layout.jsx'
import Index from '@/pages/home/Index.jsx'
import SignIn from '../pages/sign-In/SignIn.jsx';
import User from '../pages/user/User.jsx';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Index />} />
                <Route path='/index' element={<Index />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='/profile' element={<User />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;