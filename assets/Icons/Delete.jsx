import { Colors } from "@/constants/Colors";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DeleteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={16}
    height={16}
    viewBox="0 0 474.172 474.172"
    {...props}
  >
    <Path
      d="M83.716 428.254c0 25.32 20.606 45.918 45.943 45.918h218.976c25.329 0 45.926-20.598 45.926-45.918V77.27H83.716v350.984zm236.208-274.778h32.246v262.911h-32.246V153.476zm-96.908 0h32.254v262.911h-32.254V153.476zm-94.65 0h32.23v262.911h-32.23V153.476zM61.81 0v43.098h16.16v24.808h312.82v-24.8h21.573V0H61.81zm339.839 32.368H380.06v24.8H88.707v-24.8H72.539V10.73h329.11v21.638z"
      style={{
        fill: Colors.PinkColor.main,
      }}
    />
  </Svg>
);
export default DeleteIcon;
