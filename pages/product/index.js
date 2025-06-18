Page({
  data: {
    productList: [],
    loading: false,
    categories: ['全部', '人物', '动物', '植物', '其他'],
    currentCategory: '全部'
  },

  onLoad() {
    this.loadProductData()
  },

  onPullDownRefresh() {
    this.loadProductData()
  },

  switchCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ currentCategory: category })
    this.loadProductData(category)
  },

  loadProductData(category = '全部') {
    this.setData({ loading: true })
    // TODO: 从服务器加载产品数据
    setTimeout(() => {
      this.setData({
        productList: [
          {
            id: 1,
            name: '张飞泥塑',
            price: 299,
            cover: '/assets/icons/default-profile.png',
            category: '人物',
            desc: '传统凤翔泥塑作品，纯手工制作'
          },
          {
            id: 2,
            name: '十二生肖-龙',
            price: 199,
            cover: '/assets/icons/default-profile.png',
            category: '动物',
            desc: '精美生肖泥塑，寓意吉祥'
          }
        ],
        loading: false
      })
      wx.stopPullDownRefresh()
    }, 1000)
  }
})
