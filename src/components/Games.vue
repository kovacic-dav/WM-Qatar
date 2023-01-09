<template>
  {{ 'Gruppe ' + gruppe.group }}
  <div class="game">
    <div class="schedules" v-for="members in gruppe.members">
      {{ members.date }}
      {{ members.time }}
      <div v-for="teams in members.teams">
        <div class="gameAlignment">
          {{ teams.team1 }}
          {{ teams.team2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Games',
  props: {
    gruppe: { type: Object },
  },
};
</script>

<style scoped>
.game {
  margin-bottom: 5px;
  text-align: center;
  display: flex;
}

.schedules {
  border: 3px solid black;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-left: 5px;
  padding-right: 5px;
}

.gameAlignment {
}
</style>
