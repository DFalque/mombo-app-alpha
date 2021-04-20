import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userProfile,
        setUserProfile,
        isFirstLaunch,
        setIsFirstLaunch
        
      }}>
      {children}
    </AuthContext.Provider>
  );
};
