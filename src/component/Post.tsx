import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../Firebase.config";

const Post = ({ visible }: any) => {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const uploadImage = ({ e }: any) => {
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        ToastAndroid.show("Please try again", ToastAndroid.SHORT);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          ToastAndroid.show("Uploaded Successfully", ToastAndroid.SHORT);
        });
      }
    );
  };

  const saveDetails = (e) => {
    const imageFile = e.target.files[0];
    try {
      if (!title || !username || !image || !description) {
        ToastAndroid.show("Required fields can't be empty", ToastAndroid.SHORT);
      } else {
        const data = {
          post_title: title,
          post_name: username,
          image_ref: imageFile,
          image_url: image,
          post_description: description,
          post_date: `$(Date.now())`,
        };
      }
    } catch (error) {}
  };

  if (!visible) return null;
  return (
    <View style={tw`px-4 py-1 flex-1 `}>
      <Text>Post11111111111111111111</Text>
    </View>
  );
};

export default Post;
