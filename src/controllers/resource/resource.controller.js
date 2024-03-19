import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import getDataUri from "../../utils/getDataUri.js";
import uploadImage from "../../utils/cloudinary.uploader.js";
import { Resource } from "../../models/resource/resource.model.js";
const updateResource = asyncHandler(async (req, res) => {
  // console.log(req.body,req.file);
  const { fileName, title } = req.body;
  const file = req.file;
  if (!fileName && !title) {
    res
      .status(400)
      .send(new ApiResponse(400, { message: "all the fields are required" }));
  } else {
    const pdfPath = getDataUri(req.file);
    const pdfFile = await uploadImage(pdfPath.content);
    if (!pdfFile) {
      res
        .status(400)
        .send(new ApiResponse(400, { message: "Failed to upload" }, "failed"));
    } else {
      const { secure_url, public_id } = pdfFile;
      const uploadedRes = await Resource.create({
        fileName,
        title,
        file: { public_id, secure_url },
      });
      res
        .status(201)
        .send(new ApiResponse(200, { message: "File uploaded successfully" }));
    }
  }
});
const getResources = asyncHandler(async (req, res) => {
  const foundResources = await Resource.find().select(["-__v"]);
  res.status(200).send(new ApiResponse(200, { foundResources }));
});
export { updateResource, getResources };
