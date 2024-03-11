import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: "vikas8004",
  api_key: 498528855722373,
  api_secret: "QQoK7k3Kx770yohArO6fkRD4iTQ",
});
const uploadImage = async (localPath) => {
  try {
    const res = await cloudinary.uploader.upload(localPath);
    // if (res) {
    //   fs.unlinkSync(localPath);
    // }
    // console.log(res);

    return res;
  } catch (error) {
    // fs.unlinkSync(localPath);
    console.log(error);
    return null;
  }
};

const deleteImage = async (public_id) => {
  const result = await cloudinary.uploader.destroy(public_id);
  return result;
};
export {deleteImage}
export default uploadImage;
