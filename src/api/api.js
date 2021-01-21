import http from '../unit/http'

export default {
  // eg
  getMagnateOauthAPI() {
    return http.get('/magnate/oauth')
  },
}
