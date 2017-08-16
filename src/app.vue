<template>
  <div id="app">
    <v-header/>
    <loading v-model="isLoading" />
    <router-view/>
    <v-foot/>
  </div>
</template>

<script>
  import {
    Loading
  } from 'vux'

  import {
    querystring
  } from 'vux'

  import {
    mapState
  } from 'vuex'
  export default {
    name: 'app',
    components: {
      Loading
    },
    data() {
      return {
        code: '',
        apiId: 'wx762c9153df774440',
      }
    },
    computed: {
      ...mapState(['cdnUrl']),
      isLoading: {
        get() {
          return this.$store.state.isLoading
        },
        set(val) {
          this.$store.commit('updateLoadingStatus', val);
        }
      },
      userInfo: {
        get() {
          return this.$store.state.userInfo;
        },
        set(val) {
          this.$store.commit('setUserinfo', val);
        }
      },
      // 签名用URL
      url() {
        return window.location.href.split('#')[0];
      }
    },
    methods: {     
      
    },
    created() {
        this.userInfo = {
          "openid": "data-from-pbc",
          "nickname": "网站用户",
          "sex": 1,
          "language": "zh_CN",
          "city": "北京",
          "province": "北京",
          "country": "中国",
          "headimgurl": "",
          "privilege": []
        }
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  .weui-cells__title {
    color: #444!important;
    font-size: 16px!important;
    margin-top: 0!important;
  }

  .weui-cells_radio .weui-cell__hd {
    padding-right: 0.35em;
  }

  [class^="weui-icon-"]:before,
  [class*=" weui-icon-"]:before {
    margin: 0!important;
  }

  .weui-cells_radio .weui-check:checked+.weui-icon-checked:before {
    display: none!important;
  }

  .weui-cells_radio .weui-check:checked+.weui-icon-checked:after {
    content: '\EA06';
    color: #09BB07;
    font-size: 23px;
    display: block;
  }

  .weui-cells_radio .weui-icon-checked:before {
    content: '\EA01';
    color: #C9C9C9;
    font-size: 23px;
    display: block;
  }

  .weui-cells_radio .weui-check:checked+.weui-icon-checked:before {
    content: '\EA06';
    color: #09BB07;
  }

  .weui-cells_radio .weui-check:checked+.vux-checklist-icon-checked:before {
    color: #09BB07;
  }

  .weui-cells_radio>label>* {
    pointer-events: none;
  }

  footer {
    font-size: 14px;
    color: #999;
    text-align: center;
  }

  .weui-media-box__thumb {
    border-radius: 50% !important;
  }

</style>
