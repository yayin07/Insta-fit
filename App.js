import React, { useEffect, useState, lazy, Suspense } from "react";
import { StatusBar, Text, Image } from "react-native";
import AuthContextProvider from "./src/component/AuthContext/AuthContext";
import { BottomTabNavigator } from "./src/navigation/tab-navigator/TabNavigator";

const Navigation = lazy(() => import("./src/navigation/Navigation"));

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true, "none");
  }, []);

  return (
    <AuthContextProvider>
      <Suspense fallback={<Image source={require("./assets/Frame26.png")} />}>
        <Navigation />
      </Suspense>
    </AuthContextProvider>
  );
}
