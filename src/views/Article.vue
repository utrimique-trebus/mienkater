<template>
  <main class="bg-black">
    <div v-if="!article.loading && !article?.data[0]">
      <div class="flex flex-col justify-center items-center h-screen">
        <NotFoundError :backgroundLight="false" />
      </div>
    </div>
    <section v-else class="secondary-ft">
      <div class="relative w-full" style="height: 32rem">
        <!-- Image & Image Skeleton Loader -->
        <div
          class="animate-pulse absolute h-full w-full bg-white bg-opacity-40 rounded-3xl"
          v-if="article.loading"
        ></div>
        <img
          v-else
          class="absolute h-full w-full object-cover border-none"
          :src="article.data[0]?.mediaLink"
        />

        <!-- Black Gradient  -->
        <div
          class="absolute h-full w-full bg-gradient-to-t from-black to-transparent"
        ></div>

        <!-- Article Headline Skeleton Loader -->
        <div
          class="absolute bottom-0 z-30 md:px-14 lg:px-20 p-3 flex
        flex-col gap-2 justify-center w-full"
          v-if="article.loading"
        >
          <div
            class="h-8 w-3/4 bg-white bg-opacity-40 animate-pulse rounded-full"
          ></div>
          <div
            class="h-5 w-1/2 bg-white bg-opacity-40 animate-pulse rounded-full"
          ></div>
        </div>

        <!-- Article Headline  -->
        <div
          class="absolute bottom-0 z-30 p-3 md:px-14 lg:px-20 tracking-tighter flex
        flex-col justify-center text-5xl text-white font-semibold main-ft"
          v-if="!article.loading"
        >
          <span class="text-3xl lg:text-5xl tracking-normal">{{
            article.data[0]?.headline
          }}</span>
          <span
            class="text-xl tracking-normal font-thin"
            :set="(dt = new Date(article.data[0]?.createdAt))"
            >{{
              article.data[0]?.Editors.firstName +
                " " +
                article.data[0]?.Editors.lastName +
                " - " +
                dt.getFullYear() +
                "." +
                (Number(dt.getMonth()) + 1) +
                "." +
                dt.getDate() +
                " " +
                dt.getHours() +
                ":" +
                dt.getMinutes()
            }}</span
          >
        </div>
      </div>
    </section>

    <!-- Content Skeleton Loader -->
    <section class="px-3 md:px-14 lg:px-20" v-if="article.loading">
      <div class="flex flex-col">
        <ParagraphSkeleton v-for="i in 5" :key="i" class="py-1" />
      </div>
    </section>

    <!-- Content -->
    <section
      class="text-white px-3 md:px-14 lg:px-20 tracking-wider text-lg text-justify leading-snug secondary-ft"
      v-if="!article.loading"
    >
      <p
        class="py-2"
        v-for="(paragraph, i) in article.data[0]?.content"
        :key="i"
      >
        {{ paragraph }}
      </p>
    </section>

    <!-- Suggestions & Suggestions Skeleton Loader -->
    <section>
      <div class="relative flex flex-col mx-3 md:px-14 lg:px-20 py-10">
        <div v-if="suggestions.loading">
          <div v-for="i in 4" :key="i">
            <Divider :isLoading="true" />
            <SuggestionCardSkeleton />
          </div>
        </div>

        <div v-if="!suggestions.loading && !suggestions?.data">
          <div v-for="suggestion in suggestions.data" :key="suggestion.id">
            <div v-if="suggestion.id != article.data[0].id">
              <Divider :isLoading="false" />
              <SuggestionCard
                :authorFirstName="suggestion.Editors.firstName"
                :authorLastName="suggestion.Editors.lastName"
                :headline="suggestion.headline"
                :id="suggestion.id"
                @click="redirectTo(`/articles/${suggestion.id}`)"
                style="cursor: pointer"
              />
            </div>
          </div>
        </div>

        <!-- Shadow Effect -->

        <!-- <div
          class="absolute top-0 bg-gradient-to-b from-transparent to-black w-full h-full overflow-hidden"
        ></div> -->
      </div>
    </section>
  </main>
</template>

<script>
import Divider from "../components/Divider.vue";
import SuggestionCard from "../components/SuggestionCard.vue";
import SuggestionCardSkeleton from "../components/SuggestionCardSkeleton.vue";
import NotFoundError from "../components/NotFoundError.vue";
import useFullArticle from "@/hooks/useFullArticle";
import useSuggestions from "@/hooks/useSuggestions";
import ParagraphSkeleton from "../components/ParagraphSkeleton.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    SuggestionCard,
    Divider,
    ParagraphSkeleton,
    SuggestionCardSkeleton,
    NotFoundError,
  },
  name: "Article",
  setup() {
    const route = useRoute();
    const article = useFullArticle(route.params.id);
    const suggestions = useSuggestions(4);
    return {
      article,
      suggestions,
    };
  },
  mounted: function() {
    window.scroll(0, 0);
  },
};
</script>
