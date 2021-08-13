import { reactive } from "vue";
import supabase from "../db";

export default function useFullArticle(arid) {
  const articleState = reactive({
    loading: false,
    error: "",
    data: [],
  });

  async function loadData() {
    try {
      articleState.loading = true;

      let { data, error } = await supabase
        .from("Articles")
        .select(
          `
        id,
        Editors (
          firstName, lastName
        ),
        createdAt, mediaLink, headline, content, searchTags
      `
        )
        .eq("id", arid);
      articleState.data = data;
      articleState.error = error;
    } catch (error) {
      articleState.error = error;
      console.error(error);
    } finally {
      articleState.loading = false;
    }
  }

  loadData();

  return articleState;
}
