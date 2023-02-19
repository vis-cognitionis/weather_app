import React from "react";
import { Path, Svg } from "react-native-svg";
import { useTheme } from "src/core/init/themes/theme_context";

export const IconHomeWeather = ({ stroke }: { stroke: string }) => {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Path
        d="M19.6667 10.3333H17.3333M3.33333 10.3333H1M10.3333 1V3.33333M10.3333 17.3333V19.6667M16.9333 3.73333L15.2827 5.384M5.384 15.2827L3.73333 16.9333M3.73333 3.73333L5.384 5.384M15.284 15.284L16.9333 16.9333M13.8333 10.3333C13.8333 12.2663 12.2663 13.8333 10.3333 13.8333C8.40034 13.8333 6.83333 12.2663 6.83333 10.3333C6.83333 8.40034 8.40034 6.83333 10.3333 6.83333C12.2663 6.83333 13.8333 8.40034 13.8333 10.3333Z"
        stroke={stroke}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconDetail = ({ stroke }: { stroke: string }) => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H0.875V13.125H14V14H0V0ZM12.9649 2.72388C13.0094 2.76028 13.0463 2.8051 13.0734 2.85577C13.1006 2.90644 13.1175 2.96197 13.1232 3.01918C13.1289 3.07639 13.1232 3.13416 13.1066 3.18919C13.0899 3.24421 13.0626 3.29542 13.0261 3.33987L9.08862 8.15238C9.04992 8.19961 9.00176 8.23822 8.94724 8.26573C8.89272 8.29323 8.83304 8.30901 8.77205 8.31206C8.71106 8.31511 8.65011 8.30536 8.59311 8.28343C8.53612 8.26151 8.48434 8.22789 8.44112 8.18475L6.1775 5.92113L2.9785 10.3197C2.90852 10.4087 2.80677 10.4671 2.69464 10.4827C2.5825 10.4982 2.46871 10.4697 2.37718 10.403C2.28564 10.3364 2.22349 10.2369 2.20378 10.1255C2.18408 10.014 2.20835 9.89921 2.2715 9.80525L5.7715 4.99275C5.80865 4.94157 5.85645 4.89906 5.91161 4.86814C5.96677 4.83722 6.02798 4.81862 6.09102 4.81363C6.15406 4.80864 6.21744 4.81738 6.27678 4.83923C6.33612 4.86109 6.39001 4.89556 6.43475 4.94025L8.71763 7.224L12.3489 2.78513C12.3853 2.74063 12.4301 2.70375 12.4808 2.67659C12.5314 2.64943 12.587 2.63252 12.6442 2.62683C12.7014 2.62114 12.7592 2.62678 12.8142 2.64344C12.8692 2.66009 12.9204 2.68742 12.9649 2.72388Z"
        fill={stroke}
      />
    </Svg>
  );
};

