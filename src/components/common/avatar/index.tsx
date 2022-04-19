import { AvatarProps } from "../../../interfaces";

const Avatar = ({ src, alt, height, width }: AvatarProps) => {
  return (
    <>
      <img
        className={`h-${height ?? "9"} w-${
          width ?? "9"
        } rounded-full object-cover`}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </>
  );
};

export default Avatar;
