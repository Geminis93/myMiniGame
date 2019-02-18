//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: null,
    className: null
  },
  //事件处理函数
  bindViewTap: function() {
    /* wx.navigateTo({
      url: '../logs/logs'
    }) */
    wx.showToast({
      title: '成功',
      icon: 'success',
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        motto: `Hello ${app.globalData.userInfo.nickName}`,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          motto: `Hello ${app.globalData.userInfo.nickName}`,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            motto: `Hello ${app.globalData.userInfo.nickName}`,
          })
        }
      })
    }
  },
  
  onShow() {
    this.setData({
      className: 'userinfo-avatar avatar'
    });
    // setTimeout(() => {
    //   wx.navigateTo({
    //     url: '../logs/logs',
    //   })
    // }, 2000);
  
    // const animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease',
    // })

    // this.animation = animation

    // setTimeout(() => {
    //   animation.scale(0.7, 0.7).translate(-200, -140).step();
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }, 1500);
  },

  onReady() {
    // wx.createSelectorQuery().select('.userinfo-avatar').boundingClientRect((rect) => {
    //   console.log('a --- ', rect);
    // }).exec();
  },

  getUserInfo: function(e) {
    console.log('---- ', e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
