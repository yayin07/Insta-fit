import React, { useState } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import tw from "twrnc";

import { storage } from "../../Firebase.config";

const Upload = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const pickImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access the media library is required.");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }

    uploadFileToFirebase(pickerResult.uri);
    setImageUrl(pickerResult.uri);
  };

  const uploadFileToFirebase = async (uri) => {
    const fileExtension = uri.split(".").pop();
    const fileName = `${Date.now()}.${fileExtension}`;
    const storageRef = ref(storage, `images/${fileName}`); // Customize your path and filename

    const response = await fetch(uri);
    const blob = await response.blob();

    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can track the progress here (optional)
      },
      (error) => {
        console.error("Error uploading file:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrl("");
        });
      }
    );
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      <Button title="Pick an image" onPress={pickImage} />
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
});

export default Upload;
