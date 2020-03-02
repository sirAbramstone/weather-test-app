<template>
  <div class="temperature-control">
    <toggle-switch
      :options="options"
      @change="$emit('update-units', $event.value)"
    />
  </div>
</template>

<script>
import ToggleSwitch from 'vuejs-toggle-switch';

export default {
  name: 'TemperatureControl',
  components: {
    ToggleSwitch,
  },
  data: () => ({
    options: {
      layout: {
        color: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        fontWeightSelected: 'normal',
      },
      size: {
        fontSize: 1,
        height: 1.61111111,
        padding: 0.088889,
        width: 5.22222222,
      },
      items: {
        delay: 0.4,
        preSelected: 'C',
        disabled: false,
        labels: [
          {
            name: 'C',
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          {
            name: 'F',
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        ],
      },
    },
  }),
};
</script>

<style lang="scss">
  .temperature-control {
    margin-right: -28px;
  }
</style>
