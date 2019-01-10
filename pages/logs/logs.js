//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
  
//     <swiper class="swiper_content" current="{{curIdx}}" bindchange="swiperTab" style='height:{{scrollHeight}}px'>
//       <swiper-item>
//         <scroll-view class="scroll-y" scroll-y style='height:{{scrollHeight}}px' bindscrolltolower="onReachBottom">
//           <view wx: for="{{ list }}" wx:key>
//       <text> 内容一{{ item }}</text>
//     </view>
//         </scroll-view>
//   </swiper-item>
//     <swiper-item>
//       内容二
//   </swiper-item>
// </swiper >