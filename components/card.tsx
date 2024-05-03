import React from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter
} from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import type { StaticImageData } from "next/image";
import {Divider as NextUIDivider} from "@nextui-org/divider";
interface KartuProps {
  logoSrc: string;
  title: string;
  subTitle: string;
  description: string;
  fullWidth?: boolean;
  textAlign?: "justify" | "left" | "right" | "center";
}

const Kartu: React.FC<KartuProps> = ({
  logoSrc,
  title,
  subTitle,
  description,
  fullWidth = false,
  textAlign = "left",
}) => {
  const textAlignClass = textAlign === "justify" ? "text-justify" : "";

  return (
    <NextUICard className={`max-w-[400px] ${fullWidth ? "!w-full" : ""}`}>
      <CardHeader className="flex gap-3">
        <Image alt="logo" height={40} radius="sm" src={logoSrc} width={40} />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{subTitle}</p>
        </div>
      </CardHeader>
      <NextUIDivider />
      <CardBody>
        <p className={` ${textAlignClass}`}>{description}</p>
      </CardBody>
      <NextUIDivider />
    </NextUICard>
  );
};

export default Kartu;
