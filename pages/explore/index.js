Page({
  data: {
    exploreList: [],
    loading: false
  },

  onLoad() {
    this.loadExploreData()
  },

  onPullDownRefresh() {
    this.loadExploreData()
  },

  loadExploreData() {
    this.setData({ loading: true })
    // TODO: 从服务器加载探索数据
    setTimeout(() => {
      this.setData({
        exploreList: [
          {
            id: 1,
            title: '凤翔泥塑的历史渊源',
            cover: '/assets/icons/default-profile.png',
            desc: '凤翔泥塑距今已有3000多年历史...'
          },
          {
            id: 2,
            title: '泥塑制作工艺',
            cover: '/assets/icons/default-profile.png',
            desc: '传统凤翔泥塑制作工艺包括选料、捏塑...'
          }
        ],
        loading: false
      })
      wx.stopPullDownRefresh()
    }, 1000)
  }
})
