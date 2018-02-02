/**
 * 用户模型
 * @param {*} user 
 */
const moment = require('moment');
moment.locale('zh-cn');
const connection = require('../dao');
const cryptoPassword = require('../util/cryptoPassword');

const User = {
    /**
     * 添加用户
     * @param {*用户名username，密码password，手机号mobile}  
     * @param {*添加用户成功回调函数} callback 
     */
    addUser({ username, password, mobile }) {

        let nowStr = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

        let user = {
            username,
            password: cryptoPassword(password||''),
            registerDate: nowStr,
            mobile
        };

        return new Promise((resolve, reject) => {
            connection.beginTransaction((err) => {
                if (err) { reject(err); }
                /**
                 * 查看该手机号是否已经注册
                 */
                let findUserByMobileSql = `SELECT * FROM users WHERE mobile='${mobile}'`;
                connection.query(findUserByMobileSql, (error, results) => {
                    if (error) {
                        connection.rollback(() => {
                            reject(error);
                        });
                    }
                    if (results.length > 0) {
                        reject(new Error('该手机号码已被注册！请直接登录'));

                    } else {
                        let insertUserSql = 'INSERT INTO users SET ?';
                        connection.query(insertUserSql, user, (error, results, fields) => {
                            if (error) {
                                connection.rollback(() => {
                                    reject(error);
                                });
                            }

                            let findOneUserSql = `SELECT uid,username,mobile,registerDate,gender,birthday FROM users WHERE uid=${results ? results['insertId'] : 0}`;
                            connection.query(findOneUserSql, (error, queryResult) => {
                                if (error) {
                                    connection.rollback(() => {
                                        reject(error);
                                    });

                                }
                                connection.commit((error) => {
                                    if (error) {
                                        connection.rollback(() => {
                                            reject(error);
                                        });
                                    }
                                    resolve(queryResult);
                                });
                            });
                        });
                    }
                });



            });
        });
    },
    /**
     * 
     * @param {String} mobile 
     */
    findUser({ mobile, password }) {
        return new Promise((resolve, reject) => {
            connection.beginTransaction((err) => {
                if (err) { reject(err); }
                password = cryptoPassword(password||'');

                let findUserSql = `SELECT uid,username,mobile,registerDate,gender,birthday FROM users WHERE mobile='${mobile}' AND password='${password}'`;
                connection.query(findUserSql, (error, queryResult) => {
                    if (error) {

                        connection.rollback(() => {
                            reject(error);
                        });

                    }
                    connection.commit((error) => {
                        if (error) {
                            connection.rollback(() => {
                                reject(error);
                            });
                        }
                        resolve(queryResult);
                    });
                });
            });
        });
    },

    getAllUsers() {
        

        return new Promise((resolve, reject) => {
            connection.beginTransaction((err) => {
                if (err) {
                    reject(err);
                }
                let selectAllUsersSql = 'SELECT uid,username,mobile,registerDate,gender,birthday FROM users';
                connection.query(selectAllUsersSql, (error, queryResult) => {
                    if (error) {
                        connection.rollback(() => {
                            reject(error);
                        });

                    }
                    connection.commit((error) => {
                        if (error) {
                            connection.rollback(() => {
                                reject(error);
                            });
                        }
                        resolve(queryResult);
                    });
                })
            })
        });
    }
}

module.exports = User;