import { useState, useEffect } from "react";

type BreakPointType = { min: number; max?: number };

type DevicesType = {
  mobile: BreakPointType;
  tablet: BreakPointType;
  laptop: BreakPointType;
  desktop: BreakPointType;
  tv: BreakPointType;
};

const devices: DevicesType = {
  mobile: { min: 300, max: 575 },
  tablet: { min: 576, max: 1024 },
  laptop: { min: 1025, max: 1200 },
  desktop: { min: 1201, max: 1400 },
  tv: { min: 1401 },
};

export default function useDeviceDetect(
  device: "mobile" | "tablet" | "laptop" | "desktop" | "tv",
) {
  const [isDevice, setIsDevice] = useState<boolean>(false);

  useEffect(() => {
    function checkDevice() {
      const { min, max } = devices[device];

      const isDeviceSize =
        max === undefined
          ? window.innerWidth >= min
          : window.innerWidth >= min && window.innerWidth <= max;
      setIsDevice(isDeviceSize);
    }

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, [device]);

  return isDevice;
}
