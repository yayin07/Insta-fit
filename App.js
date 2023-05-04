import React, { useEffect, useState, lazy, Suspense } from "react";
import { StatusBar, Text } from "react-native";
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
      <Suspense fallback={<Text>Loading...</Text>}>
        <Navigation />
      </Suspense>
    </AuthContextProvider>
  );
}
