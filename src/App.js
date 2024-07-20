import React, { useState } from 'react';
import './component/loginsignup.css';
import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  const [isLogin, setIsLogin] = useState(true);

   const handleLoginSuccess = (data) => {
     
     console.log('Login data:', data);
   };

   const handleSignupSuccess = (data) => {
    
     console.log('Signup data:', data);
   };

   return (
     <div>
       {isLogin ? (
         <Login onLoginSuccess={handleLoginSuccess} />
       ) : (
         <Signup onSignupSuccess={handleSignupSuccess} />
       )}
       <button onClick={() => setIsLogin(!isLogin)}>
         {isLogin ? 'Switch to Signup' : 'Switch to Login'}
       </button>
     </div>
   );
 };

 export default App;
