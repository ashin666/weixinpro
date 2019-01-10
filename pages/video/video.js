// pages/video/video.js
var start_clientX;
var end_clientX;

const app = getApp();
const util = require("../../utils/util.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: wx.getSystemInfoSync().windowWidth,      // 搬过来
    chapter: {},
    video: '',
    body: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _ts = this;
    console.log(options)
    let id = options.id
    wx.request({
      url: `https://itfun.tv/api/v1/chapters/${id}.json`,
      success: (res) => {
        let data = app.towxml.toJson(
          res.data.chapter.body,               // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );
        //设置文档显示主题，默认'light'
        // data.theme = 'dark';

        //设置数据
        _ts.setData({
          body: data
        });
        console.log(res)
        console.log(res.data.chapter.video)
        this.setData({
          chapter: res.data.chapter,
          video: res.data.chapter.video,
        })
        console.log(this.video)
      }
    })
  },

  // 滑动开始
  touchstart: function (e) {
    start_clientX = e.changedTouches[0].clientX
  },
  // 滑动结束
  touchend: function (e) {
    end_clientX = e.changedTouches[0].clientX;
    if (end_clientX - start_clientX > 120) {
      this.setData({
        display: "block",
        translate: 'transform: translateX(' + this.data.windowWidth * 0.7 + 'px);'
      })
    } else if (start_clientX - end_clientX > 0) {
      this.setData({
        display: "none",
        translate: ''
      })
    }
  },
  // 头像
  showview: function () {
    this.setData({
      display: "block",
      translate: 'transform: translateX(' + this.data.windowWidth * 0.7 + 'px);'
    })
  },
  // 遮拦
  hideview: function () {
    this.setData({
      display: "none",
      translate: '',
    })
  }
})