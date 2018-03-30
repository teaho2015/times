import wepy from 'wepy'

export default class utilMixin extends wepy.mixin {

   formatTime(time) {
    if (typeof time !== 'number' || time < 0) {
      return time
    }

    let hour = parseInt(time / 3600)
    time = time % 3600
    let minute = parseInt(time / 60)
    time = time % 60
    let second = time

    return ([hour, minute, second]).map(function (n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    }).join(':')
  }

   formatDateTime(date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()

    return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
  }

  formatLocation(longitude, latitude) {
    if (typeof longitude === 'string' && typeof latitude === 'string') {
      longitude = parseFloat(longitude)
      latitude = parseFloat(latitude)
    }

    longitude = longitude.toFixed(2)
    latitude = latitude.toFixed(2)

    return {
      longitude: longitude.toString().split('.'),
      latitude: latitude.toString().split('.')
    }
  }

  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}




