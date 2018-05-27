//logs.js
const util = require('../../utils/util.js')

const app = getApp()

Page({
  data: {
    logs: [],
    userInfo: {}
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      userInfo: app.globalData.userInfo
    })
    console.log(wx.getStorageSync('logs'))
    getCurrentPages().forEach(page => console.log(page.route))
  },
  about: function() {
    wx.navigateTo({
      url: '/pages/about/index',
    })
  },
  myTickets: function() {

  },
  myStores: function() {
    wx.navigateTo({
      url: '/pages/stores/index?add=1',
    })
  }
})
