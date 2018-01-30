/**
 * 用户模型
 * @param {*} user 
 */
const moment = require('moment');
moment.locale('zh-cn');
const connection = require('../dao');
const cryptoPassword = require('../util/cryptoPassword');

function User(user) {
    this.uid = user.uid;
    this.username = user.username;
    this.mobile = user.mobile;
    this.password = user.password;
    this.registerDate = user.registerDate;
    this.gender = user.gender;
    this.birthday = user.birthday;
}

function addUser(param, callback) {
    let {
        username,
        password,
        mobile
    } = param;
    let nowStr = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

    let user = {
        username,
        password: cryptoPassword(password),
        registerDate: nowStr,
        mobile
    };
    let sql = 'INSERT INTO users SET ?';

    let query = connection.query(sql, user, callback);
}

module.exports = {
    User,
    addUser
};