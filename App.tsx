import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true, "none");
  }, []);

  return <Navigation></Navigation>;
}
