import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { auth } from "../../../Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../component/AuthContext/AuthContext";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [validationPass, setValidationPass] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const { setGetUser } = useAuthContext();

  const handleRegister = () => {
    navigation.navigate("Create", {});
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setGetUser(user);
      if (user) {
        navigation.navigate("BottomTab");
      }
    });
    return () => unsubscribe();
  }, []);

  // const handleSignin = () => {
  //   navigation.navigate("Fitness");
  // };

  const handleSignin = () => {
    if (!email || !password) {
      ToastAndroid.show(
        "Please enter your email and password",
        ToastAndroid.SHORT
      );
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("BottomTab");
        ToastAndroid.show("Login successful", ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.error(error);
        ToastAndroid.show(
          "Error signing in. Please try again.",
          ToastAndroid.SHORT
        );
      });
  };

  const handleForgot = () => {
    navigation.navigate("ForgotPassword");
  };

  const validateInput = () => {
    // Email validation pattern
    const validationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email === "") {
      setValidationError("Input is required.");
    } else if (!email.match(validationPattern)) {
      setValidationError("Invalid email address.");
    } else {
      setValidationError("");
    }
  };

  const validatePass = () => {
    if (password === "") {
      setValidationPass("Input is required.");
    } else {
      setValidationPass("");
    }
  };

  return (
    <KeyboardAvoidingView style={tw`flex-1 bg-black py-1`}>
      {/* Background Image */}
      <View style={tw`flex items-center absolute -bottom-3 right-0 left-0 `}>
        <Image
          source={require("../../../assets/unsplash.png")}
          alt="/"
          style={tw`h-[850px] opacity-30`}
        />
      </View>
      <View style={tw`flex  `}>
        {/* Logo */}
        <View style={tw`flex flex-row justify-center items-center py-10 px-3`}>
          <View>
            <Image source={require("../../../assets/Image1.png")} />
          </View>
          <View style={tw`px-2`}>
            <View style={tw`flex flex-row`}>
              <Text style={tw`text-[#FFFFFF] text-[28px] font-extrabold`}>
                INSTA
              </Text>
              <Text style={tw`text-[#FF0000] text-[28px] font-extrabold`}>
                FIT
              </Text>
            </View>

            <Text style={tw`text-[#FFFFFF] text-[16px]`}>BE MORE FIT</Text>
          </View>
        </View>
        <View style={tw`px-3 flex `}>
          <View style={tw`py-1 px-1`}>
            <Text style={tw`text-[#FFFFFF] text-[28px] font-extrabold px-3`}>
              SIGN IN
            </Text>
          </View>
          {/* Inputs */}
          <View style={tw`p-4 `}>
            {/* Email Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Email</Text>
              <TextInput
                style={tw`text-[#ffffff]`}
                keyboardType="email-address"
                onChangeText={(text) => {
                  setEmail(text);
                  validateInput();
                }}
              />
              {validationError ? (
                <Text style={styles.errorText}>{validationError}</Text>
              ) : null}
            </View>
            {/* Password Input */}
            <View style={tw`border-b-[2px] border-[#ffffff] opacity-70 `}>
              <Text style={tw`text-[#ffffff] py-2`}>Password</Text>
              <TextInput
                style={tw`text-[#ffffff] `}
                secureTextEntry={hidePassword}
                onChangeText={(text) => {
                  setPassword(text);
                  validatePass();
                }}
                value={password}
              />
              {validationPass ? (
                <Text style={styles.errorText}>{validationPass}</Text>
              ) : null}
              <TouchableOpacity
                style={tw`absolute right-3 top-7`}
                onPress={togglePasswordVisibility}
              >
                <Feather
                  name={hidePassword ? "eye" : "eye-off"}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            {/* Forgot Password */}
            <View style={tw`py-3`}>
              <TouchableOpacity
                onPress={handleForgot}
                style={tw`flex flex-row items-center`}
              >
                <Text style={tw`text-[#FFFFFF] `}>Forgot Password</Text>
                <Image
                  source={require("../../../assets/Icon2.png")}
                  style={tw``}
                />
              </TouchableOpacity>
            </View>
            {/* Button */}
            <View style={tw`py-3 flex items-center `}>
              <TouchableOpacity
                onPress={handleSignin}
                style={tw`bg-black w-[340px] rounded-[40px] py-2 px-2`}
              >
                <Text
                  style={tw`text-[#ffffff] text-center font-bold text-[18px]`}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Register */}
          <TouchableOpacity
            onPress={handleRegister}
            style={tw`flex items-center`}
          >
            <Text style={tw`text-[#ffffff] opacity-50`}>
              Don’t have an account yet? Register.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
});
export default Login;
