import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../Firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Video, AVPlaybackStatus } from "expo-av";
const PlanTimer = ({ navigation }: any) => {
  const [trainings, setTrainings] = useState([]);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  useEffect(() => {
    const trainingRef = collection(db, "trainings");
    const getRef = query(trainingRef);
    const unsubcribe = onSnapshot(getRef, (snapshot) => {
      const fetchPlan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrainings(fetchPlan);
    });
  }, []);
  return (
    <View>
      {trainings.map((url) => (
        <View></View>
      ))}
    </View>
  );
};

export default PlanTimer;
