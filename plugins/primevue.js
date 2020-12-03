import Vue from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Message from 'primevue/message'
import InlineMessage from 'primevue/inlinemessage'
import Ripple from 'primevue/ripple'
import Dialog from 'primevue/dialog'
import Toolbar from 'primevue/toolbar'
import SplitButton from 'primevue/splitbutton'

Vue.use(ToastService)

Vue.component('InputText', InputText)
Vue.component('Button', Button)
Vue.component('Toast', Toast)
Vue.component('Message', Message)
Vue.component('InlineMessage', InlineMessage)
Vue.component('Dialog', Dialog)
Vue.component('Toolbar', Toolbar)
Vue.component('SplitButton', SplitButton)
Vue.prototype.$primevue = { ripple: true }
Vue.directive('ripple', Ripple)
