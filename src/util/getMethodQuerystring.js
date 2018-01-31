/**
 * 
 * get请求查询字符串转为对象
 */
const querystring = require('querystring');
function getMethodQuerystring(url) {
    //提取查询字符串
    let qsArr = (url || '').split('?');
    let qs = '';
    if (qsArr.length > 1) {
        qs = qsArr[1];
    }
    //获取查询字符串
    let qsObj = querystring.parse(qs);
    let paramObj = {};
    if (qsObj['param']) {
        paramObj = JSON.parse(qsObj['param']);
    }
    return paramObj;
}

module.exports = getMethodQuerystring;