import React, { createContext, useContext } from "react";
import { db } from "../../../Firebase.config";
import { collection, addDoc } from "firebase/firestore";

const AuthContext = createContext();

export default AuthContextProvider = ({ children }) => {
  const [userAccInfo, setUserAccInfo] = React.useState();
  const [userAboutInfo, setUserAboutInfo] = React.useState();

  const [userGoal, setUserGoal] = React.useState();
  const [userWorkoutTime, setUserWorkoutTime] = React.useState([]);
  const [getUser, setGetUser] = React.useState({});
  const userCollectionRef = collection(db, "users");

  const handleCreateUser = async () => {
    // TODO: use for creation of user
    await addDoc(userCollectionRef, {
      ...userAccInfo,
      ...userAboutInfo,
      user_goal: userGoal,
      user_workout_time: userWorkoutTime,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        setUserAccInfo,
        setUserAboutInfo,
        setUserGoal,
        handleCreateUser,
        setUserWorkoutTime,
        setGetUser,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
