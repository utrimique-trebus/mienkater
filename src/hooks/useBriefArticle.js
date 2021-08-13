import { reactive } from "vue";
import supabase from "../db";

export default function useBriefArticle(cgid) {
  const briefArticlesState = reactive({
    loading: false,
    error: "",
    data: [],
  });

  async function loadData() {
    try {
      briefArticlesState.loading = true;
      briefArticlesState.data = [];
      
      let { data, error } = await supabase.from("Articles").select(`
        id,
        Editors (
          firstName, lastName
        ),
        mediaLink, headline
      `).eq("categoryID", cgid);
      briefArticlesState.data = data;
      briefArticlesState.error = error;
    } catch (error) {
      briefArticlesState.error = error;
      console.error(error);
    } finally {
      briefArticlesState.loading = false;
    }
  }

  loadData();

  return briefArticlesState;
}
