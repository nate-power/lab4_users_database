const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(value);
            },
            message: "Email format is not valid. It must be in the following format: 'example@example.com'."
        }
    },
    address: {
        street: {
            type: String,
            required: true,
            trim: true            
        },
        suite: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true,
            validate: {
                validator: function(value) {
                    var cityRegex = /^[A-Za-z.\s ]+$/;
                    return cityRegex.test(value);
                },
                message: "City format is not valid. It must only have letters and spaces."
            }
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
            validate: {
                validator: function(value) {
                    var zipRegex = /\b\d{5}\b-\b\d{4}\b/g;
                    return zipRegex.test(value);
                },
                message: "Zipcode format is not valid. It must be 5 digits, a hyphen, then 4 digits (ex. 12345-1234)."
            }
        },
        geo: {
            lat: {
                type: Number,
                required: true
            },
            lng: {
                type: Number,
                required: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                var phoneRegex = /\b\d{1}\b-\b\d{3}\b-\b\d{3}\b-\b\d{4}\b/g;
                return phoneRegex.test(value);
            },
            message: "Phone format is not valid. It must be in the following format: 1-123-123-1234."
        }
    },
    website: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                var urlRegex = /^(http|https):\/\/[^ "]+$/;
                return urlRegex.test(value);
            },
            message: "Website format is not valid. It must start with http or https, and contain no spaces (ex. https://www.example.com)."
        }
    },
    company: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        catchPhrase: {
            type: String,
            required: true,
            trim: true
        },
        bs: {
            type: String,
            required: true,
            trim: true
        }
    }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;