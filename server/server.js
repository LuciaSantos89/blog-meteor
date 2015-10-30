Meteor.startup(function () {
  UploadServer.init({
    tmpDir: 'https://lucia-meteorblog.herokuapp.com/images/tmp',
    uploadDir: 'https://lucia-meteorblog.herokuapp.com/images',
    checkCreateDirectories: true,
    getDirectory: function(fileInfo, formData) {
      // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
      return formData.contentType;
    },
    cacheTime: 100,
    mimeTypes: {
        "xml": "application/xml",
        "vcf": "text/x-vcard"
    }
  });
});