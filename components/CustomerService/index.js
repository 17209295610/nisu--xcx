Component({
  data: {
    isExpanded: false,
    isCalling: false,
    messages: []
  },

  methods: {
    toggleExpand() {
      this.setData({
        isExpanded: !this.data.isExpanded
      })
    },

    // 开始语音通话
    startCall() {
      if (this.data.isCalling) return

      wx.showModal({
        title: '语音通话',
        content: '是否开始与客服进行语音通话？',
        success: res => {
          if (res.confirm) {
            this.setData({ isCalling: true })
            // 这里接入实际的语音通话SDK
            wx.showToast({
              title: '语音通话功能开发中',
              icon: 'none'
            })
          }
        }
      })
    },

    // 结束语音通话
    endCall() {
      this.setData({ isCalling: false })
    },

    // 发送消息
    sendMessage(e) {
      const { value } = e.detail
      if (!value.trim()) return

      const newMessage = {
        content: value,
        type: 'user',
        timestamp: new Date().getTime()
      }

      this.setData({
        messages: [...this.data.messages, newMessage]
      })

      // 模拟客服回复
      setTimeout(() => {
        const reply = {
          content: '您好，我是AI客服小泥人，很高兴为您服务！',
          type: 'service',
          timestamp: new Date().getTime()
        }
        this.setData({
          messages: [...this.data.messages, reply]
        })
      }, 1000)
    }
  }
})
