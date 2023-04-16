import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { getAuth } from "firebase/auth";
import tw from "twrnc";

import { storage } from "../../Firebase.config";
import { saveItem } from "../utils/FirebaseFunction";
import { addDoc, collection, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase.config";

const Upload = ({ setModalVisible, modalVisible }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [username, setUsername] = useState(user);

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

  // const pickImage = async () => {
  //   let permissionResult =
  //     await ImagePicker.requestMediaLibraryPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     alert("Permission to access the media library is required.");
  //     return;
  //   }

  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   if (pickerResult.canceled === true) {
  //     return;
  //   }

  //   uploadFileToFirebase(pickerResult.uri);
  //   setImageUrl(pickerResult.uri);
  // };

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

    // Access the first asset in the assets array and get its URI
    let selectedAssetUri = pickerResult.assets[0].uri;

    uploadFileToFirebase(selectedAssetUri);
    setImageUrl(selectedAssetUri);
  };

  console.log(saveDetails);
  const postCollectionRef = query(db, "social");

  const saveDetails = async () => {
    if (!title || !description || !imageUrl) {
      ToastAndroid.show("Required fields cannot be empty", ToastAndroid.SHORT);
    } else {
      await addDoc(postCollectionRef, {
        id: `${Date.now()}`,
        post_title: title,
        post_description: description,
        post_date: `${Date.now()}`,
        post_name: username,
        image_ref: imageRef,
        image_url: imageUrl,
      });
    }
  };

  return (
    <View
      style={tw`flex justify-start w-full h-full opacity-100 bg-[#ffffff] rounded-[10px] `}
    >
      {/*  */}
      <View style={tw`flex flex-row justify-between items-center px-1`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={tw`px-5 py-5 font-bold text-[20px]`}>X</Text>
          </TouchableOpacity>
          <Text style={tw`font-bold text-[18px]`}>Create a post</Text>
        </View>

        <View style={tw`flex items-center px-3 `}>
          <TouchableOpacity
            style={tw`bg-[#FAA0A0] w-full rounded-[10px] `}
            onPress={saveDetails}
          >
            <Text style={tw`text-center text-[#ffffff] p-2`}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`flex justify-center`}>
        <View style={tw`flex gap-3 px-4 py-4 justify-evenly`}>
          <View style={tw` border-b-[2px] border-black px-2 py-2`}>
            <TextInput
              placeholder="Title"
              style={tw`text-black`}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={tw` border-b-[2px] border-black px-2 py-2`}>
            <TextInput
              placeholder="Description"
              numberOfLines={4}
              value={description}
              style={tw`text-black`}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
        </View>
      </View>

      <View style={tw`px-3 flex items-center `}>
        <Button title="Pick an image" onPress={pickImage} />
        <View style={tw`flex items-center`}>
          {imageUrl && (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          )}
        </View>
      </View>
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
    resizeMode: "cover",
    marginTop: 20,
  },
});

export default Upload;
