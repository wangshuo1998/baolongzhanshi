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
      <dd>合肥</dd>
      <dd>合肥</dd>
      <dd>合肥</dd>
      <dd>合肥</dd>
      <dd>合肥</dd>
      <dd>合肥</dd>
      <dd>合肥</dd>
    </dl>
<!--    按拼音首字母进行选择-->
    <dl class="firstLetter">
      <dt>按拼音首字母选择：</dt>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
      <dd>A</dd>
    </dl>
<!--    根据字母展示的城市信息-->
    <div class="cityLetterContainer">
      <div class="cityLetterItem">
        <span>A</span>
        <label>
          <span>鞍山</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
        </label>
      </div>
      <div class="cityLetterItem">
        <span>A</span>
        <label>
          <span>鞍山</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
        </label>
      </div>
      <div class="cityLetterItem">
        <span>A</span>
        <label>
          <span>鞍山</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
        </label>
      </div>
      <div class="cityLetterItem">
        <span>A</span>
        <label>
          <span>鞍山</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
          <span>安庆</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:"ChangCity"
    }
</script>
<style lang = "less" scoped>
  /*清除浮动*/
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }
  .citiesContainer{
    width: 1190px;
    margin: 20px auto;
    min-height: 1000px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
    .provinceSelect{
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      box-sizing: border-box;
      padding-bottom: 25px;
      .provinceInput{
        float: left;
      }
      .searchInput{
        float: left;
        /*line-height: 18px;*/
        display: flex;
        span{
          white-space: nowrap;
          line-height: 40px;
        }
      }
    }
    .hotCity,.recentCity{
      padding: 30px 0;
      border-bottom: 1px solid #e5e5e5;
      box-sizing: border-box;
      dt{
        display: inline-block;
      }
      dd{
        display: inline-block;
        color: #666;
        margin: 0 20px;
        font-size: 14px;
        cursor: pointer;
        &:hover{
          color: #222;
        }
      }
    }
    .firstLetter{
      padding: 30px 0;
      dt{
        display: inline-block;
      }
      dd{
        display: inline-block;
        cursor: pointer;
        width: 25px;
        height: 25px;
        margin: 2px 10px 0;
        color: #666;
        font-size: 15px;
      }
    }
    .cityLetterContainer{
      .cityLetterItem{
        padding: 13px 30px 13px 10px;
        transition: background 0.3s;
        &>span{
          vertical-align:top;
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #222;
          background: #FFD000;
          text-align: center;
          padding-top: 10px;
        }
        label{
          max-width: 1065px;
          display: inline-block;
          span{
            margin: 10px 20px;
            color: #666;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
            &:hover{
              color: #222;
            }
          }
        }
        &:hover{
          background: #F8F8F8;
        }
      }
    }

  }
</style>
