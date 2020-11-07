<template>
  <!--  改变城市-->
  <div class="citiesContainer">
    <div class="provinceSelect clearfix">
      <div class="provinceInput clearfix">
        <span>按省份选择：</span>
        <el-select v-model="provinceId" class="province" placeholder="省份">
          <el-option v-for="(province,index) in provinceCity"
                     :key="province.provinceCode"
                     :value="province.provinceName"></el-option>
        </el-select>
        <el-select
          :disabled="provinceId===''"
          @change="addRecentCity(cityId)"
          v-model="cityId" class="cities"
          placeholder="城市">
          <el-option v-for="(city,index) in cityList"
                     :key="city.id" :value="city.name">
          </el-option>
        </el-select>
      </div>
      <div class="searchInput clearfix">
        <span>直接搜索：</span>
        <el-input @input="searchCity(input)" v-model="input" placeholder="请输入城市中文或拼音">
        </el-input>
        <div v-show="input!==''" class="searchContent" :class="{empty:searchContent.length===0}">
          <div
            @click="addRecentCity(searchItem)"
            v-show="searchContent.length>0"
            v-for="(searchItem,index) in searchContent"
            :key="index">{{searchItem}}
          </div>
          <div v-show="searchContent.length===0">未找到匹配的城市</div>
        </div>
        <i v-show="input!==''"></i>
      </div>
    </div>
    <!--    热门城市-->
    <dl class="hotCity">
      <dt>热门城市：</dt>
      <dd @click="addRecentCity(city)" v-for="(city,index) in hotCity" :key="index">{{city}}</dd>
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
  import {reqCitiesList, reqProvinceCity} from "@/Api";
  import {mapMutations} from "vuex";

  export default {
    name: "ChangCity",
    data() {
      return {
        citiesList: [],
        recentlyList: [],
        input: "",
        provinceCity: [],
        provinceId: "",
        cityId: "",
        searchContent: []
      }
    },
    mounted() {
      this.getCitiesList();
      let recentlyList = JSON.parse(sessionStorage.getItem("recentCity_key"));
      if (recentlyList) {
        this.recentlyList = recentlyList;
      }
      ;
      this.getProvinceCity();
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
          this.$router.push("/");
          this.changeIndexCityMutation(city);
          return;
        }
        this.recentlyList.unshift(city);
        //跳转到首页
        this.$router.push("/");
        this.changeIndexCityMutation(city);
      },
      //获取省市的数据
      async getProvinceCity() {
        let result = await reqProvinceCity();
        this.provinceCity = result;
      },
      //搜索框的事件
      searchCity(value) {
        if (value === "") {
          this.searchContent = [];
          return;
        };
        this.searchContent = [];
        let key = value.charCodeAt(0);
        let city = this.provinceCity.map(item => item.cityInfoList).map(item => {
          return item.map(name => {
            return {acronym: name.acronym, name: name.name, pinyin: name.pinyin}
          })
        })
        if ((key >= 97 && key <= 122) || (key >= 65 && key <= 90)) {
          for (let i = 0; i < city.length; i++) {
            for (let j = 0; j < city[i].length; j++) {
              if (city[i][j].pinyin.indexOf(value) === 0) {
                this.searchContent.push(city[i][j].name);
                if (city[i][j].acronym.slice(0, 1) === value) {
                  if (this.searchContent.filter(item=>item===city[i][j])===-1){
                    console.log(111);
                    this.searchContent.push(city[i][j].name);
                  }
                  if (city[i][j].acronym === value) {
                    if (this.searchContent.filter(item=>item===city[i][j])===-1){
                      console.log(111);
                      this.searchContent.push(city[i][j].name);
                    }
                  }
                }
              }
            }
          }
        } else {
          // console.log(key);
          for (let i = 0; i < city.length; i++) {
            for (let j = 0; j < city[i].length; j++) {
              if (city[i][j].name.indexOf(value) === 0) {
                this.searchContent.push(city[i][j].name);
              }
            }
          }
        }
      }
    },
    computed: {
      cityList() {
        if (this.provinceId !== "") {
          return this.provinceCity.find(item => item.provinceName === this.provinceId).cityInfoList
        }
      },
      hotCity(){
        let hotCityList=[];
        let city = this.citiesList.map(item => item[1]).map(item => {
          return item.map(name => {
            return {name: name.name, isHot:name.isHot}
          })
        });
        for (let i = 0; i < city.length; i++) {
          for (let j = 0; j < city[i].length; j++) {
            if (city[i][j].isHot) {
              hotCityList.push(city[i][j].name);
            }
          }
        }
        return hotCityList;
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

        /deep/ .province {
          width: 150px;
          height: 40px;
          margin: 0 10px;
        }

        /deep/ .cities {
          width: 150px;
          height: 40px;
          margin: 0 10px;
        }
      }

      .searchInput {
        float: left;
        /*line-height: 18px;*/
        display: flex;
        position: relative;

        span {
          white-space: nowrap;
          line-height: 40px;
          margin-left: 40px;
        }

        .searchContent {
          width: 180px;
          height: 200px;
          position: absolute;
          z-index: 99;
          top: 50px;
          left: 125px;
          border: 1px solid #e5e5e5;
          background: #fff;
          overflow: auto;
          padding-left: 20px;
          font-size: 13px;
          color: #666;
          border-radius: 4px;

          &.empty {
            height: 30px !important;
          }

          div {
            margin: 5px 0;
            cursor: pointer;
          }
        }

        i {
          position: absolute;
          width: 8px;
          height: 8px;
          top: 46px;
          left: 140px;
          background: #fff;
          z-index: 100;
          border-top: 1px solid #e5e5e5;
          border-right: 1px solid #e5e5e5;
          transform: rotate(-45deg);
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
        margin: 10px 20px;
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
