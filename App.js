import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/navigation/Navigation";
import AuthContextProvider from "./src/component/AuthContext/AuthContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true, "none");
  }, []);

  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
