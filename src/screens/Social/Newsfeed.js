import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";

// import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  onSnapshot,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../Firebase.config";
// import Post from "../../component/Post";

import { Feather } from "@expo/vector-icons";
import Upload from "../../component/Upload";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../Firebase.config";
import { useAuthContext } from "../../component/AuthContext/AuthContext";
import moment from "moment";

const Newsfeed = () => {
  const [userInfo, setUserInfo] = useState([]);
  const navigation = useNavigation();
  const [post, setPost] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { getUser } = useAuthContext();
  const [getUserInfo, setGetUserInfo] = useState([]);
  const userInfoCollection = collection(db, "users");
  // const [getUserPost, setGetUserInfo] = useState([]);

  const handleClose = () => {
    navigation.navigate("Fitness");
  };

  //
  useEffect(() => {
    const postRef = collection(db, "social");
    const getRef = query(postRef);
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchPost = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPost(fetchPost);
    });
  }, []);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userInfoCollection, "email");
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setGetUserInfo(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getUserList();
  }, []);

  useEffect(() => {
    const postRef = collection(db, "users");
    const getRef = query(postRef);
    const unsubcribe = onSnapshot(getRef, (snaphot) => {
      const fetchPost = snaphot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserInfo(fetchPost);
    });
  }, []);

  return (
    <View style={tw`h-full bg-[#ffc0cb]`}>
      {/* Logo */}
      <View style={tw`flex flex-row justify-start items-center p-5`}>
        {/* <TouchableOpacity onPress={handleClose}>
          <Image source={require("../../../assets/Vector11.png")} />
        </TouchableOpacity> */}
        <View style={tw`flex flex-row`}>
          <View>
            <Image
              source={require("../../../assets/Image2.png")}
              style={tw`w-40px h-40px`}
            />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-black text-[18px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#ffffff] text-[18px] font-extrabold`}>
                FIT
              </Text>
            </View>
            <Text style={tw`text-black text-[10px]`}>BE MORE FIT</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {/*  */}
        <View
          style={tw`flex items-center py-4 relative h-full w-full bg-[#ffffff] shadow-xl gap-5 shadow-[#F9F9F9]`}
        >
          {post.map((data) => {
            return (
              <View
                key={data.id}
                style={tw`bg-[#ffffff] w-[300px] h-[300px] flex justify-between  shadow-lg shadow-xl  pt-10 rounded-10px p-3`}
              >
                <View style={tw`px-1`}>
                  <View style={tw`flex flex-row items-center`}>
                    <View style={tw`px-2`}>
                      {getUserInfo.length > 0 &&
                        getUserInfo.map((getGenderDetails, id) => {
                          if (getGenderDetails.email === data.post_email) {
                            return (
                              <View
                                key={getGenderDetails.id}
                                style={tw`flex flex-row justify-center bg-white items-center rounded-full w-5 h-5 `}
                              >
                                {getGenderDetails.user_gender === "Male" ? (
                                  <Image
                                    source={require("../../../assets/Frame27.png")}
                                    style={tw`h-10 w-10`}
                                  />
                                ) : (
                                  <Image
                                    source={require("../../../assets/Frame28.png")}
                                    style={tw`h-10 w-10`}
                                  />
                                )}
                              </View>
                            );
                          }
                        })}
                    </View>
                    <View style={tw`flex items-start justify-center`}>
                      <Text style={tw`text-[15px] px-2 font-bold`}>
                        {data.post_name}
                      </Text>
                      <Text style={tw`text-11px px-2`}>{data.post_date}</Text>
                    </View>
                  </View>

                  <View style={tw`py-3`}>
                    <Text>{data.post_description}</Text>
                  </View>
                </View>
                {/*  */}
                <View style={tw``}>
                  <View style={tw`flex items-center`}>
                    <Image
                      source={{
                        uri:
                          data.image_url === "null"
                            ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1680882744~exp=1680883344~hmac=2ed4ad6558839e918a981b5e7fe157d7924703160281e5024981f21cab21b535"
                            : data.image_url,
                      }}
                      style={tw`w-full h-190px`}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Modal
        style={tw`flex items-center `}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Upload setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={tw`absolute right-3 bottom-5 flex items-center`}
      >
        <Image source={require("../../../assets/Group2.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Newsfeed;
