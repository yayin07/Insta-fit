import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  useEffect(() => {
    StatusBar.setHidden(true, "none");
  }, []);

  return <Navigation></Navigation>;
}
