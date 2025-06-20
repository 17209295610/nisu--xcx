Page({
  data: {
    defaultImage: '../../assets/images/default-banner.png' // 使用已有的默认图片
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '历史文化'
    })
  },

  // 图片加载失败时的处理函数
  onImageError: function (e) {
    console.error('图片加载失败', e)
    // 当图片加载失败时，设置为默认图片
    const index = e.currentTarget.dataset.index
    if (index !== undefined) {
      const key = `imageList[${index}].url`
      this.setData({
        [key]: this.data.defaultImage
      })
    }
  },

  // 分享功能
  onShareAppMessage: function () {
    return {
      title: '凤翔泥塑历史文化 - 非遗传承',
      path: '/pages/history/index'
    }
  }
})
