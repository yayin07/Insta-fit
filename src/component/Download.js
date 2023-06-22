import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase.config";
import XLSX from "xlsx";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing"; // import expo-sharin
import * as MediaLibrary from "expo-media-library";
import tw from "twrnc";

const Download = () => {
  const [getRespond, setGetRespond] = useState([]);
  console.log("Respond", getRespond);

  useEffect(() => {
    const respondRef = collection(db, "respond_plans");
    const getRef = query(respondRef);
    const unsubscribe = onSnapshot(getRef, (snapshot) => {
      const fetchRespond = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGetRespond(fetchRespond);
    });

    return () => unsubscribe();
  }, []);

  const exportDataToExcel = async () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(getRespond);
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    const wbout = XLSX.write(wb, { type: "base64", bookType: "txt" });

    const fileName = `${FileSystem.documentDirectory}text.xlsx`;

    await FileSystem.writeAsStringAsync(fileName, wbout, {
      encoding: FileSystem.EncodingType.ASCII,
    });
    ToastAndroid.show("File saved", ToastAndroid.SHORT);

    const isAvailable = await Sharing.isAvailableAsync();

    if (!isAvailable) {
      alert("Sharing is not available on this device");
      return;
    }

    await Sharing.shareAsync(fileName);
  };

  console.log("WS", exportDataToExcel);

  const handleClick = async () => {
    try {
      // Check for Permission (check if permission is already given or not)
      let isPermitedExternalStorage = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      if (!isPermitedExternalStorage) {
        // Ask for permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage permission needed",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission Granted (calling our exportDataToExcel function)
          exportDataToExcel();
          console.log("Permission granted");
        } else {
          // Permission denied
          console.log("Permission denied");
        }
      } else {
        // Already have Permission (calling our exportDataToExcel function)
        exportDataToExcel();
      }
    } catch (e) {
      console.log("Error while checking permission");
      console.log(e);
      return;
    }
  };

  return (
    <TouchableOpacity onPress={handleClick} style={tw`p-1 bg-[#FAA0A0]`}>
      <Text>Download excel</Text>
    </TouchableOpacity>
  );
};

export default Download;
