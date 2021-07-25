<template>
  <p class="img-loading">読み込み中</p>
</template>

<script>
export default {
  name: "ImgLoading",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.img-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  text-indent: -9999em;
  animation: loading 1.1s infinite ease-in-out;
  transform: translateY(-50%);
}

@keyframes loading {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em $DarkBule,
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2),
      2.5em 0em 0 0em rgba(19, 25, 33, 0.2),
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.2),
      0em 2.5em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.2),
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.5),
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.7),
      1.8em -1.8em 0 0em $DarkBule, 2.5em 0em 0 0em rgba(19, 25, 33, 0.2),
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.2),
      0em 2.5em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.2),
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.5),
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.7), 2.5em 0em 0 0em $DarkBule,
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.2),
      0em 2.5em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.2),
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.2),
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.5),
      2.5em 0em 0 0em rgba(19, 25, 33, 0.7), 1.75em 1.75em 0 0em $DarkBule,
      0em 2.5em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.2),
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.2),
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2),
      2.5em 0em 0 0em rgba(19, 25, 33, 0.5),
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.7), 0em 2.5em 0 0em $DarkBule,
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.2),
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.2),
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2),
      2.5em 0em 0 0em rgba(19, 25, 33, 0.2),
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.5),
      0em 2.5em 0 0em rgba(19, 25, 33, 0.7), -1.8em 1.8em 0 0em $DarkBule,
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.2),
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2),
      2.5em 0em 0 0em rgba(19, 25, 33, 0.2),
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.2),
      0em 2.5em 0 0em rgba(19, 25, 33, 0.5),
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.7), -2.6em 0em 0 0em $DarkBule,
      -1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(19, 25, 33, 0.2),
      1.8em -1.8em 0 0em rgba(19, 25, 33, 0.2),
      2.5em 0em 0 0em rgba(19, 25, 33, 0.2),
      1.75em 1.75em 0 0em rgba(19, 25, 33, 0.2),
      0em 2.5em 0 0em rgba(19, 25, 33, 0.2),
      -1.8em 1.8em 0 0em rgba(19, 25, 33, 0.5),
      -2.6em 0em 0 0em rgba(19, 25, 33, 0.7), -1.8em -1.8em 0 0em $DarkBule;
  }
}
</style>
