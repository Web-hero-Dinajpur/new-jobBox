import Lottie from 'lottie-react';
import UserSignInLottiei from '../../assets/lottie/signin.json'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import SocialLogin from './SocialLogin';

const SignIn = () => {

    const { SignInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        SignInUser(email, password)
            .then(result => {
                console.log('sign in', result.user)
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={UserSignInLottiei}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign In</h1>
                        <form onSubmit={handleSignIn} className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign In</button>

                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;