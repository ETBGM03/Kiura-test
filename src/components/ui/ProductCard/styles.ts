import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: 'space-between',
    minHeight: 120,
    columnGap: 12,
    borderRadius: 8,
    shadowColor: "#545454",
    shadowOffset: {
      width: 0,
      height: 7,
      
    },
    shadowOpacity: 1,
    shadowRadius:6,
    elevation: 4
  },

  contentImage: { flex:1, maxWidth: 85, justifyContent: "center",marginLeft: 8 },
  imageProduct: { width: "100%", height: "70%", borderRadius: 100 },
});
