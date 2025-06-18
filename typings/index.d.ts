/// <reference path="./types/index.d.ts" />

declare namespace WechatMiniprogram {
  interface BaseEvent {
    type: string
    currentTarget: {
      dataset: Record<string, any>
    }
    target: {
      dataset: Record<string, any>
    }
    timeStamp: number
  }

  interface ICustomShareContent {
    title: string
    path: string
    imageUrl?: string
  }

  interface IPageInstanceMethods<D extends Record<string, any> = Record<string, any>> {
    setData: (data: Partial<D>, callback?: () => void) => void
  }

  interface PageInstance<TData extends Record<string, any>, TCustom extends Record<string, any>>
    extends IPageInstanceMethods<TData> {
    data: TData
    options: Record<string, string>
    onLoad?: (query: Record<string, string>) => void
    onReady?: () => void
    onShow?: () => void
    onHide?: () => void
    onUnload?: () => void
    onPullDownRefresh?: () => void
    onReachBottom?: () => void
    onShareAppMessage?: () => ICustomShareContent
    onPageScroll?: (options: { scrollTop: number }) => void
    onTabItemTap?: (item: { index: string; pagePath: string; text: string }) => void
  }

  interface Wx {
    navigateTo(options: { url: string; success?: () => void; fail?: () => void }): void
    switchTab(options: { url: string; success?: () => void; fail?: () => void }): void
    showLoading(options: { title: string; mask?: boolean }): void
    hideLoading(): void
    showToast(options: {
      title: string
      icon?: 'success' | 'error' | 'loading' | 'none'
      duration?: number
    }): void
  }
}

declare const wx: WechatMiniprogram.Wx

declare function Page<
  TData extends Record<string, any>,
  TCustom extends Record<string, any> &
    ThisType<TCustom & WechatMiniprogram.PageInstance<TData, TCustom>>
>(options: TCustom & WechatMiniprogram.PageInstance<TData, TCustom>): void
