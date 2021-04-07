import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
// FIREBASE

const SelectioButton = ({item, doThis}) => {
  const [categoryId, setCategoryId] = useState();
  const changeBg = (item) => {
    if (item.id != categoryId) {
      setCategoryId(item.id);
      doThis(item.type, categoryId);
    } else {
      setCategoryId();
      doThis(item.type, categoryId);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      delayPressIn={0}
      onPress={() => changeBg(item)}
      style={[
        styles.categoryList,
        item.id === categoryId
          ? {
              backgroundColor: "#D81159",
              borderWidth: 1,
              borderColor: "#D81159",
            }
          : null,
      ]}>
      <View style={{flexDirection: "row"}}>
        <Text
          style={[
            styles.categoryListText,
            item.id === categoryId ? {color: "#FFF"} : null,
          ]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectioButton;

const styles = StyleSheet.create({
  categoryList: {
    marginEnd: 10,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
  categoryListText: {
    color: "#000",
    fontSize: 11,
    fontWeight: "bold",
    marginStart: 5,
    marginEnd: 5,
  },
});
