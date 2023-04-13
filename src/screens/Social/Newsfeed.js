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

import { getAuth } from "firebase/auth";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import Post from "../../component/Post";

import { Feather } from "@expo/vector-icons";
import Upload from "../../component/Upload";

const Newsfeed = () => {
  const [post, setPost] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <View style={tw`h-full bg-[#ffc0cb] p-5`}>
      {/* Logo */}
      <View style={tw`flex flex-row justify-start items-center px-3`}>
        <View>
          <Image source={require("../../../assets/Image2.png")} />
        </View>
        <View style={tw`px-2`}>
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-black text-[22px] font-extrabold`}>INSTA</Text>
            <Text style={tw`text-[#ffffff] text-[22px] font-extrabold`}>
              FIT
            </Text>
          </View>
          <Text style={tw`text-black text-[13px]`}>BE MORE FIT</Text>
        </View>
      </View>
      {/*  */}
      <View style={tw`flex items-center gap-3 px-5 py-3 relative h-full`}>
        <View style={tw`border-t-[2px] w-full flex items-center py-3`}>
          <Text style={tw`text-[25px] font-bold`}>Newsfeed</Text>
        </View>
        {/*  */}
        <ScrollView style={tw`h-full gap-5 `}>
          {post.map(
            ({
              post_name,
              post_title,
              post_date,
              image_url,
              post_description,
              id,
            }) => {
              return (
                <View
                  key={id}
                  style={tw`bg-[#ffffff] w-[300px] h-[300px] rounded-lg px-5 py-1`}
                >
                  <View style={tw`px-1`}>
                    <Text style={tw`text-[20px] py-1 font-bold`}>
                      {post_title}
                    </Text>
                    {/* <Text style={tw`text-[20px] py-1 font-bold`}>
                      {post_date}
                    </Text> */}
                  </View>
                  {/*  */}
                  <View>
                    <View style={tw`flex items-center`}>
                      <Image
                        source={{
                          uri:
                            image_url === "null"
                              ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1680882744~exp=1680883344~hmac=2ed4ad6558839e918a981b5e7fe157d7924703160281e5024981f21cab21b535"
                              : image_url,
                        }}
                        style={tw`w-full h-140px`}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                  <View style={tw``}>
                    <Text>{post_description}</Text>
                  </View>
                </View>
              );
            }
          )}
        </ScrollView>
      </View>

      <Modal
        style={tw`flex items-center `}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Upload setModalVisible={setModalVisible} modalVisible={modalVisible} />
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={tw`absolute right-3 bottom-5 flex items-center`}
      >
        <Image source={require("../../../assets/Group2.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Newsfeed;
