import $ from 'jquery'

module.exports = {
  protocal: 'http://',
  host: 'localhost',
  port: 3000,

  url() {
    return this.protocal + this.host + ':' + this.port + '/'
  },

  get(resource, params) {
    let deferred = $.Deferred()
    $.get(this.url() + resource).done(function (data) {
      deferred.resolve(data)
    }).fail(function (err) {
      deferred.reject()
    })
    return deferred
  },

  post(resource, params) {
    // TODO: implement
  }
}
