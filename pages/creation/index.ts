interface Step {
  id: number
  name: string
}

interface Theme {
  id: number
  name: string
  icon: string
}

interface Guidance {
  id: number
  title: string
  description: string
  imageUrl: string
}

interface Feedback {
  id: number
  title: string
  score: number
  description: string
}

type PageDataType = {
  currentStep: number
  steps: Step[]
  selectedTheme: number | null
  themes: Theme[]
  aiGuidance: Guidance[]
  currentTip: string
  tipIndex: number
  tips: string[]
  uploadedImages: string[]
  aiFeedback: Feedback[]
  feedbackSummary: string
}

Page<PageDataType>({
  data: {
    currentStep: 0,
    steps: [
      { id: 1, name: '选择主题' },
      { id: 2, name: 'AI指导' },
      { id: 3, name: '创作过程' },
      { id: 4, name: 'AI评估' }
    ],
    selectedTheme: null,
    themes: [
      {
        id: 1,
        name: '十二生肖',
        icon: '/images/themes/zodiac.png'
      },
      {
        id: 2,
        name: '民间故事',
        icon: '/images/themes/folklore.png'
      },
      {
        id: 3,
        name: '戏曲人物',
        icon: '/images/themes/opera.png'
      },
      {
        id: 4,
        name: '传统吉祥',
        icon: '/images/themes/blessing.png'
      },
      {
        id: 5,
        name: '现代创意',
        icon: '/images/themes/modern.png'
      }
    ],
    aiGuidance: [
      {
        id: 1,
        title: '造型要点',
        description: '注意人物比例，头部与身体比例约为1:6，突出特征。',
        imageUrl: '/images/guidance/proportion.jpg'
      },
      {
        id: 2,
        title: '细节处理',
        description: '面部表情要生动，服饰纹理要细腻。',
        imageUrl: '/images/guidance/detail.jpg'
      }
    ],
    currentTip: '准备工具：泥料、工具、颜料等',
    tipIndex: 0,
    tips: [
      '准备工具：泥料、工具、颜料等',
      '揉泥：使泥料均匀，去除气泡',
      '制作主体：先大后小，由粗到细',
      '细节雕刻：注意力度，保持耐心',
      '晾干：自然阴干，避免阳光直射',
      '上色：由浅到深，层次分明'
    ],
    uploadedImages: [],
    aiFeedback: [
      {
        id: 1,
        title: '造型准确度',
        score: 85,
        description: '人物比例协调，特征突出。'
      },
      {
        id: 2,
        title: '细节完整度',
        score: 90,
        description: '服饰纹理清晰，面部表情生动。'
      },
      {
        id: 3,
        title: '技法运用',
        score: 88,
        description: '泥料处理均匀，工具使用熟练。'
      }
    ],
    feedbackSummary: '作品整体表现优秀，充分体现了传统工艺特色，建议在细节处理上可以更加精细。'
  },

  onLoad() {
    // 页面加载时的处理
  },

  // 选择主题
  selectTheme(e: WechatMiniprogram.BaseEvent) {
    const id = e.currentTarget.dataset.id as number
    this.setData({
      selectedTheme: id
    })
  },

  // 预览图片
  previewImage(e: WechatMiniprogram.BaseEvent) {
    const url = e.currentTarget.dataset.url as string
    wx.previewImage({
      urls: [url],
      current: url
    })
  },

  // 上一个提示
  prevTip() {
    if (this.data.tipIndex > 0) {
      const newIndex = this.data.tipIndex - 1
      this.setData({
        tipIndex: newIndex,
        currentTip: this.data.tips[newIndex]
      })
    }
  },

  // 下一个提示
  nextTip() {
    if (this.data.tipIndex < this.data.tips.length - 1) {
      const newIndex = this.data.tipIndex + 1
      this.setData({
        tipIndex: newIndex,
        currentTip: this.data.tips[newIndex]
      })
    }
  },

  // 选择图片
  async chooseImage() {
    try {
      const res = await wx.chooseMedia({
        count: 9 - this.data.uploadedImages.length,
        mediaType: ['image'],
        sourceType: ['album', 'camera']
      })

      const newImages = res.tempFiles.map(file => file.tempFilePath)
      this.setData({
        uploadedImages: [...this.data.uploadedImages, ...newImages]
      })
    } catch (error) {
      console.error('选择图片失败：', error)
    }
  },

  // 删除图片
  deleteImage(e: WechatMiniprogram.BaseEvent) {
    const index = e.currentTarget.dataset.index as number
    const newImages = [...this.data.uploadedImages]
    newImages.splice(index, 1)
    this.setData({
      uploadedImages: newImages
    })
  },

  // 上一步
  prevStep() {
    if (this.data.currentStep > 0) {
      this.setData({
        currentStep: this.data.currentStep - 1
      })
    }
  },

  // 下一步
  nextStep() {
    if (this.data.currentStep < this.data.steps.length - 1) {
      this.setData({
        currentStep: this.data.currentStep + 1
      })
    }
  },

  // 完成创作
  finishCreation() {
    wx.showToast({
      title: '创作完成',
      icon: 'success'
    })
    // TODO: 保存创作结果
  }
})
