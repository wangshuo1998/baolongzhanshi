<template>
  <!--    推荐民宿-->
  <div class="recommendHouseContainer">
    <!--      上边的导航-->
    <div class="recommendHouseNav">
      <dl class="clearfix">
        <dt>推荐民宿</dt>
        <dd
          v-for="(city,index) in recommendHouseCities"
          :key="city.cityId" @mouseenter="changeCityDetail(city.cityId)" :class="{active:city.cityId===houseId}">
          {{city.cityName}}
        </dd>
        <dd class="allItem clearfix">
          全部
          <i class="iconfont iconjiantou"></i>
        </dd>
      </dl>
    </div>
    <!--    下侧得信息展示-->
    <div class="recommendHouseList">
      <div class="houseListContainer clearfix">
        <div class="houseItemDetail" v-for="(product,index) in productList" :key="product.poiId">
          <div class="topPic">
            <img v-lazy="product.coverImage" alt="">
            <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" alt="">
          </div>
          <div class="bottomInfo">
            <p>{{product.title}}</p>
            <p>整套1居室 可住两人 果园环岛</p>
            <p>￥{{product.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"RecommendHouse",
    props:["recommendHouseCities","recommendHouseList"],
    data(){
      return{
        houseId:110100
      }
    },
    methods:{
      changeCityDetail(id){
        this.houseId = id
      }
    },
    computed:{
      productList(){
        let houseList = this.recommendHouseList.find(item=>item.cityId === this.houseId) || {};
        return houseList.productList || {}
      }
    }
  }
</script>
<style lang="less" scoped>
  /*  清除浮动*/
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }

  /*  推荐民宿*/
  .recommendHouseContainer {
    width: 1190px;
    margin: 40px auto 0 auto;
    background: #fff;
    /*导航*/
    .recommendHouseNav {
      background: #F2C246;
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      color: #FFF;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      padding: 0 10px;

      dl {
        dt {
          float: left;
          font-size: 18px;
          margin-left: 13px;
          margin-right: 10px;
          font-family: MFShangHei-Regular !important;
        }

        dd {
          float: left;
          padding: 0 5px;
          cursor: pointer;
          position: relative;

          &.allItem {
            float: right;

            i {
              font-size: 12px;
              font-weight: bold;
              margin-left: -4px;
            }
          }

          &.active:after {
            content: "";
            background: #fff;
            width: 10px;
            height: 10px;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%) rotate(-45deg);
          }
        }
      }
    }
    /*列表内容*/
    .recommendHouseList{
      width: 100%;
      padding: 20px 20px 0;
      border: 1px solid #e5e5e5;
      border-top: 0px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      .houseListContainer{
        .houseItemDetail{
          float: left;
          width: 370px;
          height: 340px;
          /*margin-bottom: 18px;*/
          &:nth-child(2),&:nth-child(5){
            margin: 0 18px;
          }
          .topPic{
            position: relative;
            img:first-child{
              width: 370px;
              height: 208px;
              border-radius: 4px;
              margin-bottom: 11px;
              cursor: pointer;
            }
            img:last-child{
              position: absolute;
              bottom: -12px;
              right: 15px;
              width: 48px;
              height: 48px;
              border: 2px solid #fff;
              border-radius: 50%;
            }
          }
          .bottomInfo{
            /*padding-bottom: 20px;*/
            p:first-child{
              font-size: 16px;
              color: #222;
              margin: 7px 0;
              font-weight: 400;
              width: 297px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            p:nth-child(2){
              font-size: 12px;
              color: #999;
            }
            p:last-child{
              font-size: 22px;
              color: #FF6600;
              font-weight: 500;
              padding: 4px 0;
            }
          }
        }
      }
    }
  }
</style>

