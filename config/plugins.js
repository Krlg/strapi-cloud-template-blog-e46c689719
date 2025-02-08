module.exports = {
  upload: {
    config: {
      providerOptions: {
        localServer: {
          mimeTypes: [
            "audio/mpeg",
            "audio/mp3",
            "audio/wav",
            "audio/ogg"
          ],
        },
      },
    },
  },
};
