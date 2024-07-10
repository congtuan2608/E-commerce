import facebook from "@/assets/svg/facebook.svg";
import google from "@/assets/svg/google.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Icons = {
  facebook,
  google,
};
type SVGAssetProps = {
  name: keyof typeof Icons;
  label?: string;
  className?: string;
};
export const SvgIcon = (props: SVGAssetProps) => {
  const { name, label, className, ...otherProps } = props;
  return (
    <Image
      priority
      alt={props.label ?? "Unknown"}
      src={Icons[name]}
      className={cn("w-10 h-10", props.className)}
      {...otherProps}
    />
  );
};
