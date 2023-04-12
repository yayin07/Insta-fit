import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
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
  const [isOpen, setIsOpen] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
    <View style={tw`flex-1 bg-[#ffc0cb] p-3`}>
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
      <View style={tw`flex items-center px-5 py-3 relative h-full`}>
        <View style={tw`border-t-[2px] w-full flex items-center py-3`}>
          <Text style={tw`text-[25px] font-bold`}>Newsfeed</Text>
        </View>
        {/*  */}
        <View style={tw`bg-[#ffffff] w-full h-[300px] rounded-lg px-5 py-1`}>
          {post.map(
            ({ post_name, post_title, image_url, post_description, id }) => {
              return (
                <View key={id}>
                  <View style={tw`px-1`}>
                    <Text style={tw`text-[20px] py-1`}>{post_name}</Text>
                  </View>
                  {/*  */}
                  <View>
                    <View>
                      <Image
                        source={{
                          uri:
                            image_url === "null"
                              ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1680882744~exp=1680883344~hmac=2ed4ad6558839e918a981b5e7fe157d7924703160281e5024981f21cab21b535"
                              : image_url,
                        }}
                        style={tw`w-full h-[240px]`}
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
        </View>
        {/* <Upload /> */}
      </View>

      {/* <View style={tw`w-full absolute bottom-3 ml-3`}>
        <TouchableOpacity style={tw`bg-white rounded-[20px] p-2 `}>
          <Text style={tw`text-center font-bold text-[15px] `}>Post</Text>
        </TouchableOpacity>
      </View> */}

      <View style={tw`flex items-center`}>
        <TouchableOpacity
          style={tw`absolute right-3 bottom-17 flex items-center`}
        >
          <Image source={require("../../../assets/Group2.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Newsfeed;
