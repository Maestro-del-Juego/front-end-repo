<template>
  <div class="featureBlock">
    <img class="feature-icon" :src="featureIconSrc" />
    <h3>{{ featureName }}</h3>
    <p>{{ featureDetails }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    featureIconSrc: String,
    featureName: String,
    featureDetails: String
  }
})
export default class FeatureBlock extends Vue {
  featureIconSrc!: string
  featureName!: string
  featureDetails!: string
}
</script>

<style scoped>
h3,
p,
img {
  text-align: left;
}
h3 {
  margin-top: 10px;
}
p {
  margin-top: 15px;
  clear: left;
}
.feature-icon {
    fill: red;
    width: 40px;
    margin-bottom: 0px;
    margin-right: 10px;
    float: left;
}
</style>
