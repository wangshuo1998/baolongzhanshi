<template>
<!--美团导航-->
  <div class="indexNav">
    <div class="navTitle">
      美团导航
    </div>
<!--    热门城市-->
    <dl class="hotCity clearfix">
      <dt>热门城市</dt>
      <dl class="clearfix">
        <dd><a href="javascript:;" title="合肥">合肥</a></dd>
        <dd><a href="javascript:;" title="苏州">苏州</a></dd>
        <dd><a href="javascript:;" title="哈尔滨">哈尔滨</a></dd>
        <dd><a href="javascript:;" title="长春">长春</a></dd>
        <dd><a href="javascript:;" title="太原">太原</a></dd>
        <dd><a href="javascript:;" title="深圳">深圳</a></dd>
        <dd><a href="javascript:;" title="无锡">无锡</a></dd>
        <dd><a href="javascript:;" title="西安">西安</a></dd>
        <dd><a href="javascript:;" title="东莞">东莞</a></dd>
        <dd><a href="javascript:;" title="昆明">昆明</a></dd>
        <dd><a href="javascript:;" title="佛山">佛山</a></dd>
        <dd><a href="javascript:;" title="杭州">杭州</a></dd>
        <dd><a href="javascript:;" title="贵阳">贵阳</a></dd>
        <dd><a href="javascript:;" title="常州">常州</a></dd>
        <dd><a href="javascript:;" title="广州">广州</a></dd>
        <dd><a href="javascript:;" title="重庆">重庆</a></dd>
        <dd><a href="javascript:;" title="南京">南京</a></dd>
        <dd><a href="javascript:;" title="南宁">南宁</a></dd>
        <dd><a href="javascript:;" title="成都">成都</a></dd>
        <dd><a href="javascript:;" title="郑州">郑州</a></dd>
      </dl>
    </dl>
<!--    热门分类-->
    <dl class="hotCategories clearfix">
      <dt>热门分类</dt>
      <dl class="clearfix">
        <dd><a href="javascript:;" title="酒店">酒店</a></dd>
        <dd><a href="javascript:;" title="美食">美食</a></dd>
        <dd><a href="javascript:;" title="休闲娱乐">休闲娱乐</a></dd>
        <dd><a href="javascript:;" title="运动健身">运动健身</a></dd>
        <dd><a href="javascript:;" title="生活服务">生活服务</a></dd>
        <dd><a href="javascript:;" title="上门服务">上门服务</a></dd>
        <dd><a href="javascript:;" title="购物">购物</a></dd>
        <dd><a href="javascript:;" title="时尚购">时尚购</a></dd>
        <dd><a href="javascript:;" title="本地购物">本地购物</a></dd>
        <dd><a href="javascript:;" title="结婚">结婚</a></dd>
        <dd><a href="javascript:;" title="摄影写真">摄影写真</a></dd>
        <dd><a href="javascript:;" title="宴会">宴会</a></dd>
        <dd><a href="javascript:;" title="丽人">丽人</a></dd>
        <dd><a href="javascript:;" title="母婴亲子">母婴亲子</a></dd>
        <dd><a href="javascript:;" title="学习培训">学习培训</a></dd>
        <dd><a href="javascript:;" title="家装">家装</a></dd>
        <dd><a href="javascript:;" title="汽车服务">汽车服务</a></dd>
        <dd><a href="javascript:;" title="医疗">医疗</a></dd>
        <dd><a href="javascript:;" title="宠物">宠物</a></dd>
      </dl>
    </dl>
<!--    周边热门-->
    <dl class="hotSurrounding clearfix">
      <dt>周边热门</dt>
      <dl class="clearfix">
        <dd><a href="javascript:;" title="廊坊酒店">廊坊酒店</a></dd>
        <dd><a href="javascript:;" title="廊坊美食">廊坊美食</a></dd>
        <dd><a href="javascript:;" title="廊坊休闲娱乐">廊坊休闲娱乐</a></dd>
        <dd><a href="javascript:;" title="廊坊运动健身">廊坊运动健身</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县生活服务">大厂回族自治县生活服务</a></dd>
        <dd><a href="javascript:;" title="门头沟区上门服务">门头沟区上门服务</a></dd>
        <dd><a href="javascript:;" title="门头沟区购物">门头沟区购物</a></dd>
        <dd><a href="javascript:;" title="廊坊时尚购">廊坊时尚购</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县本地购物">大厂回族自治县本地购物</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县结婚">大厂回族自治县结婚</a></dd>
        <dd><a href="javascript:;" title="门头沟区摄影写真">门头沟区摄影写真</a></dd>
        <dd><a href="javascript:;" title="门头沟区宴会">门头沟区宴会</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县丽人">大厂回族自治县丽人</a></dd>
        <dd><a href="javascript:;" title="门头沟区母婴亲子">门头沟区母婴亲子</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县学习培训">大厂回族自治县学习培训</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县家装">大厂回族自治县家装</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县汽车服务">大厂回族自治县汽车服务</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县医疗">大厂回族自治县医疗</a></dd>
        <dd><a href="javascript:;" title="大厂回族自治县宠物">大厂回族自治县宠物</a></dd>
      </dl>
    </dl>
  </div>
</template>
<script>
    export default{
        name:"IndexNav"
    }
</script>
<style lang = "less" scoped>
  .indexNav{
    width: 1190px;
    margin: 40px auto 40px auto;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
    .navTitle{
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      font-weight: 500;
      color: #222;
      padding: 6px 0 0 20px;
    }
    .hotCity,.hotCategories{
      dt{
        float: left;
        width: 100px;
        text-align: center;
        font-size: 14px;
        color: #222;
        padding: 10px 0;
      }
      &>dl{
        float: left;
        width: 1080px;
        padding-top: 12px;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
        box-sizing: border-box;
        dd{
          float: left;
          width: 100px;
          height: 17px;
          font-size: 12px;
          margin-bottom: 13px;
          a{
            color: #666;
            max-width: 80px;
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
    .hotSurrounding{
      dt{
        float: left;
        width: 100px;
        text-align: center;
        font-size: 14px;
        color: #222;
        padding: 10px 0;
      }
      &>dl{
        float: left;
        width: 1080px;
        padding-top: 12px;
        overflow: hidden;
        box-sizing: border-box;
        dd{
          float: left;
          width: 100px;
          height: 17px;
          font-size: 12px;
          margin-bottom: 13px;
          a{
            color: #666;
            max-width: 80px;
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
