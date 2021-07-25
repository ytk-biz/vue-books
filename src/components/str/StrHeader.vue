<template>
  <header class="str-header">
    <div class="header-wrap">
      <div class="logo-wrap">
        <h1 class="header-logo">
          <router-link :to="'/'" exact>集英社コミック検索</router-link>
        </h1>
      </div>
      <div class="form-wrap">
        <FormSearch />
      </div>
    </div>
  </header>
</template>

<script>
import FormSearch from "@/components/form/FormSearch";

export default {
  name: "StrHeader",
  components: {
    FormSearch,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.str-header {
  background: $DarkBule;
  padding: 0 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: $pc;
    margin: auto;
    padding: 12px 0;
    width: 100%;
  }

  .logo-wrap {
    flex-shrink: 0;
    margin-right: 40px;
  }

  .form-wrap {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .header-logo {
    color: $white;
    font-weight: bold;
    font-size: 1.6rem;

    a {
      color: inherit;
      transition: opacity 0.2s ease-in-out;

      @include hover {
        opacity: 0.5;
        text-decoration: none;
      }
    }
  }

  @include mq {
    .logo-wrap {
      margin-right: 32px;
    }

    .header-logo {
      font-size: 1.2rem;
    }
  }
}
</style>
