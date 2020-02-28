<template>
  <div class="home">
    <base-button>
      Hello
    </base-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import BaseButton from '@/components/BaseButton.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseButton,
  },
});
</script>
