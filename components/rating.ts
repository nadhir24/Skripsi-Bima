import React from "react";
import { Rating as NextuiRate } from "@nextui-org/react";

const Bintang: React.FC = () => {
  return (
    <div>
      <NextuiRate value={4} max={5} />
    </div>
  );
};

export default Bintang;
