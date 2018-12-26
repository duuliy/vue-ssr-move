// import Vue from 'vue'
import fetch from '@/plugins/http'

//获取栏目类
const GetLanguages=()=>fetch('get', '/api/DingTalk/GetOptions')

const TranslateFileAsync = data => fetch('post', '/api/Translate/TranslateFileAsync', data)

export { GetLanguages,TranslateFileAsync}