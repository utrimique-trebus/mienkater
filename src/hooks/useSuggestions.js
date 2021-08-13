import { reactive } from "vue";
import supabase from "../db";

export default function useSuggestions(range) {
  const suggestionState = reactive({
    loading: false,
    error: "",
    data: [],
  });

  async function loadData() {
    try {
      suggestionState.loading = true;
      suggestionState.data = [];

      let { data, error } = await supabase
        .from("Articles")
        .select(
          `
        id,  
        Editors (
          firstName, lastName
        ),
        headline, mediaLink
      `
        )
        .order("createdAt", { ascending: false })
        .range(0, range);
      suggestionState.data = data;
      suggestionState.error = error;
    } catch (error) {
      console.error(error);
    } finally {
      suggestionState.loading = false;
    }
  }
  loadData();

  return suggestionState;
}
