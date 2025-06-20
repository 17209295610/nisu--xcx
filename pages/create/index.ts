interface IPageData {
  currentTool: string
  aiInput: string
  suggestions: string[]
  canvas: WechatMiniprogram.Canvas | null
  ctx: WechatMiniprogram.CanvasContext | null
}

interface IPageInstance {
  data: IPageData
  initCanvas: () => Promise<void>
  selectTool: (e: WechatMiniprogram.TouchEvent) => void
  onAIInputChange: (e: WechatMiniprogram.TextareaInput) => void
  generateWithAI: () => Promise<void>
  saveCreation: () => void
  shareCreation: () => void
}

Page<IPageData, IPageInstance>({
  data: {
    currentTool: 'sketch',
    aiInput: '',
    suggestions: [],
    canvas: null,
    ctx: null
  },

  onLoad() {
    this.initCanvas()
  },

  // 初始化画布
  async initCanvas() {
    try {
      const query = wx.createSelectorQuery()
      query
        .select('#mainCanvas')
        .fields({ node: true, size: true })
        .exec(res => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')

          const dpr = wx.getSystemInfoSync().pixelRatio
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctx.scale(dpr, dpr)

          this.setData({
            canvas,
            ctx
          })
        })
    } catch (error) {
      console.error('Canvas initialization failed:', error)
      wx.showToast({
        title: '画布初始化失败',
        icon: 'none'
      })
    }
  },

  // 选择工具
  selectTool(e: WechatMiniprogram.TouchEvent) {
    const tool = e.currentTarget.dataset.tool as string
    this.setData({
      currentTool: tool
    })
  },

  // AI输入变化处理
  onAIInputChange(e: WechatMiniprogram.TextareaInput) {
    this.setData({
      aiInput: e.detail.value
    })
  },

  // 调用AI生成
  async generateWithAI() {
    if (!this.data.aiInput.trim()) {
      wx.showToast({
        title: '请输入创作描述',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: 'AI思考中...'
    })

    try {
      // TODO: 调用AI服务API
      // 这里将来需要接入实际的AI服务
      const mockSuggestions = [
        '建议使用圆润的线条来塑造主体形状',
        '可以尝试添加更多细节来增加作品的层次感',
        '考虑从不同角度展示作品的特点'
      ]

      this.setData({
        suggestions: mockSuggestions
      })
    } catch (error) {
      console.error('AI generation failed:', error)
      wx.showToast({
        title: 'AI生成失败',
        icon: 'none'
      })
    } finally {
      wx.hideLoading()
    }
  },

  // 保存创作
  saveCreation() {
    if (!this.data.canvas) {
      wx.showToast({
        title: '画布未初始化',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '保存中...'
    })

    try {
      // TODO: 实现作品保存逻辑
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      })
    } catch (error) {
      console.error('Save creation failed:', error)
      wx.showToast({
        title: '保存失败',
        icon: 'none'
      })
    } finally {
      wx.hideLoading()
    }
  },

  // 分享创作
  shareCreation() {
    // TODO: 实现分享功能
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
})
