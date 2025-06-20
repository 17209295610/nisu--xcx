'use strict'
Page({
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
  initCanvas() {
    const query = wx.createSelectorQuery()
    query
      .select('#mainCanvas')
      .fields({ node: true, size: true })
      .exec(res => {
        try {
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
        } catch (error) {
          console.error('Canvas initialization failed:', error)
          wx.showToast({
            title: '画布初始化失败',
            icon: 'none'
          })
        }
      })
  },
  // 选择工具
  selectTool(e) {
    const tool = e.currentTarget.dataset.tool
    this.setData({
      currentTool: tool
    })
  },
  // AI输入变化处理
  onAIInputChange(e) {
    this.setData({
      aiInput: e.detail.value
    })
  },
  // 调用AI生成
  generateWithAI() {
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

    // TODO: 调用AI服务API
    // 这里将来需要接入实际的AI服务
    setTimeout(() => {
      const mockSuggestions = [
        '建议使用圆润的线条来塑造主体形状',
        '可以尝试添加更多细节来增加作品的层次感',
        '考虑从不同角度展示作品的特点'
      ]

      this.setData({
        suggestions: mockSuggestions
      })

      wx.hideLoading()
    }, 1000)
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

    // TODO: 实现作品保存逻辑
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      })
    }, 500)
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
