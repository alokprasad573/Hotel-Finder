const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: 'dtqk4l2h5',
    api_key: '972369782485739',
    api_secret: '8WOjG-X16f3_Ri5XYK2eWumLgM4'
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Endless_Horizons',
        allowedFormats: ["png", "jpg", "jpeg","avif"],
    },
});

module.exports = {
    cloudinary,
    storage,
}