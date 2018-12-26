/*
 * @Author: duuliy 
 * @Date: 2018-11-12 11:25:10 
 * @Last Modified by: duuliy
 * @Last Modified time: 2018-11-12 11:25:10 
 * Vue全局的方法,过滤器,指令 等等
 */
import Vue from 'vue'

import { MessageBox } from "mint-ui";





Vue.prototype.$imgOnError = function(e) {
  e.target.src=randomImg();
  
}
Vue.prototype.$testPhone = function(phoneNum) {
    return  /^1[3|4|5|6|7|8]\d{9}$/.test(phoneNum)?true:false
}
Vue.prototype.$testEmail = function(email) {
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email)?true:false
}

Vue.prototype.$Guid = function() {
	function S4() {
		return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	return(S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

Vue.prototype.$formatMainList = function({articleList,ADlist}) {
  let mainList=[];
  if(!ADlist){
    articleList.forEach(item=>{
      mainList.push({
        type:'us',
        data:item,
      })
    })
    return mainList
  }
}

Vue.prototype.$showAndGoToApp = function(msg) {
  MessageBox({
    title: "",
    message: msg,
    showCancelButton: true,
    confirmButtonText:'前往App'
  }).then(action => {
    if(action==='confirm'){
      openKgApp();
    }
  });
}

Vue.prototype.$openApp = function() {
  openKgApp();
}



Vue.filter('formatTime', function(timeStemp,type=true) {
   return formatTime(timeStemp,type)
});

Vue.filter('formatImgAddr', function(value) {
   return formatImgAddr(value,100)
});

Vue.filter('formatImgAddr560', function(value) {
   return formatImgAddr(value,560)
});


//详情页相关过滤器
Vue.filter('formatArticleType', function(val) {
  if(val==1){
    return "原创"
  }

  if(val==2){
    return "转载"
  }
  return ''
});




Vue.filter('articleTagnamesToArray', function(str) {
  if(!str){
    return []
  }
  let arr=str.split(',')
  return arr
});





