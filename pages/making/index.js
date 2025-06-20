Page({
  data: {
    currentStep: 1,
    steps: [
      {
        id: 1,
        title: '造型',
        image: '/assets/images/首页/制作工艺/1造型.jpg',
        description:
          '选用优质泥料，根据设计图纸进行初步造型，确定作品的基本形态。通过揉捏、塑形等手法，将泥料逐步塑造成所需的形状。'
      },
      {
        id: 2,
        title: '翻模',
        image: '/assets/images/首页/制作工艺/2翻模.jpg',
        description:
          '制作石膏模具，为后续批量生产做准备，保证作品的规格统一。这一步骤需要细心操作，确保模具的每个细节都完整准确。'
      },
      {
        id: 3,
        title: '入模',
        image: '/assets/images/首页/制作工艺/3入模.jpg',
        description:
          '将调制好的泥料注入模具中，确保泥料均匀分布。注意控制泥料的湿度和稠度，避免产生气泡和裂缝。'
      },
      {
        id: 4,
        title: '出模',
        image: '/assets/images/首页/制作工艺/4出模.jpg',
        description:
          '待泥料初步定型后，小心取出泥坯，避免变形。这个环节需要耐心和稳定的手法，确保作品完整性。'
      },
      {
        id: 5,
        title: '插铁钎',
        image: '/assets/images/首页/制作工艺/5插铁钎.jpg',
        description:
          '在需要的位置插入铁钎，增强作品的结构强度。这一步对作品的长期保存和展示至关重要。'
      },
      {
        id: 6,
        title: '合货',
        image: '/assets/images/首页/制作工艺/6合货.jpg',
        description:
          '将分件制作的部分进行组合，确保各部分紧密结合。需要特别注意各个部件之间的衔接和比例关系。'
      },
      {
        id: 7,
        title: '挂粉',
        image: '/assets/images/首页/制作工艺/7挂粉.jpg',
        description: '在泥坯表面涂抹白粉底，为后续上色做准备。均匀涂抹，确保表面光滑无瑕疵。'
      },
      {
        id: 8,
        title: '勾线',
        image: '/assets/images/首页/制作工艺/8勾线.jpg',
        description:
          '用细笔勾勒出作品的轮廓和细节线条。这一步最能体现工匠的技艺水平，需要稳定的手法和准确的眼光。'
      },
      {
        id: 9,
        title: '上色',
        image: '/assets/images/首页/制作工艺/9上色.jpg',
        description:
          '使用传统颜料，按照设计方案进行着色。色彩的搭配和晕染要求极高的审美能力和技术水平。'
      },
      {
        id: 10,
        title: '上漆',
        image: '/assets/images/首页/制作工艺/10上漆.jpg',
        description:
          '涂抹保护漆，增加作品的光泽度和保护性。这道工序将决定作品的最终效果和保存寿命。'
      },
      {
        id: 11,
        title: '成品',
        image: '/assets/images/首页/制作工艺/11成品.jpg',
        description:
          '最终成品展示，传统工艺与现代审美的完美结合。每件作品都凝聚着匠人的智慧和心血。'
      }
    ]
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '制作工艺'
    })
  },

  // 切换到上一步
  prevStep: function () {
    if (this.data.currentStep > 1) {
      this.setData({
        currentStep: this.data.currentStep - 1
      })
    }
  },

  // 切换到下一步
  nextStep: function () {
    if (this.data.currentStep < 11) {
      this.setData({
        currentStep: this.data.currentStep + 1
      })
    }
  },

  // 跳转到指定步骤
  jumpToStep: function (e) {
    const step = e.currentTarget.dataset.step
    this.setData({
      currentStep: step
    })
  },

  // 滑动切换步骤
  onSwiperChange: function (e) {
    this.setData({
      currentStep: e.detail.current + 1
    })
  },

  // 预览图片
  previewImage: function (e) {
    const current = e.currentTarget.dataset.url
    const urls = this.data.steps.map(step => step.image)
    wx.previewImage({
      urls: urls,
      current: current
    })
  }
})
 