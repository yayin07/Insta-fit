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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase.config";

const Upload = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [username, setUsername] = useState(user);

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

  const uploadFileToFirebase = async () => {
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

  console.log(saveDetails);
  const postCollectionRef = collection(db, "social");

  const saveDetails = async () => {
    if (!title || !description || !imageUrl) {
      ToastAndroid.show("Required fields cannot be empty", ToastAndroid.SHORT);
    }
    {
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
      style={tw`absolute flex justify-start w-full h-550px bg-white rounded-[10px] `}
    >
      <View style={tw`flex flex-row justify-between items-center`}>
        <Text style={tw`px-5 py-5 font-bold text-[13px]`}>Fill up to post</Text>
        <TouchableOpacity>
          <Text style={tw`px-5 py-5 font-bold text-[15px]`}>X</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={tw`flex gap-3 px-4 py-4 justify-evenly`}>
          <View style={tw` border-[2px] border-black px-2 py-2`}>
            <TextInput
              placeholder="Title"
              style={tw`text-black`}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={tw` border-[2px] border-black px-2 py-2`}>
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

      <View style={tw`px-3 `}>
        <Button title="Pick an image" onPress={pickImage} />
        <View style={tw`flex items-center`}>
          {imageUrl && (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          )}
        </View>
      </View>
      <View
        style={tw`absolute bottom-3 left-0 right-0 flex items-center px-3 `}
      >
        <TouchableOpacity style={tw`bg-blue-500 w-full `} onPress={saveDetails}>
          <Text style={tw`text-center text-[#ffffff] p-2`}>Submit</Text>
        </TouchableOpacity>
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
