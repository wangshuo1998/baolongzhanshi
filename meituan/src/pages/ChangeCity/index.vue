<template>
  <!--  改变城市-->
  <div class="citiesContainer">
    <div class="provinceSelect clearfix">
      <div class="provinceInput clearfix">
        <span>按省份选择：</span>
        <el-select v-model="value" class="province" placeholder="省份">
          <el-option value="xxx">
          </el-option>
        </el-select>
        <el-select v-model="value" class="cities" placeholder="城市">
          <el-option value="xxx">
          </el-option>
        </el-select>
      </div>
      <div class="searchInput clearfix">
        <span>直接搜索：</span>
        <el-input class="search" v-model="input" placeholder="请输入城市中文或拼音"></el-input>
      </div>
    </div>
    <!--    热门城市-->
    <dl class="hotCity">
      <dt>热门城市：</dt>
      <dd>北京</dd>
      <dd>北京</dd>
      <dd>北京</dd>
      <dd>北京</dd>
      <dd>北京</dd>
      <dd>北京</dd>
      <dd>北京</dd>
    </dl>
    <!--    最近访问-->
    <dl class="recentCity">
      <dt>最近访问：</dt>
      <dd @click="addRecentCity(recentCity)" v-for="(recentCity,index) in recentlyList" :key="index"
          v-if="recentlyList.length>0">
        {{recentCity}}
      </dd>
    </dl>
    <!--    按拼音首字母进行选择-->
    <dl class="firstLetter">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(cityInfo,index) in citiesList"
          :key="index">
        <a :href="'#'+cityInfo[0]">
          {{cityInfo[0]}}
        </a>
      </dd>
    </dl>
    <!--    根据字母展示的城市信息-->
    <div class="cityLetterContainer">
      <div :id="cityInfo[0]" class="cityLetterItem" v-for="(cityInfo,index) in citiesList" :key="index">
        <span>{{cityInfo[0]}}</span>
        <label>
          <span @click="addRecentCity(city.name)"
                v-for="(city,index) in cityInfo[1]"
                :key="city.id" :class="{hot:city.isHot}">{{city.name}}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
  import {reqCitiesList} from "@/Api";
  import {mapMutations} from "vuex";

  export default {
    name: "ChangCity",
    data() {
      return {
        citiesList: [],
        recentlyList: []
      }
    },
    mounted() {
      this.getCitiesList();
      let recentlyList = JSON.parse(sessionStorage.getItem("recentCity_key"));
      if (recentlyList) {
        this.recentlyList = recentlyList;
      }
    },
    beforeDestroy() {
      sessionStorage.setItem("recentCity_key", JSON.stringify(this.recentlyList));
    },
    methods: {
      ...mapMutations({
        changeIndexCityMutation: "changeIndexCityMutation"
      }),
      async getCitiesList() {
        let result = await reqCitiesList();
        this.citiesList = result.data;
      },
      //点击将当前城市添加到数组中
      addRecentCity(city) {
        if (this.recentlyList.find(item => item === city)) {
          return;
        }
        this.recentlyList.unshift(city);
        //跳转到首页
        this.$router.push("/");
        this.changeIndexCityMutation(city);
      }
    }
  }
</script>
<style lang="less" scoped>
  /*清除浮动*/
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }

  .citiesContainer {
    width: 1190px;
    margin: 20px auto;
    min-height: 1000px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;

    .provinceSelect {
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      box-sizing: border-box;
      padding-bottom: 25px;

      .provinceInput {
        float: left;
        /deep/ .province{
          width: 150px;
          height: 40px;
          margin: 0 10px;
        }
        /deep/ .cities{
          width: 150px;
          height: 40px;
          margin: 0 10px;
        }
      }

      .searchInput {
        float: left;
        /*line-height: 18px;*/
        display: flex;

        span {
          white-space: nowrap;
          line-height: 40px;
          margin-left: 40px;
        }
        /deep/ .search{
          margin-left: 10px;
          width: 220px;
        }
      }
    }

    .hotCity, .recentCity {
      padding: 30px 0;
      border-bottom: 1px solid #e5e5e5;
      box-sizing: border-box;

      dt {
        display: inline-block;
      }

      dd {
        display: inline-block;
        color: #666;
        margin: 0 20px;
        font-size: 14px;
        cursor: pointer;

        &:hover {
          color: #222;
        }
      }
    }

    .firstLetter {
      padding: 30px 0;

      dt {
        display: inline-block;
      }

      dd {
        display: inline-block;
        cursor: pointer;
        width: 25px;
        height: 25px;
        margin: 2px 10px 0;
        font-size: 15px;

        a {
          color: #666;
        }
      }
    }

    .cityLetterContainer {
      .cityLetterItem {
        padding: 13px 30px 13px 10px;
        transition: background 0.3s;

        & > span {
          vertical-align: top;
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #222;
          background: #FFD000;
          text-align: center;
          padding-top: 10px;
        }

        label {
          max-width: 1065px;
          display: inline-block;

          span {
            margin: 10px 20px;
            color: #666;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;

            &.hot {
              color: #FF6600;
            }

            &:hover {
              color: #222;
            }
          }
        }

        &:hover {
          background: #F8F8F8;
        }
      }
    }

  }
</style>
