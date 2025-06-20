Page({
  data: {
    userInfo: {},
    statusBarHeight: 0,
    // 默认图片
    defaultImage: '/assets/images/首页/历史文化.jpg',
    // 分类图片
    categoryImages: {
      zodiac: '/assets/images/首页/十二生肖.jpg',
      hanging: '/assets/images/首页/挂片.jpg',
      figure: '/assets/images/首页/历史人物.jpg'
    },
    // 轮播图数据
    bannerList: [
      {
        id: 1,
        imageUrl: '/assets/images/banner/banner1.jpg',
        title: '凤翔泥塑非遗传承'
      },
      {
        id: 2,
        imageUrl: '/assets/images/banner/banner2.jpg',
        title: '泥塑艺术展览'
      },
      {
        id: 3,
        imageUrl: '/assets/images/banner/banner3.jpg',
        title: '传统工艺展示'
      },
      {
        id: 4,
        imageUrl: '/assets/images/banner/banner4.jpg',
        title: '创新泥塑作品'
      }
    ],
    // 快捷导航数据
    quickNavList: [
      {
        id: 1,
        title: '历史',
        icon: '/assets/images/首页/历史文化.jpg',
        url: '/pages/history/index'
      },
      {
        id: 2,
        title: '传承人',
        icon: '/assets/images/首页/传承人.jpg',
        url: '/pages/inheritor/index'
      },
      {
        id: 3,
        title: '制作工艺',
        icon: '/assets/images/首页/制作工艺.jpg',
        url: '/pages/making/index'
      }
    ],
    // 分类数据
    toyCount: 12,
    hangingCount: 8,
    figureCount: 15
  },

  onLoad: function () {
    this.getUserInfo()
    this.getSystemInfo()
  },

  getUserInfo: function () {
    // 获取用户信息
  },

  onSearchInput: function (e) {
    // 处理搜索输入
  },

  onSearch: function (e) {
    // 执行搜索
  },

  navigateToProfile: function () {
    // 跳转到个人中心
  },

  // 获取系统信息
  getSystemInfo: function () {
    const systemInfo = wx.getSystemInfoSync()
    this.setData({
      statusBarHeight: systemInfo.statusBarHeight
    })
  },

  // Banner点击事件处理
  onBannerTap: function (e) {
    const item = e.currentTarget.dataset.item
    // 根据banner的id或类型进行页面跳转
    wx.navigateTo({
      url: `/pages/detail/index?id=${item.id}&type=banner`
    })
  },

  // 快捷导航点击事件
  onQuickNavTap: function (e) {
    const type = e.currentTarget.dataset.type
    const urls = {
      history: '/pages/history/index',
      inheritor: '/pages/inheritor/index',
      making: '/pages/making/index'
    }

    if (urls[type]) {
      wx.navigateTo({
        url: urls[type]
      })
    }
  },

  // 分类点击事件
  onCategoryTap: function (e) {
    const type = e.currentTarget.dataset.type
    // 跳转到产品页面，并传递分类参数
    wx.switchTab({
      url: `/pages/product/index?category=${type}`
    })
  },

  // 跳转到历史文化页面
  goToHistory: function () {
    wx.navigateTo({
      url: '/pages/history/index'
    })
  },

  // 跳转到传承人页面
  goToInheritor: function () {
    wx.navigateTo({
      url: '/pages/inheritor/index'
    })
  },

  // 跳转到制作工艺页面
  goToMaking: function () {
    wx.navigateTo({
      url: '/pages/making/index'
    })
  }
})
