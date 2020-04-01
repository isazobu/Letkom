var mongoose = require('mongoose')
Contact = require('../models/Contact');



getContact = function (req, res) {
    Contact.find((err, contact) => {
        if (err) return res.status(400).json({ success: false, error: err })
        console.log(contact);
        res.render('contact', { contact: contact })
    })
}


module.exports = {
    getContact
}