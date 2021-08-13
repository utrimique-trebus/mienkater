import { reactive } from "vue";
import store from '../store/index';
import supabase from "../db";

export default function useCategories() {
  const categoryState = reactive({
    loading: false,
    error: "",
    data: [],
  });

  async function loadData() {
    try {
      categoryState.loading = true;
      categoryState.data = [];

      let { data, error } = await supabase.from("Categories").select("name");
      categoryState.data = data;
      categoryState.error = error;
    } catch (error) {
      categoryState.error = error.message || "Ismeretlen hiba";
      console.error(error);
    } finally {
      categoryState.loading = false;

      const mp = {};
      for (let i = 0; i < categoryState.data.length; i++) {
        mp[i] = categoryState.data[i].name;
      }

      store.commit('defineMap', mp);
    }
  }

  loadData();

  return categoryState;
}
