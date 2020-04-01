const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)
//const User = require('../models/User')

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    resources: []
})

const ADMIN = {
    email: 'test@example.com',
    password: '1',
}

const router = AdminBroExpress.buildRouter(adminBro)

/* EMAIL AND PASSWORD SETTINGS FOR LOGİN 
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        if (ADMIN.password === password && ADMIN.email === email) {
            return ADMIN
        }
        return null
    },
    cookieName: 'adminbro',
    cookiePassword: 'somepassword',
})
*/
module.exports = router