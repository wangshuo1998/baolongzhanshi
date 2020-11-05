<template>
  <!--    猫眼电影区域-->
  <div class="catMoviesContainer">
    <!--      上边的导航-->
    <div class="catMoviesNav">
      <dl class="clearfix">
        <dt>猫眼电影</dt>
        <dd @mouseenter="changeMoviesList('hot')" :class="{active:showMovie==='hot'}">正在热映</dd>
        <dd @mouseenter="changeMoviesList('coming')" :class="{active:showMovie==='coming'}">即将上映</dd>
        <dd class="allItem clearfix">
          全部
          <i class="iconfont iconjiantou"></i>
        </dd>
      </dl>
    </div>
    <!--      下边的电影展示-->
    <div class="swiper-container" ref="slideBanner">
      <div class="swiper-wrapper">
        <div v-if="showMovie === 'hot'" class="swiper-slide" v-for="(movie,index) in hotMoviesList" :key="movie.id">
          <img class="moviePic" :src="movie.img" alt="">
          <img v-show="movie.ver.length>10" class="imax" src="../../../assets/imax.png" alt="">
          <div v-show="movie.sc!==0" class="movieInfo">
            <div class="clearfix">
              <p>观众评<span>{{movie.sc}}</span></p>
              <p>{{movie.nm}}</p>
            </div>
            <a href="javascript:;">购票</a>
          </div>
          <div v-show="movie.sc===0" class="movieInfo">
            <div class="clearfix">
              <p><span>{{movie.wish}}</span>想看</p>
              <p>{{movie.nm}}</p>
            </div>
            <a href="javascript:;">预售</a>
          </div>
        </div>
        <div v-if="showMovie === 'coming'" class="swiper-slide" v-for="(comingMovie,index) in comingMoviesList" :key="comingMovie.id">
          <img class="moviePic" :src="comingMovie.img" alt="">
          <img v-show="comingMovie.ver.length>10" class="imax" src="../../../assets/imax.png" alt="">
          <div class="movieInfo">
            <div class="clearfix">
              <p><span>{{comingMovie.wish}}</span>想看</p>
              <p>{{comingMovie.nm}}</p>
            </div>
            <a href="javascript:;">预售</a>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。-->
      <div class="swiper-button-next"></div><!--右箭头。-->
    </div>
  </div>
</template>
<script>
  import Swiper from "swiper";
  import "swiper/css/swiper.min.css";
  export default {
    name: "CateMovies",
    data(){
      return{
        showMovie:"hot"
      }
    },
    props:["hotMoviesList","comingMoviesList"],
    beforeMount(){
      this.showMoviesList = this.hotMoviesList;
    },
    mounted() {
      // this.showMoviesList = this.hotMoviesList;
    },
    methods:{
      changeMoviesList(type){
        if (type === "hot"){
          this.showMovie = "hot";
        } else{
          this.showMovie = "coming";
        }
      }
    },
    watch:{
      hotMoviesList:{
        handler(){
          this.$nextTick(()=>{
            //轮播图配置
            new Swiper(this.$refs.slideBanner, {//此出的class选择器可以换称ref选择器获取到对应的Swiper轮播
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView : 5.1,
              slidesPerGroup : 5
            });
          })
        }
      },
      comingMoviesList:{
        handler(){
          this.$nextTick(()=>{
            //轮播图配置
            new Swiper(this.$refs.slideBanner, {//此出的class选择器可以换称ref选择器获取到对应的Swiper轮播
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView : 5.1,
              slidesPerGroup : 5
            });
          })
        }
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

  /*  猫眼电影*/
  .catMoviesContainer {
    width: 1190px;
    margin: 0 auto;
    /*导航*/
    .catMoviesNav {
      background: #FE4551;
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
    /*电影展示*/
    .swiper-container{
      width: 100%;
      height: 297px;
      --swiper-navigation-size: 20px;
      &:hover .swiper-button-next {
        opacity: 1;
      }
      &:hover .swiper-button-prev {
        opacity: 1;
      }
      .swiper-button-next, .swiper-button-prev {
        opacity: 0;
        background: rgba(0, 0, 0, 0.8);
        font-size: 20px;
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-weight: bold;
        transition: opacity 0.3s;
      }
      .swiper-wrapper{
        margin: 0 12px;
        .swiper-slide{
          position: relative;
          width: 214px !important;
          height: 297px;
          margin-right: 19px;
          background: #3f3f3f;
          border-radius: 5px;
          /*overflow: hidden;*/
          .moviePic{
            border-radius: 5px;
          }
          .imax{
            position: absolute;
            width: 55px;
            height: 20px;
            left: -6px;
            top: 10px;
            z-index: 99;
          }
          .movieInfo{
            position: absolute;
            bottom: 0;
            left: 0;
            background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(29,45,55,0.80) 99%);
            width: 194px;
            padding: 10px;
            div{
              float: left;
              p:first-child{
                font-size: 12px;
                color: #fff;
                font-weight: 500;
                cursor: pointer;
                span{
                  font-size: 16px;
                  color: #FD9827;
                  font-weight: 500;
                }
              }
              p:last-child{
                cursor: pointer;
                font-size: 16px;
                color: #fff;
                font-weight: 500;
                text-overflow: ellipsis;
                max-width: 110px;
                white-space: nowrap;
                overflow: hidden;
              }
            }
            a{
              float: right;
              padding: 3px 12px 3px 12px;
              font-size: 14px;
              color: #fff;
              background: #FF4949;
              line-height: 20px;
              border-radius: 100px;
              position: relative;
              top: 15px;
            }
          }
        }
      }
    }
  }
</style>
