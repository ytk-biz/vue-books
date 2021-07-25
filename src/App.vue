<template>
  <div class="str-wrap">
    <StrHeader />
    <main class="str-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import StrHeader from "@/components/str/StrHeader";

export default {
  name: "App",
  components: {
    StrHeader,
  },
};
</script>

<style lang="scss">
@use "@/assets/scss/utility/_utility" as *;
@use "@/assets/scss/_base";
</style>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.str-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.str-main {
  padding: 0 20px;
  width: 100%;
}
</style>
