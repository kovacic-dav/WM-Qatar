import { ref } from 'vue';

/*
Usage:
const {error,loading,ready,data} ) = useFetch(URL,OPTIONS)
*/

export function useFetch(url, options) {
  //https://vuejs.org/api/reactivity-core.html#reactive

  const error = ref('');
  const loading = ref(false);
  const ready = ref(false);
  const data = ref(null);

  /*
  https://medium.com/nerd-for-tech/fetch-api-async-await-in-a-few-bites-6b4f19f7db9e
*/
  async function fetchData() {
    loading.value = true;
    try {
      const res = await fetch(url, options);
      if (res.status != 200) {
        error.value = res.statusText;
      } else {
        data.value = await res.json();
      }
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
      ready.value = true;
    }
  }
  fetchData();
  return { error, loading, ready, data };

  //https://vuejs.org/api/reactivity-utilities.html#isref
}
