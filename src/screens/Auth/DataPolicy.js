import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import PlanHeader from "../../component/PlanHeader";

const DataPolicy = () => {
  return (
    <ScrollView style={tw`flex-1 bg-[#FAA0A0]`}>
      <View>
        <PlanHeader />
      </View>
      <View style={tw`flex items-center`}>
        <View style={tw`px-3`}>
          <Text style={tw`py-2 font-bold text-20px`}>
            Data Collection and Use
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2`}>
            Personal Information When you create an account or sign up for our
            services, we may collect the following personal information:
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2 py-1`}>
            • Full name
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2 py-1`}>
            • Email address
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2 py-1`}>
            • Gender
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2 py-1`}>
            • Physical measurements (height, weight, etc.)
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2 py-1`}>
            • Fitness goals
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2 py-1`}>
            • Fitness data (workout routines, steps, calories burned, etc.)
          </Text>
        </View>
        <View style={tw`px-3`}>
          <Text style={tw`py-2 font-bold text-20px`}> Data Security</Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2`}>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. We limit access to your personal information to
            employees, contractors, and agents who need to know that information
            to perform their job functions.
          </Text>
        </View>
        <View style={tw`px-3`}>
          <Text style={tw`py-2 font-bold text-20px`}>
            Changes to this Data Policy
          </Text>
          <Text style={tw`text-[14px] font-semibold text-left px-2`}>
            We may update this Data Policy from time to time. We will notify you
            of any changes by posting the updated policy on this page, and we
            may also send you an email notification. Your continued use of the
            App after any changes constitutes your acceptance of the updated
            Data Policy.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DataPolicy;
