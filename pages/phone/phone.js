// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    title: "",
    showPersonNumber: false,
    phone: "",
    persons: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.type = options.type
    if(options.type == "ticket") {
      this.setData({
        title: "取号基本信息",
        showPersonNumber: true
      })
    } else if (options.type == "given") {
      this.setData({
        title: "发号基本信息"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  selectStore: function() {
    let url = `/pages/stores/index?phone=${this.data.phone}&persons=${this.data.persons}&type=${this.data.type}`
    wx.navigateTo({
      url: url
    })
  },
  onNumberInput: function(event) {
    this.data.phone = event.detail.value
  },
  onPersonsInput: function (event) {
    this.data.persons = event.detail.value
  }
})