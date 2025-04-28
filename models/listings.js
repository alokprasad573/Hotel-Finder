const mongoose = require("mongoose");
const {listingSchema} = require("../schema");
const Schema = mongoose.Schema
const Review = require("./review.js");
const User = require("./user.js");

const newListings = new Schema({
    title: {
        type: String,
        required: true
    },

    description: String,

    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
})

newListings.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
})
const Listing = mongoose.model("Listing", newListings)
module.exports = Listing
