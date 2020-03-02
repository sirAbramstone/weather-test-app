<template>
  <button @click="onClick" :class="cssClass" class="base-button" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    cssClass: {
      type: String,
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>


<style lang="scss">
  .base-button {
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    outline: none;
    opacity: 0.6;
    background: none;

    font-size: 1em;
    line-height: 1.22222;
    transition: opacity .3s;
    cursor: pointer;
    color: inherit;

    &:hover,
    &:active,
    &:focus {
      opacity: 1;
      transition: opacity .3s;
    }

    &.primary {
      text-transform: uppercase;
      color: #1086FF;
      font-size: 1.66666666667em;
      line-height: 1.2;
      opacity: 1;
    }

    & .icon {
      display: inline;
      margin-right: 4px;
    }
  }
</style>
