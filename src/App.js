import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Main from "./component";

import SignUp from "./component/Sign Up";
import ForgetPassword from "./component/forgetpas";
import ResetPassword from "./component/resetpass";
import EmailVerification from "./component/Email Verification";
import {Route, Routes} from "react-router-dom";
import Login from "./component/login";
import Err404 from "./component/404/404";
import Qs from "./component/qs/qs";

function App() {

    return (<>
            <Header/>

            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/login/forgetPassword' element={<ForgetPassword/>}/>
                <Route path='/login/forgetPassword/ResetPassword' element={<ResetPassword/>}/>
                <Route path='/EmailVerification' element={<EmailVerification/>}/>
                <Route path='/pages/qs' element={<Qs/>}/>
                <Route path='/*' element={<Err404/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
