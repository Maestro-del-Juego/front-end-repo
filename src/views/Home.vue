<template>
  <div class="home">
    <img alt="Board game stock image" src="../assets/BoardGameStock1.jpeg" />
    <div class="feature-list">
      <FeatureBlock
        featureName="Feature Name 1"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureName="Feature Name 2"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureName="Feature Name 3"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureName="Feature Name 4"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureName="Feature Name 5"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureName="Feature Name 6"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import FeatureBlock from '@/components/FeatureBlock.vue'
import axios from 'axios'

@Options({
  components: {
    FeatureBlock
  }
  // methods: {
  //   getBoardGame: () => {
  //     axios.get('url').then((res) => console.log(res))
  //   }
  // }
})
export default class Home extends Vue {}
</script>

<style scoped>
.feature-list {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
}
.feature-list * {
  width: 25%;
  margin-left: 5%;
  }
img {
  width: 80%;
  height: 400px;
}
</style>
