import React, { useState } from "react";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import tw from "twrnc";

const PickDate = ({ setDate, date }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const hideDatePickerModal = () => {
    setShowDatePicker(false);
  };

  return (
    <View
      style={tw`bg-[#ffffff] w-full shadow-md shadow-black flex items-center p-3`}
    >
      <TouchableOpacity
        onPress={showDatePickerModal}
        style={tw`w-320px flex flex-row justify-between `}
      >
        <Text>Birthday</Text>
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text>{date.toLocaleDateString()}</Text>
          <Image source={require("../../assets/Vector3.png")} />
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
          minimumDate={new Date(1900, 0, 1)}
          maximumDate={new Date(2099, 11, 31)}
        />
      )}
    </View>
  );
};

export default PickDate;
