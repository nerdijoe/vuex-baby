<template>
  <div class="hello">

    <h2>{{ message }}</h2>

    <input type="text" name="" value="" v-model='inputMsg'>
    <button type="button" name="button" @click="changeMessage(inputMsg)">Change</button>

    <br><br>
    <input type="text" name="" value="" v-model='searchInput'>
    <button type="button" name="button" @click="setFilter(searchInput)">Search</button>

    <ul v-for="player in players">
      <li>
        {{ player.name}}, {{ player.team }}
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  data () {
    return {
      inputMsg: "Your Message",
      searchInput: ''
    }
  },
  computed: mapGetters({
    message: 'getMessage',
    players: 'getPlayers'
  }),
  methods: {
    ...mapActions([
      'changeMessage',
      'changeFilter'
    ]),
    setFilter(filter) {
      this.changeFilter(filter)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
