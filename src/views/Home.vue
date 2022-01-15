<template>
  <div class="home">
    <img class="home-image" alt="Board game stock image" src="../assets/catan.jpg" />
    <div class="feature-list">
      <FeatureBlock
        featureIconSrc="https://www.svgrepo.com/show/83116/board-games-set.svg"
        featureName="Feature Name 1"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureIconSrc="https://www.svgrepo.com/show/56511/board-game-blocks.svg"
        featureName="Feature Name 2"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureIconSrc="https://www.svgrepo.com/show/224/chess.svg"
        featureName="Feature Name 3"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureIconSrc="https://www.svgrepo.com/show/1521/backgammon.svg"
        featureName="Feature Name 4"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureIconSrc="https://www.svgrepo.com/show/159394/game-board.svg"
        featureName="Feature Name 5"
        featureDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, magna commodo gravida vestibulum, leo nisl viverra neque, id hendrerit."
      />
      <FeatureBlock
        featureIconSrc="https://www.svgrepo.com/show/39638/parchis.svg"
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
  justify-content: center;
}
.feature-list * {
  margin-left: 3%;
  margin-right: 3%;
  width: 22%;
  }
.home-image {
  margin-top: 30px;
  height: 400px;
  width: 70%;
}
</style>
