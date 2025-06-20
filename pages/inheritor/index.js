Page({
  data: {
    // 传承人头像图片路径
    huShenImage: '/assets/images/非遗传承人/hushen.jpg',
    huXiaohongImage: '/assets/images/非遗传承人/huxiaohong.jpg',
    hanJianbinImage: '/assets/images/非遗传承人/hanjianbin.jpg'
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '传承人介绍'
    })
  },

  // 图片加载失败时的处理函数
  onImageError: function (e) {
    console.error('图片加载失败', e)
    const type = e.currentTarget.dataset.type
    this.setData({
      [type]: '/assets/images/default-avatar.png'
    })
  },

  // 分享功能
  onShareAppMessage: function () {
    return {
      title: '凤翔泥塑传承人 - 胡深世家',
      path: '/pages/inheritor/index'
    }
  }
})
