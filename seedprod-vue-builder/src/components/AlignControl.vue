<template>
  <div class="sp-align-control" ref="align">
    <div class="sp-flex sp-align-center">
      <button
        class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center  sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
        @click="update_align('left')"
        :class="{ 'sp-active': caligned == 'left' }"
      >
        <svg
          v-if="icons == 'alt'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-transform sp-rotate-90"
        >
          <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
        </svg>
      </button>
      <button
        v-if="!hidecenter"
        class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center  sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
        @click="update_align('center')"
        :class="{ 'sp-active': caligned == 'center' }"
      >
        <svg
          v-if="icons == 'alt'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-transform sp-rotate-90"
        >
          <path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z" />
        </svg>
      </button>
      <button
        class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center  sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
        @click="update_align('right')"
        :class="{ 'sp-active': caligned == 'right' }"
      >
        <svg
          v-if="icons == 'alt'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-transform sp--rotate-90"
        >
          <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="sp-w-4 sp-fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" />
        </svg>
      </button>
      <button
        class="sp-w-32px sp-h-32px sp-bg-neutral-10 sp-rounded-full sp-flex sp-justify-center  sp-items-center sp-mr-1 hover:sp-bg-neutral-15"
        v-if="justify"
        @click="update_align('full')"
        :class="{ 'sp-active': caligned == 'full' }"
      >
        <svg
          v-if="icons == 'alt'"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          class="sp-w-4 sp-fill-current sp-transform sp--rotate-90"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g />
            <polygon
              points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"
            />
          </g>
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="sp-w-4 sp-fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlignControl',
  data() {
    return {
      align: this.value,
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
  props: [ 'value', 'justify', 'icons', 'hidecenter' ],
};
</script>
