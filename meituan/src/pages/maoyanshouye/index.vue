<template>
  <div>
    <maoyanHeader></maoyanHeader>
    <!-- 中间部分 -->
    <div class="banner">
      <div class="banner-two">
        <a href="javascript:;">
          <img src="@/assets/xiaohuImages/banner.png" alt="">
        </a>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <!-- 主页面 -->
        <div class="main">
          <div class="movie-grid">
            <!-- 第一部分 -->
            <div class="panel">
              <div class="panel-header">
                <span class="panel-title">正在热映（82部）</span>
                <span class="panel-more">
                  <a href="javascript:;">全部</a>
                </span>
              </div>
              <div class="panel-content">
                <dl class="move-list">
                  <dd v-for="(cat, index) in hotMoviesListHot" :key="cat.id">
                    <div class="move-item">
                      <div class="move-poster">
                        <img :src="cat.img" alt="">
                      </div>
                      <div class="move-title">{{cat.nm}}</div>
                      <div class="move-detail">
                        <a href="javascript:;">购票</a>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="kong"></div>
            <!-- 第二部分 -->
            <div class="panel">
              <div class="panel-header">
                <span class="second-title">即将上映（118部）</span>
                <span class="second-more">
                  <a href="javascript:;">全部</a>
                </span>
              </div>
              <div class="panel-content">
                <dl class="move-list">
                  <dd v-for="(com,index) in comingMoviesListCom" :key="com.id">
                    <div class="move-item">
                      <div class="move-poster">
                        <img :src="com.img" alt="">
                      </div>
                      <div class="move-title">{{com.nm}}</div>
                      <div class="second-detail">
                        <span>{{com.wish}}人想看</span>
                      </div>
                      <div class="presale">
                        <span class="yugao">预告片</span>
                        <span class="yushou">预售</span>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <!-- 第三部分 -->
            <div class="kong2"></div>
            <div class="panel">
              <div class="panel-header">
                <span class="panel-title">热播电影</span>
                <span class="xiao">
                  <a href="javascript:;">爱情</a>
                </span>
                <span class="xiao">
                  <a href="javascript:;">喜剧</a>
                </span>
                <span class="xiao">
                  <a href="javascript:;">动作</a>
                </span>
                <span class="xiao">
                  <a href="javascript:;">恐怖</a>
                </span>
                <span class="xiao">
                  <a href="javascript:;">动画</a>
                </span>
                <span class="you-more">
                  <a href="javascript:;">全部</a>
                </span>
              </div>
              <div class="panel-content">
                <dl class="move-list">
                  <dd id="first-tu">
                    <div class="move-item">
                      <div class="move-poster">
                        <img src="@/assets/xiaohuImages/move4.jpg" alt="">
                      </div>
                      <div class="move-title">魁拔Ⅲ战神崛起</div>
                    </div>
                  </dd>
                  <dd v-for="(comed,index) in comingMoviesListComed" :key="comed.id">
                    <div class="move-item">
                      <div class="move-poster">
                        <img :src="comed.img" alt="">
                      </div>
                      <div class="move-title">{{comed.nm}}</div>

                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            </div>
          </div>
        </div>
        <!-- 侧边栏 -->
        <div class="aside">
          <!-- 侧边栏第一个 -->
          <div class="panel">
            <div class="panel-header">
              <span class="panel-title">
                <h2>今日票房</h2>
              </span>
            </div>
            <div class="panel-content">
              <ul class="ranking-box">
                <li class="ranking-item" style="cursor:pointer">
                  <div class="ranking-top-left">
                    <img src="@/assets/xiaohuImages/xiaotu.jpg" alt="">
                  </div>
                  <div class="ranking-top-right">
                    <span class="ranking-top-moive-name">金刚川</span>
                    <span class="stonefont">267.97万</span>
                  </div>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>2</i>
                    <span class="zhong">数码宝贝：最后的进化</span>
                  </span>
                  <span class="ranking-num-info">59.95万</span>
                </li>
                <li class="ranking-item3" style="cursor:pointer">
                  <span class="normal-link">
                    <i>3</i>
                    <span class="zhong">我和我的家乡</span>
                  </span>
                  <span class="ranking-num-info">57.72万</span>
                </li>
                <li class="ranking-item4" style="cursor:pointer">
                  <span class="normal-link">
                    <i>4</i>
                    <span class="zhong">夺冠</span>
                  </span>
                  <span class="ranking-num-info">25.40万</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>5</i>
                    <span class="zhong">一点就到家</span>
                  </span>
                  <span class="ranking-num-info">13.97万</span>
                </li>
              </ul>
            </div>
          </div>
          <!--今日大盘  -->
          <div class="box-total-wrapper">
            <div class="jinri">
              <div class="jinri2">
                <h3>今日大盘</h3>
              </div>
            </div>
            <div>
              <p class="gengduo">
                <span class="num">
                  <span class="stonefont">478.7</span>
                  <span class="num2">万</span>
                </span>
                <a href="javascript:;">查看更多</a>
              </p>
              <p class="meta-info">
                <span class="pull-left">北京时间 08：38：05</span>
                <span class="pull-right">猫眼专业版实时票房数据</span>
              </p>
            </div>
          </div>
          <!-- 侧边栏第二个 -->
          <div class="cebian-second-panel">
            <div class="panel-header">
              <span class="panel-1">最受期待</span>
              <span class="panel-2">查看完整榜单</span>
            </div>
            <div class="panel-content">
              <ul class="ranking-wrapper">
                <li class="ranking-item">
                  <div class="hezi">
                    <a href="javascript:;">
                      <div class="ranking-top-left">
                        <img src="@/assets/xiaohuImages/wennuan.jpg" alt="">
                      </div>
                      <div class="ranking-top-right">
                        <div class="ranking-top-right-main">
                          <span class="ranking-movie-name">温暖的抱抱</span>
                          <p class="ranking-release-wish">上映时间：2020-12-31</p>
                          <p class="ranking-top-wish">70991人想看</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
                <!-- ul 2 -->
                <li class="second-2">
                  <div class="min-1">
                    <a href="javascript:;">
                      <img src="@/assets/xiaohuImages/tangren.jpg" alt="">
                    </a>
                    <div class="box-1" style="cursor:pointer">
                      <span class="dibu1">唐人街探案3</span>
                      <span class="dibu2">2897643人想看</span>
                    </div>
                  </div>
                  <div class="min-2">
                    <a href="javascript:;">
                      <img src="@/assets/xiaohuImages/songni.jpg" alt="">
                    </a>
                    <div class="box-2" style="cursor:pointer">
                      <span class="dibu3">送你一朵小红花</span>
                      <span class="dibu4">1647997人想看</span>
                    </div>
                  </div>
                </li>
                <!-- ul 3 -->
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>4</i>
                    <span class="zhong">如果声音不记得</span>
                  </span>
                  <span class="ranking-num-info">62636人想看</span>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>5</i>
                    <span class="zhong">明天你是否依然爱我</span>
                  </span>
                  <span class="ranking-num-info">55851人想看</span>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>6</i>
                    <span class="zhong">温暖的抱抱</span>
                  </span>
                  <span class="ranking-num-info">72222人想看</span>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>7</i>
                    <span class="zhong">晴雅集</span>
                  </span>
                  <span class="ranking-num-info">47316人想看</span>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>8</i>
                    <span class="zhong">除暴</span>
                  </span>
                  <span class="ranking-num-info">38098人想看</span>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>9</i>
                    <span class="zhong">风平浪静</span>
                  </span>
                  <span class="ranking-num-info">37356人想看</span>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>10</i>
                    <span class="zhong">西游记真假美猴王</span>
                  </span>
                  <span class="ranking-num-info">413444人想看</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 侧边栏第三个 -->
          <div class="cebian-second-panel">
            <div class="panel-header">
              <span class="panel-1">TOP  100</span>
              <span class="panel-2">查看完整榜单</span>
            </div>
            <div class="panel-content">
              <ul class="ranking-box">
                <li class="ranking-item-second" style="cursor:pointer">
                  <div class="ranking-top-left">
                    <img src="@/assets/xiaohuImages/dong.jpg" alt="">
                  </div>
                  <div class="ranking-top-right">
                    <span class="ranking-top-moive-name">射雕英雄传之东成西就</span>
                    <span class="stonefont">8.8分</span>
                  </div>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>2</i>
                    <span class="zhong">十二怒汉</span>
                  </span>
                  <span class="ranking-num-info">9.1分</span>
                </li>
                <li class="ranking-item3" style="cursor:pointer">
                  <span class="normal-link">
                    <i>3</i>
                    <span class="zhong">剪刀手爱德华</span>
                  </span>
                  <span class="ranking-num-info">8.8分</span>
                </li>
                <li class="ranking-item4" style="cursor:pointer">
                  <span class="normal-link">
                    <i>4</i>
                    <span class="zhong">乱世佳人</span>
                  </span>
                  <span class="ranking-num-info">9.1分</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>5</i>
                    <span class="zhong">初恋的那件小事</span>
                  </span>
                  <span class="ranking-num-info">8.8分</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>6</i>
                    <span class="zhong">泰坦尼克号</span>
                  </span>
                  <span class="ranking-num-info">9.4分</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>7</i>
                    <span class="zhong">搏击俱乐部</span>
                  </span>
                  <span class="ranking-num-info">8.8分</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>8</i>
                    <span class="zhong">海上钢琴师</span>
                  </span>
                  <span class="ranking-num-info">9.3分</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>9</i>
                    <span class="zhong">甜蜜蜜</span>
                  </span>
                  <span class="ranking-num-info">9.2分</span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>10</i>
                    <span class="zhong">肖申克的救赎</span>
                  </span>
                  <span class="ranking-num-info">9.5分</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 侧边栏第四个 -->
           <div class="panel-for">
            <div class="panel-header">
              <span class="panel-title">
                <h2>热门影人</h2>
              </span>
            </div>
            <div class="panel-content">
              <ul class="ranking-box">
                <li class="ranking-item" style="cursor:pointer">
                  <div class="ranking-top-left">
                    <img src="@/assets/xiaohuImages/peng.jpg" alt="">
                  </div>
                  <div class="ranking-top-right">
                    <span class="stonefont">彭昱畅</span>
                  </div>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>2</i>
                    <span class="zhong">黄渤</span>
                  </span>
                </li>
                <li class="ranking-item3" style="cursor:pointer">
                  <span class="normal-link">
                    <i>3</i>
                    <span class="zhong">刘昊然</span>
                  </span>
                </li>
                <li class="ranking-item4" style="cursor:pointer">
                  <span class="normal-link">
                    <i>4</i>
                    <span class="zhong">张译</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>5</i>
                    <span class="zhong">吴京</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>6</i>
                    <span class="zhong">邓超</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>7</i>
                    <span class="zhong">刘敏涛</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>8</i>
                    <span class="zhong">巩俐</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>9</i>
                    <span class="zhong">范伟</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>10</i>
                    <span class="zhong">金晨</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 侧边栏第五个 -->
          <div class="panel-last">
            <div class="panel-header">
              <span class="panel-title">
                <h2>娱乐热点</h2>
              </span>
            </div>
            <div class="panel-content">
              <ul class="ranking-box">
                <li class="ranking-item" style="cursor:pointer">
                  <div class="ranking-top-left">
                    <img src="@/assets/xiaohuImages/last.jpg" alt="">
                  </div>
                  <div class="ranking-top-right">
                    <span class="stonefont">《如意芳霏》 探案危机四伏 鞠婧祎 张哲瀚甜蜜定情</span>
                  </div>
                </li>
                <li class="ranking-item2" style="cursor:pointer">
                  <span class="normal-link">
                    <i>2</i>
                    <span class="zhong">《风犬少年的天空》全剧收官曝告别海报 风犬故事不会到此为止</span>
                  </span>
                </li>
                <li class="ranking-item3" style="cursor:pointer">
                  <span class="normal-link">
                    <i>3</i>
                    <span class="zhong">《网络凶铃》短视频火了！网友花式搞怪，脑洞大开</span>
                  </span>
                </li>
                <li class="ranking-item4" style="cursor:pointer">
                  <span class="normal-link">
                    <i>4</i>
                    <span class="zhong">  动画电影《奇妙王国之魔法奇缘》定档2020年12月19日！</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>5</i>
                    <span class="zhong">黄海操刀《海兽之子》中国区海报 11.20重拾夏日的美好悸动</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>6</i>
                    <span class="zhong">《翱翔雄心》释出“誓死守卫”海报 11月13日空战一触即发</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>7</i>
                    <span class="zhong">《风平浪静》首映礼徐峥曹保平姚晨助阵 后劲十足爱情戏高级甜</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>8</i>
                    <span class="zhong">《地狱男爵》震撼视效大赏：地狱男爵生猛一挑三武力值冲破银幕</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>9</i>
                    <span class="zhong">奇幻冒险动画电影《龙神之子》全国持续热映中</span>
                  </span>
                </li>
                <li class="ranking-item5" style="cursor:pointer">
                  <span class="normal-link">
                    <i>10</i>
                    <span class="zhong">100%还原大场面！《野性的呼唤》极致视效开启震撼冒险</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <maoyanFooter></maoyanFooter>
    </div>
