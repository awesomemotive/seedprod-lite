<template>
  <div class="sp-slider-control" ref="slider">
    <div class="sp-flex">
            <div class="sp-flex-1 sp-flex sp-items-center w-full sp-mr-3">
        <vue-slider
           v-bind:value="value"
          :silent="true"
          tooltip="none"
          :min="min"
          :max="max"
          :interval="step"
          class=""
          style="width:100%"
          @change="update_v"
          @error="error"
        ></vue-slider>
      </div>
      <div class="sp-w-16">
        <input
          :step="step"
          type="number"
          v-bind:value="value"
          class="sp-form-input sp-w-16"
          v-on:input="$emit('input', $event.target.value)"
         @wheel="scroll"
        />
      </div>

    </div>
  </div>
</template>

<script>
const ERROR_TYPE = {
  VALUE: 1,
  INTERVAL: 2,
  MIN: 3,
  MAX: 4,
  ORDER: 5,
};
export default {
  name: 'SliderControl',
  data() {
    return {
      errorMsg: '',
    };
  },

  mounted: function() {},
  methods: {
    scroll( element, event ) {
    },
    update_v( v ) {
      this.clearErrorMsg();
      this.$emit( 'input', v );
    },
    error( type, msg ) {
      switch ( type ) {
        case ERROR_TYPE.MIN:
          break;
        case ERROR_TYPE.MAX:
          break;
        case ERROR_TYPE.VALUE:
          break;
      }
      this.errorMsg = msg;
    },
    clearErrorMsg() {
      this.errorMsg = '';
    },
  },
  watch: {},
  props: [ 'value', 'min', 'max', 'step' ],
};
</script>
