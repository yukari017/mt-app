import axios from '@/axios.js'

var api = {
  getSearchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultProducts () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  }
}

export default api
