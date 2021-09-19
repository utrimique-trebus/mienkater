<template>
  <footer class="bg-burgundy text-white">
    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <section>
        <div
          class="flex justify-center my-4 mx-3 main-ft text-xl tracking-wide font-extrabold text-center"
        >
          Meet the Team
        </div>
        <div class="grid grid-cols-4" style="height: 250px">
          <div class="flex flex-col justify-center space-y-1">
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/1.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 1)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 1"
                :name="'Balázs Udo-Zsolt'"
                :role="'Szerkesztő'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/anon.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 2)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 2"
                :name="'Bartha Dániel'"
                :role="'Jogi tanácsadó'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/3.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 3)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 3"
                :name="'Becsky Dániel'"
                :role="'Szerkesztő'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/4.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 4)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 4"
                :name="'Dull Bence'"
                :role="'Szerkesztő'"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center space-y-1">
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/5.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 5)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 5"
                :name="'Séra Kincső Gyopár'"
                :role="'Médiafelelős'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/6.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 6)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 6"
                :name="'Szepessy László'"
                :role="'Főszerkesztő'"
              />
            </div>

            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/7.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 7)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 7"
                :name="'Farkas Szilárd'"
                :role="'IT Adminisztrátor'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/8.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 8)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 8"
                :name="'Fogarasi Szabolcs'"
                :role="'Szerkesztő'"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center space-y-1">
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/anon.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 9)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 9"
                :name="'Forró-Bathó Eszter-Anna'"
                :role="'Szerkesztő'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/anon.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 10)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 10"
                :name="'Kiss Tamás'"
                :role="'Médiafelelős'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/16.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 16)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 16"
                :name="'Szabó Szabolcs'"
                :role="'Felelős Szerkesztő'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/anon.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 12)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 12"
                :name="'Korponay Albert'"
                :role="'Szerkesztő'"
              />
            </div>
          </div>
          <div class="flex flex-col justify-center space-y-1">
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/13.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 13)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 13"
                :name="'Kovács Domokos Péter'"
                :role="'Tartalmi és minőségi felelős'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/14.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 14)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 14"
                :name="'Nagy Bodó Szilárd'"
                :role="'Korrektor'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="/anon.jpg"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 15)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 15"
                :name="'Nagy Helga'"
                :role="'Szerkesztő'"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="flex justify-center my-4 main-ft text-xl tracking-wide font-extrabold">
          Elérhetőségek
        </div>
        <div class="ml-4 mt-6 flex flex-col gap-5">
          <div class="flex gap-2 secondary-ft items-center">
            <svg
              class="h-5 w-5 xs:h-8 xs:w-8 fill-current text-white"
              viewBox="0 0 50 50"
            >
              <path
                d="M25 1c-6.52 0-7.34.03-9.9.14-2.55.12-4.3.53-5.82 1.12a11.76 11.76 0 0 0-4.25 2.77 11.76 11.76 0 0 0-2.77 4.25c-.6 1.52-1 3.27-1.12 5.82C1.03 17.66 1 18.48 1 25c0 6.5.03 7.33.14 9.88.12 2.56.53 4.3 1.12 5.83a11.76 11.76 0 0 0 2.77 4.25 11.76 11.76 0 0 0 4.25 2.77c1.52.59 3.27 1 5.82 1.11 2.56.12 3.38.14 9.9.14 6.5 0 7.33-.02 9.88-.14 2.56-.12 4.3-.52 5.83-1.11a11.76 11.76 0 0 0 4.25-2.77 11.76 11.76 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.83.12-2.55.14-3.37.14-9.89 0-6.51-.02-7.33-.14-9.89-.12-2.55-.52-4.3-1.11-5.82a11.76 11.76 0 0 0-2.77-4.25 11.76 11.76 0 0 0-4.25-2.77c-1.53-.6-3.27-1-5.83-1.12A170.2 170.2 0 0 0 25 1zm0 4.32c6.4 0 7.16.03 9.69.14 2.34.11 3.6.5 4.45.83 1.12.43 1.92.95 2.76 1.8a7.43 7.43 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.12 2.53.14 3.29.14 9.7 0 6.4-.02 7.16-.14 9.69-.1 2.34-.5 3.6-.82 4.45a7.43 7.43 0 0 1-1.8 2.76 7.43 7.43 0 0 1-2.76 1.8c-.84.32-2.11.72-4.45.82-2.53.12-3.3.14-9.7.14-6.4 0-7.16-.02-9.7-.14-2.33-.1-3.6-.5-4.45-.82a7.43 7.43 0 0 1-2.76-1.8 7.43 7.43 0 0 1-1.8-2.76c-.32-.84-.71-2.11-.82-4.45a166.5 166.5 0 0 1-.14-9.7c0-6.4.03-7.16.14-9.7.11-2.33.5-3.6.83-4.45a7.43 7.43 0 0 1 1.8-2.76 7.43 7.43 0 0 1 2.75-1.8c.85-.32 2.12-.71 4.46-.82 2.53-.11 3.29-.14 9.7-.14zm0 7.35a12.32 12.32 0 1 0 0 24.64 12.32 12.32 0 0 0 0-24.64zM25 33a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm15.68-20.8a2.88 2.88 0 1 0-5.76 0 2.88 2.88 0 0 0 5.76 0z"
              ></path>
            </svg>
            <a
              href="https://www.instagram.com/mienk_itt_ater/"
              class="text-xs xs:text-lg"
              >@mienk_itt_ater</a
            >
          </div>
          <div class="flex gap-2 secondary-ft items-center">
            <svg
              class="h-5 w-5 xs:h-8 xs:w-8 fill-current text-white"
              viewBox="0 0 60.73 60.73"
            >
              <path
                d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
              ></path>
            </svg>
            <a
              href="https://www.facebook.com/ateramienk"
              class="text-xs xs:text-lg"
              >Miénk itt a Tér</a
            >
          </div>
        </div>
      </section>
    </div>
    <div class="main-ft mt-4">
      <section class="flex items-center">
        <div class="flex-grow">
          <div class="bg-white w-full h-0.5"></div>
        </div>
        <div class="text-2xl tracking-tight text-center w-40">
          Miénk itt a Tér
        </div>
        <div class="flex-grow">
          <div class="bg-white w-full h-0.5"></div>
        </div>
      </section>
    </div>
    <section
      class="flex justify-center text-xs font-semibold main-ft tracking-widest"
    >
      2021<span class="secondary-ft font-thin pl-1 tracking-normal"
        >- Készítette Farkas Szilárd</span
      >
    </section>
  </footer>
</template>

<script>
import { reactive } from "vue";
import AltBubble from "./AltBubble.vue";
export default {
  components: {
    AltBubble,
  },
  name: "PageFooter",
  setup() {
    const state = reactive({
      showByIndex: null,
    });

    return {
      state,
    };
  },
};
</script>
