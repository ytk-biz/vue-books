<template>
  <form class="form-search" role="search" @submit.prevent>
    <input
      type="text"
      title="コミックをタイトルで検索"
      placeholder="タイトル"
      v-model.lazy="inputValue"
      @keydown.enter="submit"
    />
    <button type="submit" @click="submit">検索</button>
    <div v-if="isSubmit">
      <div class="balloon" v-show="!inputValue">
        <TxtError>タイトルを入力してください。</TxtError>
      </div>
    </div>
  </form>
</template>

<script>
import TxtError from "@/components/txt/TxtError";

export default {
  name: "FormSearch",
  components: {
    TxtError,
  },
  data() {
    return {
      inputValue: "",
      isSubmit: false,
    };
  },
  methods: {
    submit() {
      this.isSubmit = true;

      if (this.inputValue) {
        this.$router.push({
          path: `/${encodeURIComponent(this.inputValue)}/1`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.form-search {
  max-width: 640px;
  width: 100%;
  height: 40px;
  position: relative;

  input[type="text"] {
    border-radius: 5px;
    display: block;
    height: inherit;
    padding: 10px 66px 10px 16px;
    width: 100%;
  }

  button {
    background: $yellow;
    border-radius: 0 5px 5px 0;
    width: 50px;
    height: inherit;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    transition: background 0.2s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
    }

    &::before {
      top: 10px;
      left: 15px;
      width: 16px;
      height: 16px;
      border: 2px solid $black;
      border-radius: 50%;
    }

    &::after {
      width: 2px;
      height: 10px;
      background: $black;
      transform: rotate(-45deg);
      top: 22px;
      left: 30px;
    }

    @include hover {
      background: $DarkYellow;
    }
  }

  .balloon {
    background: $white;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 5px 16px;
    margin-top: 10px;
    position: absolute;

    &::before {
      content: "";
      position: absolute;
      display: block;
      margin: auto;
      top: -10px;
      right: 0;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 10px 5px;
      border-color: transparent transparent $white transparent;
    }
  }

  @include mq {
    height: 32px;

    input[type="text"] {
      padding: 5px 50px 5px 10px;
    }

    button {
      width: 40px;

      &::before {
        top: 8px;
        left: 12px;
        width: 14px;
        height: 14px;
      }

      &::after {
        height: 8px;
        top: 18px;
        left: 25px;
      }
    }
  }
}
</style>