export const IconSettings = ({ stroke }: { stroke: string }) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M6.69722 2.02433C7.02856 0.658556 8.97144 0.658556 9.30278 2.02433C9.35249 2.22951 9.44995 2.42005 9.58722 2.58044C9.72449 2.74084 9.89769 2.86655 10.0927 2.94736C10.2878 3.02816 10.4991 3.06177 10.7096 3.04545C10.9201 3.02913 11.1237 2.96335 11.304 2.85344C12.5041 2.12233 13.8784 3.49589 13.1473 4.69678C13.0376 4.87695 12.9719 5.08048 12.9556 5.29082C12.9393 5.50116 12.9729 5.71238 13.0536 5.9073C13.1343 6.10221 13.2599 6.27534 13.4201 6.4126C13.5803 6.54985 13.7707 6.64737 13.9757 6.69722C15.3414 7.02856 15.3414 8.97144 13.9757 9.30278C13.7705 9.35249 13.5799 9.44995 13.4196 9.58722C13.2592 9.72449 13.1334 9.89769 13.0526 10.0927C12.9718 10.2878 12.9382 10.4991 12.9545 10.7096C12.9709 10.9201 13.0367 11.1237 13.1466 11.304C13.8777 12.5041 12.5041 13.8784 11.3032 13.1473C11.123 13.0376 10.9195 12.9719 10.7092 12.9556C10.4988 12.9393 10.2876 12.9729 10.0927 13.0536C9.89779 13.1343 9.72466 13.2599 9.5874 13.4201C9.45015 13.5803 9.35263 13.7707 9.30278 13.9757C8.97144 15.3414 7.02856 15.3414 6.69722 13.9757C6.64751 13.7705 6.55005 13.5799 6.41278 13.4196C6.27551 13.2592 6.10231 13.1334 5.90727 13.0526C5.71223 12.9718 5.50087 12.9382 5.29039 12.9545C5.07991 12.9709 4.87625 13.0367 4.696 13.1466C3.49589 13.8777 2.12156 12.5041 2.85267 11.3032C2.96241 11.123 3.02809 10.9195 3.04438 10.7092C3.06066 10.4988 3.02708 10.2876 2.94637 10.0927C2.86566 9.89779 2.74009 9.72466 2.57988 9.5874C2.41967 9.45015 2.22933 9.35263 2.02433 9.30278C0.658556 8.97144 0.658556 7.02856 2.02433 6.69722C2.22951 6.64751 2.42005 6.55005 2.58044 6.41278C2.74084 6.27551 2.86655 6.10231 2.94736 5.90727C3.02816 5.71223 3.06177 5.50087 3.04545 5.29039C3.02913 5.07991 2.96335 4.87625 2.85344 4.696C2.12233 3.49589 3.49589 2.12156 4.69678 2.85267C5.47456 3.32556 6.48256 2.90711 6.69722 2.02433Z"
        stroke={stroke}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 10.3333C9.28866 10.3333 10.3333 9.28866 10.3333 8C10.3333 6.71134 9.28866 5.66667 8 5.66667C6.71134 5.66667 5.66667 6.71134 5.66667 8C5.66667 9.28866 6.71134 10.3333 8 10.3333Z"
        stroke={stroke}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconLightTheme = () => {
  const { theme } = useTheme();
  return (
    <Svg width="20" height="13" viewBox="0 0 20 13" fill="none">
      <Path
        d="M8.11829 6.48936V9.72136M18.2183 1.64136L15.8913 3.25736M19.0003 6.48936H16.6683M18.2233 11.3374L15.8913 9.72136M2.5553 9.72132C1.6797 9.70436 0.983566 8.98092 1.0003 8.10532V4.87332C0.983566 3.99772 1.6797 3.27428 2.5553 3.25732H8.2153C8.57403 3.25645 8.92087 3.12855 9.1943 2.89632L11.0253 1.35332C11.4965 0.96545 12.1514 0.890176 12.6983 1.16103C13.2452 1.43189 13.5823 1.99846 13.5593 2.60832V10.3703C13.5823 10.9802 13.2452 11.5467 12.6983 11.8176C12.1514 12.0885 11.4965 12.0132 11.0253 11.6253L9.1943 10.0823C8.92087 9.85009 8.57403 9.72219 8.2153 9.72132H2.5553Z"
        stroke={theme.palette.common?.black}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconDarkTheme = () => {
  const { theme } = useTheme();

  return (
    <Svg width="15" height="13" viewBox="0 0 15 13" fill="none">
      <Path
        d="M8.11829 6.48938V9.72138M2.5553 9.72132C1.6797 9.70436 0.983566 8.98092 1.0003 8.10532V4.87332C0.983566 3.99772 1.6797 3.27428 2.5553 3.25732H8.2153C8.57403 3.25645 8.92087 3.12855 9.1943 2.89632L11.0253 1.35332C11.4965 0.96545 12.1514 0.890176 12.6983 1.16103C13.2452 1.43189 13.5823 1.99846 13.5593 2.60832V10.3703C13.5823 10.9802 13.2452 11.5467 12.6983 11.8176C12.1514 12.0885 11.4965 12.0132 11.0253 11.6253L9.1943 10.0823C8.92087 9.85009 8.57403 9.72219 8.2153 9.72132H2.5553Z"
        stroke={theme.palette.common?.black}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconBack = () => {
  const { theme } = useTheme();

  return (
    <Svg width="9" height="15" viewBox="0 0 9 15" fill="none">
      <Path
        d="M7.66675 1L1.00008 7.66667L7.66675 14.3333"
        stroke={theme.palette.primary.dark}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconLocation = () => {
  const { theme } = useTheme();

  return (
    <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
      <Path
        d="M6 7.587C6.58842 7.587 7.13214 7.27308 7.42634 6.7635C7.72055 6.25392 7.72055 5.62608 7.42634 5.1165C7.13214 4.60692 6.58842 4.293 6 4.293M6 7.593C5.40209 7.60774 4.84318 7.29718 4.53989 6.78169C4.2366 6.2662 4.2366 5.6268 4.53989 5.11131C4.84318 4.59582 5.40209 4.28526 6 4.3M6 1C6.65602 1.00001 7.30577 1.12772 7.913 1.376C8.82467 1.74913 9.60548 2.3838 10.157 3.2C10.7049 4.00887 10.9984 4.96305 11 5.94C11 7.25 10.583 8 9.535 9.433L8.083 11.7L6 15L3.917 11.707L2.465 9.436C1.417 8 1 7.253 1 5.943C1.00097 4.96503 1.29456 4.00972 1.843 3.2C2.39496 2.38491 3.17573 1.75132 4.087 1.379C4.69402 1.12969 5.34378 1.00097 6 1Z"
        stroke={theme.palette.primary.dark}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconNotifications = () => {
  const { theme } = useTheme();

  return (
    <Svg width="17" height="15" viewBox="0 0 12 15" fill="none">
      <Path
        d="M8.50098 14.176C7.01414 15.2709 4.98781 15.2709 3.50098 14.176M5.16798 1H6.83398M6.00088 2.64697C3.87588 2.64697 2.86888 3.88197 1.86288 6.10697C1.27437 7.6293 0.981804 9.24996 1.00088 10.882C2.45385 11.9412 4.20282 12.5173 6.00088 12.529C7.79893 12.5173 9.5479 11.9412 11.0009 10.882C11.0203 9.25003 10.728 7.62937 10.1399 6.10697C9.13288 3.88197 8.12588 2.64697 6.00088 2.64697Z"
        stroke={theme.palette.primary.dark}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconLanguage = () => {
  const { theme } = useTheme();

  return (
    <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
      <Path
        d="M1 2.625H11.3846M6.19231 1V2.625M9.07692 14L12.5385 6.41667L16 14M10.1406 11.8333H14.9363M9.41226 2.625C9.41226 2.625 8.53606 5.80729 6.44471 8.21094C4.35337 10.6146 2.15385 11.8333 2.15385 11.8333M8.5 10.2083C8.5 10.2083 7.23798 9.29427 5.90385 7.66927C4.56971 6.04427 3.88462 4.79167 3.88462 4.79167"
        stroke={theme.palette.primary.dark}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconTerms = () => {
  const { theme } = useTheme();

  return (
    <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
      <Path
        d="M3.4992 8H9.4992M4.4992 10H8.4992M4.4992 6H8.4992M3.0852 13.982L1.3182 14.882C1.24952 14.9162 1.16799 14.9121 1.10305 14.8713C1.03811 14.8304 0.99914 14.7587 1.0002 14.682V1.955C0.989597 1.4384 1.39961 1.01093 1.9162 1H11.0832C11.5998 1.01093 12.0098 1.4384 11.9992 1.955V14.682C12.0003 14.7587 11.9613 14.8304 11.8963 14.8713C11.8314 14.9121 11.7499 14.9162 11.6812 14.882L9.9142 13.982C9.84383 13.9461 9.75945 13.9514 9.6942 13.996L8.2722 14.962C8.19857 15.0121 8.10183 15.0121 8.0282 14.962L6.6222 14.007C6.54857 13.9569 6.45183 13.9569 6.3782 14.007L4.9722 14.962C4.89857 15.0121 4.80183 15.0121 4.7282 14.962L3.3052 14C3.2407 13.9542 3.1563 13.9472 3.0852 13.982Z"
        stroke={theme.palette.primary.dark}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconAbout = () => {
  const { theme } = useTheme();

  return (
    <Svg width="18" height="18" viewBox="0 0 17 18" fill="none">
      <Path
        d="M8 8V12M1 7V9C1 12.3137 3.68629 15 7 15H9C12.3137 15 15 12.3137 15 9V7C15 3.68629 12.3137 1 9 1H7C3.68629 1 1 3.68629 1 7Z"
        stroke={theme.palette.primary.dark}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 5.5C7.7243 5.5 7.5 5.2757 7.5 5C7.5 4.7243 7.7243 4.5 8 4.5C8.2757 4.5 8.5 4.7243 8.5 5C8.5 5.2757 8.2757 5.5 8 5.5Z"
        fill={theme.palette.primary.dark}
      />
      <Path
        d="M8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4Z"
        fill={theme.palette.primary.dark}
      />
    </Svg>
  );
};

export const IconNotificationsOff = () => {
  const { theme } = useTheme();

  return (
    <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
      <Path
        d="M6.392 1H9.749M10.049 12.879H12.433C13.0126 12.8716 13.5459 12.5607 13.838 12.06C14.1025 11.4329 14.0149 10.7126 13.608 10.167C13.3003 9.20116 13.0991 8.20457 13.008 7.195C12.822 6.14207 12.3358 5.16526 11.608 4.382M10.04 12.882H6.09M6.09 12.882C6.09 13.5894 6.46739 14.243 7.08 14.5967C7.69261 14.9504 8.44739 14.9504 9.06 14.5967C9.67261 14.243 10.05 13.5894 10.05 12.882M6.09 12.882H3.706C3.53594 12.8816 3.36706 12.8536 3.206 12.799M15 1L11.618 4.382M1 15L11.615 4.385M9.91 3.181C9.32792 2.93442 8.70215 2.80757 8.07 2.808C5.57572 2.8812 3.49262 4.73172 3.126 7.2C3.0349 8.20957 2.8337 9.20616 2.526 10.172C2.39335 10.4035 2.2867 10.649 2.208 10.904"
        stroke={theme.palette.error?.main}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconEdit = () => {
  const { theme } = useTheme();

  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Path
        d="M14.862 3.23725L16.549 1.54925C16.9007 1.19757 17.3777 1 17.875 1C18.3723 1 18.8493 1.19757 19.201 1.54925C19.5527 1.90092 19.7502 2.3779 19.7502 2.87525C19.7502 3.37259 19.5527 3.84957 19.201 4.20125L8.582 14.8202C8.05332 15.3486 7.40137 15.737 6.685 15.9502L4 16.7502L4.8 14.0652C5.01328 13.3489 5.40163 12.6969 5.93 12.1682L14.862 3.23725ZM14.862 3.23725L17.5 5.87525M16 12.7502V17.5002C16 18.097 15.7629 18.6693 15.341 19.0912C14.919 19.5132 14.3467 19.7502 13.75 19.7502H3.25C2.65326 19.7502 2.08097 19.5132 1.65901 19.0912C1.23705 18.6693 1 18.097 1 17.5002V7.00025C1 6.40351 1.23705 5.83121 1.65901 5.40926C2.08097 4.9873 2.65326 4.75025 3.25 4.75025H8"
        stroke={theme.palette.primary.dark}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const IconSearch = () => {
  const { theme } = useTheme();

  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M4 6.49963C4.44862 4.8813 5.83209 3.69547 7.5 3.49963M13 13L17 17M1 7.99964C1.00013 5.90377 1.93936 3.91824 3.55956 2.58873C5.17975 1.25923 7.31043 0.725644 9.366 1.13464L9.561 1.17664C12.285 1.80025 14.3771 3.98423 14.8831 6.73248C15.3892 9.48074 14.2122 12.2667 11.889 13.8196C11.8223 13.8636 11.7557 13.9066 11.689 13.9486C9.53014 15.2873 6.81546 15.3514 4.59584 14.1161C2.37621 12.8807 1.00002 10.5399 1 7.99964Z"
        stroke={theme.palette.primary.dark}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
