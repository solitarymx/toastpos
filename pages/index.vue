/* eslint-disable prettier/prettier */
<template>
  <body>
    <div class="container p-text-center">
      <div>
        <h1 class="title">
          {{ title }}
        </h1>
        <!-- For Message -->
        <Button label="Show Message" @click="showMessage()" />
        <Message
          v-if="displayMessage != false"
          key="messages[0]"
          severity="warn"
          :closable="true"
          :sticky="false"
        >
          {{ messages[0] }}
        </Message>
        <!-- Enf Of Message -->

        <!-- For Toast -->
        <!-- <Toast position="bottom-center" class="p-toast-message-content" /> -->

        <Button label="Show" @click="showMessage()" />
        <Toast position="top-right" class="p-toast-message-content" />

        <!-- For Dialog -->

        <Button label="Show" @click="display = !display" />

        <Dialog :visible.sync="display">
          <template #header>
            <h3>Header</h3>
          </template>

          Content

          <template #footer>
            <Button
              label="No"
              icon="pi pi-times"
              class="p-button-text"
              @click="display = !display"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              autofocus
              @click="display = !display"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </body>
</template>

<script>
// eslint-disable-next-line no-unused-vars
export default {
  data() {
    return {
      title: 'Index',
      // messages: ['position = bottom-center'],
      messages: [
        { severity: 'info', content: 'This is Message Component' },
        { severity: 'success', content: 'Dynamic Success Message' },
        { severity: 'warn', content: 'Dynamic Warning Message' },
      ],
      display: false,
      displayMessage: false,
    }
  },
  methods: {
    showMessage() {
      if (this.displayMessage) {
        this.displayMessage = !this.displayMessage
        // eslint-disable-next-line no-console
        console.log('displayMessage = ', this.displayMessage)
      }
    },
    /*
    showMessage() {
      this.$toast.add({
        severity: 'error',
        summary: 'Error toast test',
        detail: this.messages[0].content,
        life: 3000,
        closable: true,
      })
    },
    */
  },
}
</script>
