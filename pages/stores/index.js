// pages/stores/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stores: [],
    selectStore: {},
    phone: "",
    persons: "",
    type: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.phone = options.phone
    this.data.persons = options.persons
    this.data.type = options.type
    if (options.add) {
      wx.setNavigationBarTitle({
        title: "我的店铺"
      })
    }
    console.log(options)
    let data = []
    for(var i = 0 ; i < 20 ; i++) {
      data[i] = {
        id: i,
        name: "海底捞",
        address: "江苏省南京市秦淮区中山南路海底捞",
        pic: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4150680067,1865486054&fm=27&gp=0.jpg",
        status: 1,
        lat: 32.0668239544,//纬度
        lng: 118.7924141061,//经度
      }
    }
    this.setData({
      stores: data
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
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 4000)
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
  selectStore: function(event){
    let index = event.currentTarget.dataset.index
    let store = this.data.stores[index]
    this.data.selectStore = store
    if (store) {
      let url = `/pages/result/index?type=${this.data.type}&id=${store.id}&name=${store.name}&phone=${this.data.phone}&persons=${this.data.persons}`
      wx.navigateTo({
        url: url
      })
    }
  },
  clickShowMap: function(event) {
    let index = event.currentTarget.dataset.index
    let store = this.data.stores[index]
    console.log(store)
    store && wx.openLocation({
      latitude: store.lat,
      longitude: store.lng,
      scale: 28,
      name: store.name,
      address: store.address
    })
  }
})