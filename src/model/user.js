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
     * @param {*用户名username，密码password，手机号mobile} paramUser 
     * @param {*添加用户成功回调函数} callback 
     */
    addUser(paramUser) {
        let {
            username,
            password,
            mobile
        } = paramUser;
        let nowStr = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

        let user = {
            username,
            password: cryptoPassword(password),
            registerDate: nowStr,
            mobile
        };

        return new Promise((resolve, reject) => {
            connection.beginTransaction((err) => {
                if (err) { reject(err); }
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
                    })
                });
            });
        });
    },

    getAllUsers() {
        let sql = 'INSERT INTO users SET ?';

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