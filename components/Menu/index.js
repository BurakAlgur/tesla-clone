import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMusic,
  faChevronRight,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import items from "./items";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => {
        return (
          <TouchableOpacity key={item.id}>
            <View style={styles.menuRow}>
              <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
              <View style={styles.menuTextBox}>
                <Text style={styles.menuText}>{item.title}</Text>
                {item.subTitle ? (
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                ) : null}
              </View>
              <FontAwesomeIcon
                color={"#4d4d4e"}
                icon={faChevronRight}
                size={24}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Menu;
