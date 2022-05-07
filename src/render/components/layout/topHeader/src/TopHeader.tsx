import { defineComponent} from 'vue'

// 状态组件需要使用 defineComponent
export default defineComponent({
  name: 'TopHeader',
  setup() {
    return () => (
      <>
        <div>TopHeader</div>
      </>
    )
  }
})
