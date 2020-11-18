const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = mongoose.Schema({
      username: String
})

module.exports = mongoose.model("user", UserSchema.plugin(passportLocalMongoose))