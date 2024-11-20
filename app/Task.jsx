import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Switch,
  useWindowDimensions,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import PandaFoot from "@/assets/Icons/PandFoot";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import DeleteIcon from "@/assets/Icons/Delete";
import { data } from "@/components/data";
import AddIcon from "@/assets/Icons/Add";

const Task = () => {
  const refRBSheet = useRef();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, position: "relative" }}
    >
      <Modal refRBSheet={refRBSheet} />

      {/* Main Boby starts */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: Platform.OS == "ios" ? 60 : 100,
        }}
      >
        {/* Heading and sub-heading */}
        <View style={{ paddingHorizontal: 14 }}>
          <View style={{ gap: 24 }}>
            <View>
              <Text
                style={{
                  fontFamily: "PoppinsMedium",
                  fontSize: 22,
                  color: "#000",
                  width: "80%",
                }}
              >
                Schedule your work for a week?
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsMedium",
                  fontSize: 12,
                  color: "#8b8c8b",
                  width: "80%",
                }}
              >
                Please set your start and end dates when you are available to
                work.
              </Text>
            </View>

            {/* Week Days */}
            <View style={{ alignItems: "center" }}>
              <FlatList
                data={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      height: 55,
                      width: 42,
                      borderWidth: 1,
                      borderColor:
                        item == "Sun" || item == "Sat"
                          ? Colors.Gray.light
                          : Colors.PinkColor.main,
                      backgroundColor:
                        item == "Sun" || item == "Sat"
                          ? "White"
                          : Colors.PinkColor.main,
                      borderRadius: 10,

                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "PoppinsMedium",
                        fontSize: 12,
                        color:
                          item == "Sun" || item == "Sat"
                            ? "#8b8c8b"
                            : "#f2f2f2",
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()} // Use index as the key
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 6,
                }}
              />
            </View>

            <View>
              <SameHour />
            </View>

            <View style={{ alignItems: "center" }}>
              <VisitInfo showModal={() => refRBSheet.current.open()} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Main Body ends */}

      <View
        style={{
          width: "100%",
          height: 100,
          position: "absolute",
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white", // Ensure a visible background
          borderTopColor: "#fff", // Optional if you want a visible border
          borderTopWidth: 1, // Thin border to combine with shadow
          shadowColor: "#000", // Shadow color
          shadowOffset: { width: 0, height: 2 }, // Move shadow above the view
          shadowOpacity: 0.2, // Adjust shadow transparency
          shadowRadius: 4, // Spread of the shadow
          elevation: 5, // For Android shadow
        }}
      >
        <TouchableOpacity
          style={{
            width: "90%",
            padding: 14,
            backgroundColor: Colors.PinkColor.main,
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              color: "white",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Modal = ({ refRBSheet }) => {
  const [select, setSelect] = useState("home-visit");

  return (
    <RBSheet
      ref={refRBSheet}
      useNativeDriver={false}
      draggable={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        draggableIcon: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          height: 4,
          width: 40,
        },
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
      customModalProps={{
        // animationType: "slide",
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
    >
      <View style={{ paddingHorizontal: 24, paddingVertical: 10 }}>
        <Text style={{ fontFamily: "PoppinsBold" }}>Select</Text>
        <TouchableOpacity onPress={() => setSelect("tele-consult")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 18,
              paddingBottom: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#f5ebec",
              height: 60,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsMedium",
                color: select === "tele-consult" ? "#fa575d" : "gray",
              }}
            >
              Tele Consult
            </Text>
            {select == "tele-consult" && <PandaFoot />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelect("home-visit")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 18,
              paddingBottom: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#f5ebec",
              height: 60,
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsMedium",
                color: select === "home-visit" ? Colors.PinkColor.main : "gray",
              }}
            >
              Home Visit
            </Text>
            {select == "home-visit" && <PandaFoot />}
          </View>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

const SameHour = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: "rgba(255, 250, 235, 0.5)",
        borderColor: Colors.Cream.dark,
        borderWidth: 1,
        borderRadius: 16,
      }}
    >
      <Text
        style={{
          fontFamily: "PoppinsSemibold",
          fontSize: 14,
          color: Colors.Gray.dark,
          width: "80%",
        }}
      >
        Use same hours for all days
      </Text>
      <Switch ios_backgroundColor={Colors.Gray.light} />
    </View>
  );
};

const VisitInfo = ({ showModal }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <View style={{ gap: 10, marginBottom: 16 }}>
          <Text
            style={{
              fontFamily: "PoppinsMedium",
              fontSize: 16,
              color: "#000",
              width: "80%",
            }}
          >
            {item.day}
          </Text>

          <View
            style={{
              // width: "100%",
              maxWidth: 400,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal:8,
              paddingVertical: 12,
              backgroundColor: Colors.Cream.main,
              borderColor: Colors.Cream.dark,
              borderWidth: 1,
              borderRadius: 16,
            }}
          >
            <FlatList
              data={item.visits}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 4,
                    }}
                  >
                    <View
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: "#f5f5f5",
                        backgroundColor: "#fff",
                        borderRadius: 10,

                        alignItems: "center",
                        justifyContent: "center",
                        width: 75,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "PoppinsMedium",
                          fontSize: 10,
                          color: Colors.Gray.dark,
                        }}
                      >
                        {item.checkIn}
                      </Text>
                    </View>

                    <View
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: "#f5f5f5",
                        backgroundColor: "#fff",
                        borderRadius: 10,

                        alignItems: "center",
                        justifyContent: "center",
                        width: 75,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "PoppinsMedium",
                          fontSize: 10,
                          color: Colors.Gray.dark,
                        }}
                      >
                        {item.checkOut}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderWidth: 1,
                        borderColor: "#f5f5f5",
                        backgroundColor: "#fff",
                        borderRadius: 10,

                        alignItems: "center",
                        justifyContent: "center",
                        width: 97,
                      }}
                      onPress={showModal}
                    >
                      <Text
                        style={{
                          fontFamily: "PoppinsMedium",
                          fontSize: 10,
                          color: Colors.Gray.dark,
                        }}
                      >
                        {item.Type}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {index == 2 && (
                    <TouchableOpacity  onPress={showModal}>

                    <View style={{ paddingLeft: 8 }}>
                      <AddIcon />
                    </View>
                    </TouchableOpacity>
                  )}
                  <View style={{ paddingLeft: 8 }}>
                    <DeleteIcon />
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()} // Use index as the key
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "space-between",
                // width: "100%",
                flexDirection: "column",
                gap: 8,
              }}
            />
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()} // Use index as the key
      scrollEnabled={false}
      contentContainerStyle={{
        justifyContent: "space-between",
        width: "100%",
      }}
    />
  );
};
export default Task;
