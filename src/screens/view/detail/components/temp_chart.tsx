import React from "react";

import { View, StyleSheet } from "react-native";
import { Svg, Path, Text, G, Line, Circle } from "react-native-svg";
import { scaleLinear } from "d3-scale";

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const data = [20, 22, 23, 25, 24, 22, 21];
const width = 300;
const height = 200;
const padding = 32;

const xScale = scaleLinear()
  .domain([0, data.length - 1])
  .range([padding, width - padding]);

const yScale = scaleLinear()
  .domain([20, 25])
  .range([height - padding, padding]);

const TemperatureChart = () => {
  const line = `M${xScale(0)},${yScale(data[0])}${data
    .map((d, i) => `L${xScale(i)},${yScale(d)}`)
    .join("")}`;

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {/* <Line
          x1={padding}
          x2={width - padding}
          y1={yScale(20)}
          y2={yScale(20)}
          stroke="#000"
        />
        <Line
          x1={padding}
          x2={width - padding}
          y1={yScale(22.5)}
          y2={yScale(22.5)}
          stroke="#000"
        />
        <Line
          x1={padding}
          x2={width - padding}
          y1={yScale(25)}
          y2={yScale(25)}
          stroke="#000"
        /> */}
        <G>
          <Path d={line} fill="none" stroke="red" strokeWidth="2" />
          {data.map((d, i) => (
            <Circle key={i} cx={xScale(i)} cy={yScale(d)} r="5" fill="red" />
          ))}
        </G>
        <Text x={0} y={0} fill="#000" fontSize="12" fontWeight="bold">
          Day
        </Text>
        <Text
          x={padding - 16}
          y={yScale(20) + 6}
          fill="#000"
          fontSize="12"
          fontWeight="bold"
        >
          Too cold
        </Text>
        <Text
          x={padding - 16}
          y={yScale(22.5) + 6}
          fill="#000"
          fontSize="12"
          fontWeight="bold"
        >
          Just right
        </Text>
        <Text
          x={padding - 16}
          y={yScale(25) + 6}
          fill="#000"
          fontSize="12"
          fontWeight="bold"
        >
          Too hot
        </Text>
      </Svg>
    </View>
  );
};

export default TemperatureChart;
