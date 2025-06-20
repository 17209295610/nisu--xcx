Component({
  properties: {
    imageUrl: {
      type: String,
      value: ''
    }
  },

  data: {
    canvasWidth: 0,
    canvasHeight: 0,
    processedImageUrl: ''
  },

  methods: {
    processImage() {
      const that = this

      // 获取图片信息
      wx.getImageInfo({
        src: that.data.imageUrl,
        success(imageInfo) {
          // 设置canvas尺寸
          that.setData({
            canvasWidth: imageInfo.width,
            canvasHeight: imageInfo.height
          })

          // 获取canvas上下文
          const query = that.createSelectorQuery()
          query
            .select('#imageCanvas')
            .fields({ node: true, size: true })
            .exec(res => {
              const canvas = res[0].node
              const ctx = canvas.getContext('2d')

              // 创建图片对象
              const img = canvas.createImage()
              img.onload = () => {
                // 绘制图片
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                // 获取图片数据
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                const data = imageData.data

                // 处理图片数据，移除土黄色背景
                for (let i = 0; i < data.length; i += 4) {
                  const r = data[i]
                  const g = data[i + 1]
                  const b = data[i + 2]

                  // 检测土黄色范围 (根据实际颜色调整阈值)
                  if (r > 180 && g > 150 && b < 100) {
                    // 设置为透明
                    data[i + 3] = 0
                  }
                }

                // 将处理后的数据放回canvas
                ctx.putImageData(imageData, 0, 0)

                // 导出图片
                const processedImageUrl = canvas.toDataURL('image/png')
                that.setData({ processedImageUrl })

                // 触发成功事件
                that.triggerEvent('success', { url: processedImageUrl })
              }

              img.onerror = error => {
                console.error('图片加载失败:', error)
                that.triggerEvent('error', { error })
              }

              img.src = that.data.imageUrl
            })
        },
        fail(error) {
          console.error('获取图片信息失败:', error)
          that.triggerEvent('error', { error })
        }
      })
    }
  }
})
