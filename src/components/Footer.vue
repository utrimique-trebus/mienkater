<template>
  <footer class="bg-burgundy text-white">
    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <section>
        <div class="flex justify-center my-4 mx-3 secondary-ft text-center">
          Meet the Team
        </div>
        <div class="grid grid-cols-4" style="height: 250px">
          <div class="flex flex-col justify-center space-y-1">
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
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
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
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
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 11)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 11"
                :name="'Szabó Erzsébet Zsófia'"
                :role="'Gazdasági felelős'"
              />
            </div>
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
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
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
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
            <div class="relative bg-transparent w-14 h-14">
              <img
                class="absolute h-full w-full object-cover rounded-full border-2 border-black"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                @click="
                  state.showByIndex == null
                    ? (state.showByIndex = 16)
                    : (state.showByIndex = null)
                "
              />
              <AltBubble
                v-if="state.showByIndex == 16"
                :name="'Szabó Szabolcs'"
                :role="'Főszerkesztő'"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="flex justify-center my-4 secondary-ft">Elérhetőségek</div>
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
      2021
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
