Meteor.startup(function () {
  UploadServer.init({
    tmpDir: '/home/lucia/Documents/blog-meteor/client/public/images/tmp',
    uploadDir: '/home/lucia/Documents/blog-meteor/client/public/images',
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