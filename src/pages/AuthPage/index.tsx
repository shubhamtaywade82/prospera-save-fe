import React, { useState } from "react";
import SignUp from "../../components/SignUp"; // Import your SignUp component
import SignIn from "../../components/SignIn"; // Import your SignIn component

const AuthPage = (): JSX.Element => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      {showSignUp ? <SignUp /> : <SignIn />}

      <div>
        {showSignUp ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setShowSignUp(false)}>Sign In</span>
          </p>
        ) : (
          <p>
            Don&rsquo;t have an account?{" "}
            <span onClick={() => setShowSignUp(true)}>Sign Up</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
