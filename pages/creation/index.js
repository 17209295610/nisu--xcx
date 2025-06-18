Page({
  data: {
    steps: [
      {
        title: '选择主题',
        desc: '选择您想要创作的泥塑主题'
      },
      {
        title: '设计构图',
        desc: 'AI辅助您进行作品构图设计'
      },
      {
        title: '制作指导',
        desc: '获取详细的制作步骤指导'
      },
      {
        title: '完成创作',
        desc: '展示您的作品成果'
      }
    ],
    currentStep: 0
  },

  onLoad() {
    // 页面加载时的初始化逻辑
  },

  nextStep() {
    if (this.data.currentStep < this.data.steps.length - 1) {
      this.setData({
        currentStep: this.data.currentStep + 1
      })
    }
  },

  prevStep() {
    if (this.data.currentStep > 0) {
      this.setData({
        currentStep: this.data.currentStep - 1
      })
    }
  }
})
