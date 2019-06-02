import axios from 'axios'

class HttpClient {
  constructor(opt = {}) {
    this.opt = Object.assign(this.getDefaultOption(), opt)
    this.request = axios.create(this.opt)
  }

  getDefaultOption() {
    return {
      timeout: 3000
    }
  }

  reset() {
    this.request = axios.create(this.getDefaultOption())
  }

  addHeader(key, value) {}
  addHeaders(headers) {}

  /**
   * Call api with full response object with header & body
   * @param {string} path Endpoint
   * @param {string} method Http method
   * @param {object} params Requests data
   */
  api(path, method = 'get', params = {}) {
    return new Promise((resolve, reject) => {
      if (!path) {
        // path is required
        return reject(new Error('Used: api(path, method, params)'))
      }

      // add '/' to path if missing
      if (path[0] !== '/') {
        path = '/' + path
      }

      path = process.env.REACT_APP_API_URL + path
      if (path.indexOf('?') !== -1) {
        path += '&_t=' + Date.now()
      } else {
        path += '?_t=' + Date.now()
      }

      // support shorthand api(path, params)
      // method will default to get
      if (arguments.length === 2 && String(method) === '[object Object]') {
        params = method
        method = 'get'
      }

      method = method.toLowerCase()
      if (['get', 'post', 'put', 'delete'].indexOf(method) === -1) {
        return reject(
          new Error(
            `ERR: ${method} not allowed, only allow get, post, put, delete`
          )
        )
      }

      if (method === 'get') {
        params = { params: params }
      }

      /*eslint no-unexpected-multiline: 0*/
      this.request[method](path, params)
        .then(resolve)
        .catch(reject)
    })
  }

  /**
   * A shorthand of api method and returns only response body
   * @param {string} path
   * @param {string} params
   */
  get(path, params = {}) {
    return this.api(path, 'get', params).then(res => res.data)
  }

  /**
   * A shorthand of api method and returns only response body
   * @param {string} path
   * @param {string} data
   */
  post(path, data = {}) {
    return this.api(path, 'post', data).then(res => res.data)
  }

  all(requests) {
    return axios.all(requests)
  }

  spread(cb) {
    return axios.spread(cb)
  }
}

export default new HttpClient()
