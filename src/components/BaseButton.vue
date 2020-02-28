<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>


<style lang="scss">
  .button {
    padding: 0;
    border: none;
    outline: none;
    opacity: 0.6;
    background: none;

    font-size: 1rem;
    line-height: 1.22222;
    color: rgb(255, 255, 255);
    transition: opacity .3s;

    &:hover,
    &:active,
    &:focus {
      opacity: 1;
      transition: opacity .3s;
    }
  }
</style>
