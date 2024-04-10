import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Screen1() {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [secounds, setSecounds] = useState("00");
  const [ampm, setAmpm] = useState("");

  const gettime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const secounds = date.getSeconds();
    // secounds > 10 ? setSecounds(secounds) : setSecounds("0" + secounds);
    minutes > 10 ? setMinute(minutes) : setMinute("0" + minutes);
    setHour(hours);
  };

  const getampm = () => {
    const date = new Date();
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    setAmpm(ampm);
  };

  useEffect(() => {
    gettime();
    getampm();
  }, []);

  setInterval(() => {
    gettime();
    getampm();
  }, 1000);
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.minute}>{minute}</Text>
      <Text style={styles.ampm}>{ampm}</Text>

      <View style={styles.bottomnav}>
        <TouchableOpacity>
          <Text style={styles.bottomnavtext}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.bottomnavtext}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hour: {
    color: "white",
    fontSize: 300,
    fontWeight: "bold",
    height: 250,
    lineHeight: 320,
  },
  minute: {
    color: "grey",
    fontSize: 250,
    fontWeight: "bold",
    height: 265,
    lineHeight: 320,
  },
  secounds: {
    color: "white",
    fontSize: 250,
    fontWeight: "bold",
    height: 250,
    lineHeight: 220,
  },
  ampm: {
    color: "white",
    fontSize: 200,
    fontWeight: "bold",
    height: 250,
    lineHeight: 200,
  },
  bottomnav: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "center",
  },
  bottomnavtext: {
    color: "black",
    fontSize: 30,
    marginHorizontal: 10,
    width: 50,
    height: 50,
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
});
