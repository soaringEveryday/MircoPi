// pages/result/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    id: "",
    pic: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4150680067,1865486054&fm=27&gp=0.jpg",
    name: "",
    success: false,
    phone: "",
    persons: "",
    result: "21",
    resultText: "",
    btnText:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let btnText
    if (!this.data.success && options.type == "ticket") {
      btnText = "取号"
    } else if (options.type == "given"){
      btnText = "发号完成"
    }
    this.setData({
      type: options.type,
      id: options.id,
      name: options.name,
      phone: options.phone,
      persons: options.persons,
      btnText: btnText
    })
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
  doFinish: function() {
    if (this.data.type == 'ticket' && this.data.success) {
      console.log("hello")
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
    let resultText = `取号码：${this.data.result}`
    this.setData({
      success: true,
      btnText: "完成",
      resultText: resultText
    })
  }
})