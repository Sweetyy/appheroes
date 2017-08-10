<template>
    <div class="modal" :id="id" >
        <div class="modal-content">
            <div class="modal-header">
                <h4> {{ title }} </h4>
            </div>
            <div class="modal-body">
                 <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['id', 'title'],
  name: 'modal',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.modal {
    position: fixed;
    background: rgba(255,255,255,0.6);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.25s, opacity 0.25s;
}

.modal.show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.25s;
}

.modal-content {
    background: white;
    box-shadow: 0 6px 6px rgba(10,16,20,.15), 0 0 52px rgba(10,16,20,.12);
    padding: 24px;
    color: rgba(0,0,0,.87);
    border-radius: 4px;
    min-width: 200px;
}
</style>