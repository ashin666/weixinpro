Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    categories:[],
    courses:[],
    changing:false,
    height:0,
  },
  stopTouchMove:function(){
    return false

  },
  bindChange:function(e){
    this.setData({
      currentTab:e.detail.current,
     })
  },
  switchNav: function(e){
    console.log(e)
    if(this.data.currentTab === e.target.dataset.current){
      return false;
    }else{
      this.setData({
        currentTab:e.target.dataset.index,
      })
      wx.request({
        url: `https://itfun.tv/api/v1/categories/${e.target.dataset.slug}.json`,
        success:(res)=>{
          var length = res.data.courses.length;
          console.log(res)
        this.setData({
          courses: res.data.courses,
          height:410 * length
        })
        }
      })
    }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    wx.request({
      url: 'https://itfun.tv/api/v1/categories.json',
      success:(res)=>{
        console.log(res),
        this.setData({
          categories: res.data.categories,
        })
      }
    }),
      wx.request({
        url: `https://itfun.tv/api/v1/categories/front_end.json`,
        success: (res) => {
          var length = res.data.courses.length;
          console.log(res),
            this.setData({
             courses: res.data.courses,
            height: 410 * length
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
