<template>
  <div v-if="ready">
    <div class="Gruppe">
      <div v-for="group in data.groups">
        <!--<div v-for="members in group.members">
          <div id="games" v-for="teams in members.teams">
            <Games
              :date="members.date"
              :time="members.time"
              
            />
          </div>
        </div>-->
        <Games :gruppe="group" />
      </div>
    </div>
  </div>
</template>

<script>
import { useFetch } from '../composable/UseFetch.js';
import Group from './Group.vue';
import Games from './Games.vue';

export default {
  setup() {
    const { error, loading, ready, data } = useFetch(
      'https://raw.githubusercontent.com/htlWels/WM/main/spielplan.json',
      {}
    );
    return {
      data,
      error,
      ready,
      loading,
    };
  },
  components: {
    Group,
    Games,
  },
};
</script>

<style scoped>
#Gruppe {
  align-items: center;
}
</style>
