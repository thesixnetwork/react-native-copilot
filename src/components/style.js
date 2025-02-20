// @flow
import { StyleSheet } from "react-native";

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 0;
export const ARROW_SIZE: number = 0;

export default StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX
  },
  arrow: {
    position: "absolute",
    borderColor: "transparent",
    borderWidth: ARROW_SIZE
  },
  tooltip: {
    backgroundColor: "transparent",
    alignItems: "center"
  },
  tooltipText: {},
  tooltipContainer: {
    flex: 1
  },
  stepNumberContainer: {
    position: "absolute",
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: "hidden",
    zIndex: ZINDEX + 1
  },
  stepNumber: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: "#FFFFFF",
    backgroundColor: "#27ae60"
  },
  stepNumberText: {
    fontSize: 10,
    backgroundColor: "transparent",
    color: "#FFFFFF"
  },
  button: {
    padding: 10
  },
  buttonText: {
    color: "#27ae60"
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  overlayRectangle: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  overlayContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }
});
