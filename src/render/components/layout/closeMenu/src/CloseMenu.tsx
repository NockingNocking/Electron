import { defineComponent } from 'vue'
import { CloseMenuTypes } from './closeMenuTypes'
export { CloseMenuTypes }


export default defineComponent({
  name: 'CloseMenu',
  setup() {
    return () => (
      <>
        <div class="X-closeMenu">CloseMenu</div>
      </>
    )
  }
})
