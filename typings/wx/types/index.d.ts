declare namespace WechatMiniprogram {
  interface Page {
    namespace Options {
      interface DataOption {
        [key: string]: any;
      }
      interface CustomOption {
        [key: string]: any;
      }
    }
    interface Options<D extends Options.DataOption, C extends Options.CustomOption> {
      data?: D;
      onLoad?(options: Record<string, string | undefined>): void;
      onReady?(): void;
      onShow?(): void;
      onHide?(): void;
      onUnload?(): void;
      onPullDownRefresh?(): void;
      onReachBottom?(): void;
      onShareAppMessage?(): {
        title: string;
        path: string;
        imageUrl?: string;
      };
      [key: string]: any;
    }
  }
} 