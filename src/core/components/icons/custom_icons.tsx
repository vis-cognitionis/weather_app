import React from "react";
import { Path, Svg } from "react-native-svg";
import { useTheme } from "../../init/themes/theme_context";

export const IconHomeWeather = () => {
  const { theme } = useTheme();
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Path
        d="M19.6667 10.3333H17.3333M3.33333 10.3333H1M10.3333 1V3.33333M10.3333 17.3333V19.6667M16.9333 3.73333L15.2827 5.384M5.384 15.2827L3.73333 16.9333M3.73333 3.73333L5.384 5.384M15.284 15.284L16.9333 16.9333M13.8333 10.3333C13.8333 12.2663 12.2663 13.8333 10.3333 13.8333C8.40034 13.8333 6.83333 12.2663 6.83333 10.3333C6.83333 8.40034 8.40034 6.83333 10.3333 6.83333C12.2663 6.83333 13.8333 8.40034 13.8333 10.3333Z"
        stroke={theme.palette.primary.light}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
