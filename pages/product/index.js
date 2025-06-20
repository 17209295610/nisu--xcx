Page({
  data: {
    currentTab: 0, // 当前选中的标签索引
    titles: ['十二生肖泥塑', '十二生肖挂片', '非遗传承人'], // 标题数组
    contentVisible: true, // 控制内容显示状态
    lastTab: null, // 记录上一次选中的标签
    previewImage: '../../assets/images/非遗传承人/hushen.jpg', // 更新默认预览图片路径
    products: {
      guapian: [
        { id: 1, name: '鼠', image: '../../assets/images/挂片/鼠.jpg' },
        { id: 2, name: '牛', image: '../../assets/images/挂片/牛.jpg' },
        { id: 3, name: '虎', image: '../../assets/images/挂片/虎.jpg' },
        { id: 4, name: '兔', image: '../../assets/images/挂片/兔.jpg' },
        { id: 5, name: '龙', image: '../../assets/images/挂片/龙.jpg' },
        { id: 6, name: '蛇', image: '../../assets/images/挂片/蛇.jpg' },
        { id: 7, name: '马', image: '../../assets/images/挂片/马.jpg' },
        { id: 8, name: '羊', image: '../../assets/images/挂片/羊.jpg' },
        { id: 9, name: '猴', image: '../../assets/images/挂片/猴.jpg' },
        { id: 10, name: '鸡', image: '../../assets/images/挂片/鸡.jpg' },
        { id: 11, name: '狗', image: '../../assets/images/挂片/狗.jpg' },
        { id: 12, name: '猪', image: '../../assets/images/挂片/猪.jpg' }
      ]
    }
  },

  onLoad: function () {
    // 页面加载时初始化状态
    this.setData({
      currentTab: 0,
      contentVisible: true
    })
  },

  // 切换标签
  switchTab: function (e) {
    const index = parseInt(e.currentTarget.dataset.index)

    // 更新预览图片 - 保持使用默认图片
    const previewImage = '../../assets/images/非遗传承人/hushen.jpg'

    // 更新状态，触发动画
    this.setData(
      {
        currentTab: index,
        contentVisible: false,
        previewImage: previewImage
      },
      () => {
        setTimeout(() => {
          this.setData({
            contentVisible: true
          })
        }, 300)
      }
    )
  }
})
