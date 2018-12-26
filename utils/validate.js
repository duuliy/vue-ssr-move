/*
 * @Author: duuliy
 * @Date: 2018-11-12 11:17:11 
 * @Last Modified by: duuliy
 * @Last Modified time:  2018-11-12 11:17:11 
 */


//验证
var Rxports = {
    //手机号
    validatePhone(value) {
      return /^1[1|2|3|4|5|6|7|8|9]\d{9}$/.test(value)
      
    },
  
    validateYzm(value) {
      return /^\d{6}$/.test(value)
    },
  
    validateYqm(value) {
      return /^[A-Za-z0-9]{6}$/.test(value)
    },
  
  
    validateChinaPhone(value) {
      return /^1[23456789]\d{9}$/.test(value)
    },
    //邮箱
    validateMail(value) {
      return /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(value)
    },
    //昵称
    validateName(value) {
      return /^[a-zA-Z\u4E00-\u9FA5\._\$!@#^*()+~`\/?,%&\*\!]{1,20}$/.test(value)
    },
    //密码
    validatePassWord(value) {
      return /^[0-9a-zA-Z\._\$!@#^*()+~`\/?,%&\*\!]{6,20}$/.test(value)
    },
    //交易密码
    validateTraderPwd(value) {
      return /^[\d]{6}$/.test(value)
    },
    //身份证
    validateIdCard(value) {
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
  
      // return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)
    },
    validateCompanyName(value) {
      // return /^[a-zA-Z\u4E00-\u9FA5]{2,15}$/.test(value)
      // return /^[a-zA-Z\u4E00-\u9FA5\d]{2,150}$/.test(value)
      var t = value.replace(/[\u4e00-\u9fa5]/g, '22'); //替换中文
      var reg = /^[A-Za-z0-9\s]{1,600}$/;
      // var reg = /^\w{1,10}$/;
      return (reg.test(t));
    },
    //真实姓名
    validateRealName(value) {
      return /^[a-zA-Z\u4E00-\u9FA5\·]{2,20}$/.test(value)
    },
    //正整数
    validateInteger(value) {
      return /^[1-9]\d*$/.test(value)
    },
    //正数
    validatePosNum(value) {
      return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)
    },
    // 去掉首尾空格
    validateTrimStr(value) {
      return value.replace(/(^\s*)|(\s*$)/g, "")
    },
    //去掉文章中空格
    articleTrimStr(value) {
      return value.replace(/<\/?.+?>/g, "").replace(/ /g, "");
    },
    //校验用户昵称
    checkLength(v) {
      var t = v.replace(/[\u4e00-\u9fa5]/g, '22'); //替换中文
      var reg = /^[A-Za-z0-9\s._\$!@#^*()+~`\/?,%&\*\!]{1,30}$/;
      // var reg = /^\w{1,10}$/;
      return (reg.test(t));
    }
  
  };
//   /* 验证用户名长度 */
// export function isvalidUsername(str) {
//     if(str.length>=5 && str.length<=20){
//         return true
//     }else{
//         return false
//     }
// }

// /* 验证手机号 */
// export function isvalidUserPhone(str) {
//     const reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(166)|(199))+\d{8})$/;
//     return reg.test(str);
// }

// /* 验证邮箱用户名 */
// export function isvalidUserEmail(str) {
//     const reg =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return reg.test(str);
// }

// /* 验证密码长度 */
// export function isvalidUserPass(str) {
//     if(str.length>=8 && str.length<=18){
//         return true
//     }else{
//         return false
//     }
// }
  
  export default Rxports;
  