<template>
  <div class="lyt-detail">
    <div class="info-wrap">
      <h1 class="title"><slot name="title"></slot></h1>
      <p class="author"><slot name="author"></slot>（著）</p>
      <p class="stock">
        <span><slot name="stock"></slot></span>
      </p>
      <p class="price">
        <slot name="price"></slot>円<span class="unit">（税込）</span>
      </p>
      <p class="shipping"><slot name="shipping"></slot></p>
      <p class="link">
        <a :href="rktnLink" target="_blank"
          >楽天ブックスで注文する<ImgBlank
        /></a>
      </p>
    </div>
    <div class="img-wrap">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
import ImgBlank from "@/components/img/ImgBlank";

export default {
  name: "LytDetail",
  props: ["rktnLink", "imgSrc"],
  components: {
    ImgBlank,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/utility/_utility" as *;

.lyt-detail {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 52px;

  .info-wrap {
    width: 65%;

    .title {
      font-weight: bold;
      font-size: 2.8rem;
      line-height: 1.4;
      margin-bottom: 8px;
    }

    .author {
      border-bottom: 1px solid $gray;
      margin-bottom: 20px;
      padding-bottom: 8px;
    }

    .stock {
      margin-bottom: 20px;

      span {
        background: $yellow;
        border-radius: 3px;
        display: inline-block;
        padding: 2px 12px;
      }
    }

    .price {
      color: $red;
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 4px;
      text-align: right;

      .unit {
        font-size: 1.8rem;
      }
    }

    .shipping {
      margin-bottom: 36px;
      padding-right: 12px;
      text-align: right;
    }

    .link {
      a {
        background: $lightOrange;
        border: 1px solid $orange;
        border-radius: 30px;
        color: $black;
        display: block;
        font-size: 1.3rem;
        padding: 4px 20px;
        max-width: 240px;
        text-align: center;
        transition: opacity 0.2s ease-in-out;
        width: 100%;

        @include hover {
          opacity: 0.5;
          text-decoration: none;
        }
      }
    }
  }

  .img-wrap {
    padding-right: 40px;
    text-align: center;
    width: 35%;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  @include mq {
    flex-direction: column-reverse;
    margin-bottom: 40px;

    .info-wrap {
      width: 100%;

      .title {
        font-size: 2rem;
      }

      .author {
        font-size: 1.2rem;
      }

      .stock {
        font-size: 1.2rem;
        margin-bottom: 16px;
      }

      .price {
        font-size: 1.8rem;

        .unit {
          font-size: 1.6rem;
        }
      }

      .shipping {
        font-size: 1.2rem;
        margin-bottom: 28px;
      }

      .link a {
        max-width: 600px;
        margin: auto;
        padding: 8px 20px;
        width: 100%;
      }
    }

    .img-wrap {
      padding-right: 0;
      margin-bottom: 20px;
      width: 100%;
    }
  }
}
</style>
