const vision = require("@google-cloud/vision");

module.exports = {
  async create(request, response) {
    const { originalname, size, key, mimetype } = request.file;

    const data = {
      originalname,
      size,
      key,
      url: `${process.env.APP_URL}/images/${key}`,
      text: "",
      type: mimetype,
    };

    if (data.type !== "invalid") {
      const client = new vision.ImageAnnotatorClient({
        keyFilename: "src/config/ApiKey.json",
      });

      await client.textDetection(`./tmp/images/${key}`).then((results) => {
        const labels = results[0].textAnnotations[0].description;
        data.text = labels;
      });
    } else {
      return response.status(500).json({ error: "Invalid File" });
    }

    return response.json(data);
  },
};
