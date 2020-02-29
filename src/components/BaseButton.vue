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

    & .icon {
      display: inline;
      margin-right: 4px;
    }
  }
</style>
