<template>
  <div class="about">
    <h1>{{ isLogined }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { State } from '../store/state'
import action from '../store/action-types'

const store: Store<State> = useStore();
const router = useRouter();

const isLogined = computed(() => store.getters.isLogined);

function login(email: string, password: string) {
  try {
    store.dispatch(action.LOGIN, {
      email,
      password
    });
    router.push({ name: 'Dashboard', query: {} });
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  login('jinhyeokfang@gmail.com', 'password01');
});
</script>