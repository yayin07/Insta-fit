import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
import { storage } from "../../Firebase.config";
import { getStorage } from "firebase/storage";

export default function UploadComponent() {
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need media library permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      try {
        const fileContent = await FileSystem.readAsStringAsync(result.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setImageUri(fileContent);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }

    // const uri = (result as ImagePicker.ImagePickerSuccessResult).uri;
  };

  const uploadImage = async () => {
    if (!imageUri) {
      alert("Please pick an image first");
      return;
    }
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`images/${Date.now()}.jpg`);

    return new Promise(async (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = async () => {
        if (xhr.status === 200) {
          try {
            const downloadURL = await imageRef.getDownloadURL();
            console.log("Image uploaded successfully:", downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error("Error getting download URL:", error);
            reject(error);
          }
        } else {
          console.error("Error uploading image:", xhr.status);
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      };
      xhr.onerror = (error) => {
        console.error("Error uploading image:", error);
        reject(error);
      };
      xhr.open("PUT", imageRef._delegate._location);
      xhr.setRequestHeader("Content-Type", "image/jpeg");
      xhr.setRequestHeader("x-goog-upload-protocol", "raw");
      xhr.setRequestHeader("x-goog-upload-content-type", "image/jpeg");
      xhr.send(imageUri);
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      <TouchableOpacity onPress={uploadImage}>
        <Text>Upload</Text>
      </TouchableOpacity>
    </View>
  );
}
