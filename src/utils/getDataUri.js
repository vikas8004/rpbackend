import dataUriParser from "datauri/parser.js";

import path from "path";

const getDataUri = (file) => {
//   console.log(file);
  const parser = new dataUriParser();
  const extName = path.extname(file.originalname).toString();

  const formattedData = parser.format(extName, file.buffer);
  return formattedData;
};
export default getDataUri;
