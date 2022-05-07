import type { ExtractPropTypes, PropType } from 'vue'
export const CloseMenuTypes = () => ({
  prefixCls: String, // 样式前缀
  onClick: {
    // 点击事件
    type: Function as PropType<(event: MouseEvent) => void>
  },
  onMousedown: {
    // 鼠标按下事件
    type: Function as PropType<(event: MouseEvent) => void>
  }
})

export type CloseMenuTypes = Partial<ExtractPropTypes<ReturnType<typeof CloseMenuTypes>>>

export default CloseMenuTypes
