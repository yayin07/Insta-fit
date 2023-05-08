import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { storage } from "../../Firebase.config";
import { saveItem } from "../utils/FirebaseFunction";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../Firebase.config";
import moment from "moment";
import { useAuthContext } from "./AuthContext/AuthContext";

const Upload = ({ setModalVisible, modalVisible }) => {
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [username, setUsername] = useState(user);
  const [getUserInfo, setGetUserInfo] = useState([]);

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
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL); // Set the imageURL state to the downloadURL
          setImageRef(fileName); // Set the imageRef state to the correct path
          setLoading(false);
        });
      }
    );
  };

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
    setLoading(true);
  };

  const postCollectionRef = collection(db, "social"); // Change from query to collection

  const saveDetails = async () => {
    if (!description || !imageUrl) {
      ToastAndroid.show("Required fields cannot be empty", ToastAndroid.SHORT);
    } else {
      const selectedUser = getUserInfo
        ? getUserInfo.find((info) => info.email === user?.email)
        : undefined;
      await addDoc(postCollectionRef, {
        post_description: description,
        post_date: moment(Date.now()).format("MMMM D, YYYY hh:mm a"),
        post_email: user?.email,
        post_name: selectedUser
          ? selectedUser?.first_name + " " + selectedUser?.last_name
          : "",
        image_ref: imageRef,
        image_url: imageUrl,
      });
      ToastAndroid.show("Post saved successfully!", ToastAndroid.SHORT);
      setModalVisible(false);
    }
  };

  useEffect(() => {
    const postRef = collection(db, "users");
    const getRef = query(postRef);
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchPost = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGetUserInfo(fetchPost);
    });
  }, []);

  return (
    <View
      style={tw`flex justify-start w-full h-full opacity-100 bg-[#ffffff] rounded-[10px] `}
    >
      {/*  */}
      <View style={tw`flex flex-row justify-between items-center px-1`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
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
        <View style={tw`flex gap-3 px-4 justify-evenly`}>
          <View>
            <View style={tw`flex flex-row px-3`}>
              <View style={tw``}>
                {getUserInfo.length > 0 &&
                  getUserInfo.map((getGenderDetails, data) => {
                    if (getGenderDetails.email === user.email) {
                      return (
                        <View
                          key={data}
                          style={tw`flex flex-row justify-center bg-white items-center rounded-full w-5 h-5 `}
                        >
                          {getGenderDetails.user_gender === "Male" ? (
                            <Image
                              source={require("../../assets/Frame27.png")}
                              style={tw`h-10 w-10`}
                            />
                          ) : (
                            <Image
                              source={require("../../assets/Frame28.png")}
                              style={tw`h-10 w-10`}
                            />
                          )}
                        </View>
                      );
                    }
                  })}
              </View>
              <View>
                {getUserInfo.length > 0 &&
                  getUserInfo.map((getUserFirstName, data) => {
                    if (getUserFirstName.email === user.email) {
                      return (
                        <View key={data}>
                          <Text style={tw`px-5 font-bold text-[18px]`}>
                            {getUserFirstName.hasOwnProperty("first_name")
                              ? getUserFirstName.first_name
                              : "No user info"}
                          </Text>
                        </View>
                      );
                    }
                  })}
              </View>
            </View>
          </View>
          <View style={tw`border-b-[1px] border-[#A0ABBB] px-2 `}>
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

      <View style={tw`px-3 py-3  flex items-center `}>
        {loading ? (
          <Text>Upload in Progress</Text>
        ) : (
          <TouchableOpacity
            onPress={pickImage}
            style={tw`border-[2px] border-[#A0ABBB] w-full flex items-center p-3 rounded-[5px]`}
          >
            <View style={tw`flex flex-row items-center  px-2`}>
              <Image source={require("../../assets/Icon6.png")} />
              <Text style={tw`text-[#A0ABBB]`}>Add Photo</Text>
            </View>
          </TouchableOpacity>
        )}
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
