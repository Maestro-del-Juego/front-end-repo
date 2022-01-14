<template>
  <div class="featureBlock">
      <h3>{{ featureName }}</h3>
      <p>{{ featureDetails }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    featureName: String,
    featureDetails: String
  }
})

export default class FeatureBlock extends Vue {
  featureName!: string;
  featureDetails!: string;
}
</script>

<style scoped>
    h3, p {
        text-align: left;
        }
    h3 {
        margin-bottom: 4px;
        }
    p {
        margin-top: 4px;
        }
</style>
