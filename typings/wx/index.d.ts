/// <reference path="./types/index.d.ts" />

declare namespace WechatMiniprogram {
  interface Wx {
    showLoading(object: { title: string }): void
    hideLoading(): void
    showToast(object: { title: string; icon: 'success' | 'error' | 'loading' | 'none' }): void
    stopPullDownRefresh(): void
    cloud: {
      callFunction(object: { name: string; data?: any }): Promise<any>
    }
  }
}

declare const wx: WechatMiniprogram.Wx

declare function Page<
  T extends WechatMiniprogram.Page.Options<
    WechatMiniprogram.Page.DataOption,
    WechatMiniprogram.Page.CustomOption
  >
>(options: T): void
