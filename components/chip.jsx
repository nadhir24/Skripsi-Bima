import React, { useState } from "react";
import { Chip as NextUIChip } from "@nextui-org/react";

const CustomChip = () => {
  const [isChipActive, setIsChipActive] = useState(false);

  const handleChipClick = () => {
    setIsChipActive(!isChipActive);
  };

  return (
    <div>
      <NextUIChip
        onClick={handleChipClick}
        disabled={!isChipActive}
        variant={isChipActive ? "solid" : "outlined"}
      >
        {isChipActive ? "Aktif" : "Tidak Aktif"}
      </NextUIChip>
    </div>
  );
};

export default CustomChip;
