<template>
  <div class="sp-align-control" ref="align">
        <div class="sp-flex sp-align-center">
          <button class="sp-w-32px sp-h-32px sp-bg-neutral-10  sp-rounded-full sp-flex sp-justify-center sp-mr-1 hover:sp-bg-neutral-15 " @click="update_align('left')" :class="{ 'sp-active': caligned == 'left' }"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sp-w-4 sp-fill-current"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg></button>
          <button class="sp-w-32px sp-h-32px sp-bg-neutral-10  sp-rounded-full sp-flex sp-justify-center sp-mr-1 hover:sp-bg-neutral-15 " @click="update_align('center')" :class="{ 'sp-active': caligned == 'center' }"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="sp-w-4 sp-fill-current"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg></button>
          <button class="sp-w-32px sp-h-32px sp-bg-neutral-10  sp-rounded-full sp-flex sp-justify-center sp-mr-1 hover:sp-bg-neutral-15 " @click="update_align('right')" :class="{ 'sp-active': caligned == 'right' }"><svg xmlns="http://www.w3.org/2000/svg" class="sp-w-4 sp-fill-current"  viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg></button>
          <button class="sp-w-32px sp-h-32px sp-bg-neutral-10  sp-rounded-full sp-flex sp-justify-center sp-mr-1 hover:sp-bg-neutral-15 " v-if="justify" @click="update_align('full')" :class="{ 'sp-active': caligned == 'full' }"><svg xmlns="http://www.w3.org/2000/svg" class="sp-w-4 sp-fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></svg></button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'SpacingControl',
  data() {
    return {
      top: this.value,
    };
  },
  mounted: function() {},
  methods: {
    update_align( align ) {
      this.align = align;
      this.$emit( 'input', this.align );
    },
  },
  computed: {
    caligned: function() {
      return this.value;
    },
  },
  props: [ 'value' ],
};
</script>
