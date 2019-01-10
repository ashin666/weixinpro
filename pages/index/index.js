Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperPage:0,
    slide_courses:[],
    new_courses:[],
    likes_courses:[],
    recommended_courses:[]
  },
  swiperChange:function(e){
    // console.log(e)
    this.setData({
      swiperPage:e.detail.current
    })
  },
  // changeIndicatorDots: function (e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.request({
      url: 'https://itfun.tv/api/v1/home.json', //仅为示例，并非真实的接口地址
      
      header: {
        'content-type': 'application/json' // 默认值
      },
     success:(res) =>{
       this.setData({
         new_courses: res.data.new_courses,
         slide_courses: res.data.slide_courses,
         likes_courses: res.data.likes_courses,
         recommended_courses: res.data.recommended_courses

       })
     }
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
    
  }
})
