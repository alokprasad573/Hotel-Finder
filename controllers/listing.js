const Listing = require('../models/listings.js');

module.exports.index = async (req, res) => {
    const hotels = await Listing.find({});
    res.status(200).render('./listing/index.ejs', {hotels});
}

module.exports.show = async (req, res, next) => {
    try {
        let id = req.params.id;
        const hotel = await Listing.findById(id).populate({path: "reviews", populate: {path : "author"}}).populate("owner");
        if (!hotel) {
            req.flash('error', 'Listing does not exist!');
            res.redirect('/listing');
        } else {
            res.status(200).render('./listing/show.ejs', {hotel, currUser: req.user});
        }

    } catch (err) {
        next(err);
    }
}

module.exports.create = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newList = new Listing(req.body.list);
    newList.owner = req.user._id;
    newList.image = {url, filename}
    await newList.save()
    req.flash("success", "New Listing created!.")
    res.redirect('/listing');
}

module.exports.edit = async (req, res) => {
    let id = req.params.id;
    const data = await Listing.findById(id);

    if(!data) {
        req.flash('error', 'Listing does not exist!');
        res.redirect('/listing');
    }

    let orgImgUrl = data.image.url;
    orgImgUrl = orgImgUrl.replace("/upload", "/upload/w_300");
    res.status(200).render('./listing/edit.ejs', {data, orgImgUrl});
}

module.exports.update = async (req, res) => {
    let id = req.params.id;
    let updatedList = await Listing.findByIdAndUpdate(id, {...req.body.list})

    if (typeof(req.file) !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedList.image = {url, filename}
    await updatedList.save()
    }

    req.flash("success", "Listing updated!.")
    res.redirect(`/listing/${id}`);
}

module.exports.destroy = async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted!.")
    res.redirect(`/listing`);
}