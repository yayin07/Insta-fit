import React, { useState, useEffect, Fragment } from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Linking, Button } from "react-native";

export interface LottieContainerProps {
  name: string;
  source: string;
  author: string;
  path: string;
}

export default function LottieContainer({
  name,
  source,
  author,
  path,
}: LottieContainerProps): JSX.Element {
  const [show, setShow] = useState<boolean>(true);
  return (
    <Fragment>
      <View>
        {show && (
          <LottieView
            source={path}
            autoPlay
            loop={false}
            onAnimationFinish={() => setTimeout(() => setShow(false), 1000)}
            resizeMode="contain"
          />
        )}
      </View>
    </Fragment>
  );
}
