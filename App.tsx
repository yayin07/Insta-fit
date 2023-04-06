import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/navigation/Navigation";
import SplashScreen from "./src/component/SplashScreen";

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true, "none");
  }, []);

  return isLoading ? (
    <SplashScreen setIsLoading={setIsLoading} />
  ) : (
    <Navigation></Navigation>
  );
}
