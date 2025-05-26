import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';


const SocialLogin = () => {

    const {GoogleLogIn} = useContext(AuthContext);


    const hangleGoogleSignIn = ()=>{
        GoogleLogIn()
        .then(resutl =>{
            console.log(resutl.user)
        })
        .catch(error=>{
            console.log(error.messege)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={hangleGoogleSignIn} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;