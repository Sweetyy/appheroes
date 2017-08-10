<template>
    <div class="modal" :id="id">
        <div class="modal-content">
            <div class="modal-header">
                <h4> {{ title }} </h4>
            </div>
            <div class="modal-body">
                 <slot></slot>
            </div>
            <div class="modal-footer">

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