</template>

<script>
import maoyanHeader from "@/components/maoyanHeader";
import maoyanFooter from "@/components/maoyanFooter";
import {mapState} from 'vuex';
export default {
  name: "maoyanshouye",
  components: {
    maoyanHeader,
    maoyanFooter,
  },
  data() {
    return {
      hotMoviesListHot:[],
      comingMoviesListCom:[],
      comingMoviesListComed:[]
    }
  },
  mounted() {
    this.getHotMoviesList();
    this.getComingMoviesList();
  },
  methods: {
    getHotMoviesList(){
      this.$store.dispatch('getHotMoviesList')
    },
    getComingMoviesList(){
      this.$store.dispatch('getComingMoviesList')
    },
  },
  computed: {
    ...mapState({
      hotMoviesList:state=>state.catShouye.hotMoviesList,
      comingMoviesList:state=>state.catShouye.comingMoviesList

    }),

  },
  watch: {
    hotMoviesList(value){

      this.hotMoviesListHot = value.hot.slice(0,8)
    },
    comingMoviesList:{
      handler(){
        this.comingMoviesListCom=this.comingMoviesList.coming.slice(0,8)
      }
    },
    comingMoviesListCom:{
      handler(){
        this.comingMoviesListComed=this.comingMoviesList.coming.slice(0,6)
      }
    }
    // comingMoviesList(value){
    //   this.comingMoviesListComed=value.coming.slice(0,6)
    // },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 3680px;
  // background-color: rgb(255, 255, 255);
}
.container .content {
  height: 100%;
  width: 1200px;
  // background-color: blue;
  margin: 0 auto;
  margin-top: 60px;
  position: relative;
}
// banner大图
.banner {
  width: 1903px;
  height: 440px;
  margin: 0 auto;

}
.banner-two {
  width: 1600px;
  height: 440px;
  margin: 0 auto;
}
.banner-two img {
  margin-left: 90px;
}

// 中间区第一个的头部
.content .main .movie-grid .panel .panel-header .panel-title {
  font-size: 26px;
  font-weight: 400;
  color: #ef4238;
}
.content .main .movie-grid .panel .panel-header .panel-more a {
  font-size: 14px;
  color: #ef4238;
  margin-left: 500px;
}
// 中间区第一个的电影图片区
.content .main .movie-grid .panel .panel-content {
  width: 750px;
  height: 569px;
  margin-top: 23px;
}

.content .main .movie-grid .panel .panel-content .move-list dd {
  display: inline-block;
  width: 160px;
  height: 220px;
  margin: 0 0 70px 22px;
}
.content .main .movie-grid .panel .panel-content .move-list .move-title {
  font-size: 16px;
  color: white;
  margin-top: -35px;
  margin-left: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .move-detail {
  width: 160px;
  height: 39px;
  border: 1px solid gray;
  margin-top: 10px;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .move-detail:hover {
  background-color: #ef4238;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .move-detail
  a {
  display: block;
  color: #ef4238;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .move-detail
  a:hover {
  color: white;
}
.panel-content .move-poster{
  cursor: pointer;
}
// 第二部分区域
.content .main .movie-grid .kong {
  width: 100%;
  height: 60px;
}
.content .main .movie-grid .panel .panel-header .second-title {
  font-size: 26px;
  font-weight: 400;
  color: #2d98f3;
}
.content .main .movie-grid .panel .panel-header .second-more a {
  font-size: 14px;
  color: #2d98f3;
  margin-left: 500px;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .second-detail {
  width: 160px;
  height: 34px;
  background-color: #fbfbfb;
  margin-top: 9px;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .second-detail
  span {
  display: block;
  color: #ffb400;
  margin-left: 10px;
  line-height: 35px;
  font-size: 14px;
}
.content
  .main
  .movie-grid
  .panel
  .panel-content
  .move-list
  .move-item
  .presale {
  width: 160px;
  height: 39px;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
}
.second-poster {
  margin-top: 75px;
}
.move-list .move-item .yugao {
  font-size: 14px;
  color: #999;
  margin-left: 20px;
}
.move-list .move-item .yushou {
  font-size: 14px;
  color: #999;
  margin-left: 40px;
}
// 第三部分
.kong2 {
  width: 100%;
  height: 200px;
}
.panel-header .xiao {
  margin-left: 10px;
}
.panel-header .xiao a {
  font-size: 14px;
  color: #333;
}
.panel-header .you-more {
  margin-left: 420px;
}
.panel-header .you-more a {
  color: #ef4238;
}

#first-tu {
  width: 350px;
  height: 220px;
}
.last-poster {
  margin-top: -40px;
}
// 侧边栏第一个
.aside {
  width: 360px;
  height: 3600px;
  position: absolute;
  top: 585px;
  left: 1190px;
  margin-left: 100px;
}
// 头部
.aside .panel-header h2 {
  font-size: 26px;
  font-weight: 400;
  color: #ef4238;
}
// 1
.panel .ranking-item {
  width: 360px;
  height: 80px;
  margin-top: 18px;
  overflow: hidden;
  border: 1px solid #efefef;
  position: relative;
}
.panel .ranking-item:hover {
  background-color: #efefef;
}
.panel .ranking-item .ranking-top-moive-name {
  margin-top: -65px;
  margin-left: 130px;
  position: absolute;
  font-size: 18px;
  color: #333;
}
.stonefont {
  position: absolute;
  margin-left: 130px;
  margin-top: -35px;
  font-size: 14px;
  color: #ef4238;
}
// 2
.ranking-item2 {
  width: 360px;
  height: 55px;
}
.ranking-item2 i {
  color: #ef4238;
  font-size: 18px;
  line-height: 55px;
}
.ranking-item2 .zhong {
  font-size: 16px;
  color: #333;
  margin-left: 15px;
}
.ranking-item2 .ranking-num-info {
  font-size: 14px;
  color: #ef4238;
  float: right;
  line-height: 55px;
}
.ranking-item2:hover {
  background-color: #efefef;
}
// 3
.ranking-item3 {
  width: 360px;
  height: 55px;
}
.ranking-item3 i {
  color: #ef4238;
  font-size: 18px;
  line-height: 55px;
}
.ranking-item3 .zhong {
  font-size: 16px;
  color: #333;
  margin-left: 15px;
}
.ranking-item3 .ranking-num-info {
  font-size: 14px;
  color: #ef4238;
  float: right;
  line-height: 55px;
}
.ranking-item3:hover {
  background-color: #efefef;
}
// 4
.ranking-item4 {
  width: 360px;
  height: 55px;
}
.ranking-item4 i {
  color: #ef4238;
  font-size: 18px;
  line-height: 55px;
}
.ranking-item4 .zhong {
  font-size: 16px;
  color: #333;
  margin-left: 15px;
}
.ranking-item4 .ranking-num-info {
  font-size: 14px;
  color: #ef4238;
  float: right;
  line-height: 55px;
}
.ranking-item4:hover {
  background-color: #efefef;
}
// 5
.ranking-item5 {
  width: 360px;
  height: 55px;
}
.ranking-item5 i {
  color: #ef4238;
  font-size: 18px;
  line-height: 55px;
}
.ranking-item5 .zhong {
  font-size: 16px;
  color: #333;
  margin-left: 15px;
}
.ranking-item5 .ranking-num-info {
  font-size: 14px;
  color: #ef4238;
  float: right;
  line-height: 55px;
}
.ranking-item5:hover {
  background-color: #efefef;
}
// 今日大盘
.box-total-wrapper {
  width: 360px;
  height: 105px;
  margin-top: 30px;
  border: 1px solid #efefef;
}
.box-total-wrapper .jinri {
  width: 43px;
  height: 105px;
  background-color: #ef4238;
}
.box-total-wrapper .jinri2 {
  width: 23px;
  height: 105px;
  background-color: #ef4238;
}
.box-total-wrapper h3 {
  color: #fff;
  font-size: 17px;
  margin-left: 12px;
  padding-top: 7px;
}
.box-total-wrapper .stonefont {
  margin-left: 50px;
  font-size: 30px;
  font-weight: 700;
  margin-top: -80px;
}
.box-total-wrapper .num {
  position: relative;
}
.box-total-wrapper .num2 {
  margin-left: 140px;
  position: absolute;
  margin-top: -67px;
  color: #ef4238;
}
.box-total-wrapper .gengduo {
  position: relative;
}
.box-total-wrapper a {
  position: absolute;
  margin-top: -67px;
  margin-left: 260px;
  color: #ef4238;
  font-size: 14px;
}
.box-total-wrapper .meta-info {
  position: relative;
}
.meta-info .pull-left {
  position: absolute;
  color: #999;
  font-size: 14px;
  margin-left: 50px;
  margin-top: -37px;
}
.meta-info .pull-right {
  position: absolute;
  color: #999;
  font-size: 14px;
  margin-left: 195px;
  margin-top: -37px;
}
// 侧边栏第二个
.cebian-second-panel {
  width: 360px;
  height: 855px;
  margin-top: 85px;
  margin-bottom: 115px;
}
.cebian-second-panel .panel-header {
  width: 360px;
  height: 26px;
}
.cebian-second-panel .panel-1 {
  font-size: 26px;
  font-weight: 400;
  color: #ffb400;
}
.cebian-second-panel .panel-2 {
  font-size: 14px;
  color: #ffb400;
  float: right;
  line-height: 40px;
}
// ul 1
.cebian-second-panel .ranking-item {
  width: 360px;
  height: 194px;
  margin-top: 31px;
  position: relative;
}
.cebian-second-panel .ranking-item:hover {
  background-color: #efefef;
}
.cebian-second-panel .ranking-item .ranking-movie-name{
  position: absolute;
  font-size: 18px;
  color: #333;
  margin-left: 150px;
  margin-top: -140px;
}
.cebian-second-panel .ranking-item .ranking-release-wish{
  position: absolute;
  color: #999;
  margin-left: 150px;
  margin-top: -100px;
}
.cebian-second-panel .ranking-item .ranking-top-wish{
  position: absolute;
  color: #ffb400;
  font-size: 14px;
  margin-left: 150px;
  margin-top: -60px;
}
// ul 2
.cebian-second-panel .second-2{
  width: 360px;
  height: 180px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.cebian-second-panel .min-1{
  float: left;
  width: 170px;
  height: 180px;
}
.cebian-second-panel .min-1:hover{
  background-color: #efefef;
}
.cebian-second-panel .min-2{
  float: right;
  width: 170px;
  height: 180px;
}
.cebian-second-panel .min-2:hover{
  background-color: #efefef;
}
.cebian-second-panel .box-1{
  width: 170px;
  height: 60px;
  margin-top: -4px;
  border: 1px solid #efefef;

}
.cebian-second-panel .dibu1{
  font-size: 18px;
  margin-left: 10px;
   display: block;
   margin-top: 10px;
}
.cebian-second-panel .dibu2{
  font-size: 14px;
  color: #fdb863;
  margin-left: 10px;
}
.cebian-second-panel .box-2{
  width: 170px;
  height: 60px;
  margin-top: -4px;
  border: 1px solid #efefef;

}
.cebian-second-panel .dibu3{
  font-size: 18px;
  margin-left: 10px;
   display: block;
   margin-top: 10px;
}
.cebian-second-panel .dibu4{
  font-size: 14px;
  color: #fdb863;
  margin-left: 10px;
}
.cebian-second-panel .ranking-num-info{
  color: #ffb400;
}
// 侧边栏第三个
.ranking-item-second{
  width: 360px;
  height: 84px;
  margin-top: 35px;
  position: relative;
}
.ranking-item-second:hover{
  background-color: #efefef;
}
.ranking-item-second .ranking-top-moive-name{
  position: absolute;
  margin-left: 130px;
  margin-top: -66px;
  font-size: 18px;
}
.ranking-item-second .stonefont{
  color: #ffb400;
}
// 侧边栏第四个
.panel-for{
  margin-top: -260px;
  margin-bottom: 80px;
}
.panel-for .ranking-item{
  margin-top: 20px;
  margin-bottom: 15px;
}
.panel-for .ranking-item .stonefont{
 color: #333;
}
.panel-for li:hover{
  background: #fff;
}
.panel-for .zhong{
  font-size: 14px;

}
.panel-for .zhong:hover{
  color: #ef4238;

}
// 侧边最后一个
.panel-last .stonefont{
  color: #333;
  margin-top: -60px;
}
.panel-last .ranking-top-left{
  margin-top: 20px;
}
.panel-last .stonefont:hover{
  color: #ef4238;
}
.panel-last i{
  font-size: 16px;
}
.panel-last .zhong{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 360px;
  display: block;
  margin-top: -38px;
  font-size: 14px;
  margin-left: 20px;
}
.panel-last .zhong:hover{
  color: #ef4238;
}
.panel-last li:hover{
  background-color: #fff;

}
</style>
