import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    const [user, setUser] = useState(null);

    const GoogleProvider  = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch((error) => {
            console.log('ERROR', error);
            setUser(null);
        })
 
    }


    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log('ERROR', error);
            setUser(null);
        })
    }




    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out done'); 
            setUser(null);
        })
        .catch((error) => {
            console.log('ERROR', error);
        })
    }

    return (
        <div>

            

            {
                user ? 
                <button style={{'marginLeft': '30px'}} onClick={handleSignOut}>Sign Out</button>
                : 
                <>

                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleGithubSignIn} style={{'marginLeft': '30px'}}>Login with Github</button>

                </>
            }

            {
                user && <div>
                    <h4>Name: {user.displayName}</h4>
                    <p>E-mail: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;