<template>
  <div>
    <!-- 头部 -->
    <div class="header" id="001">
      <div class="headerContent clearfix">
        <div class="logo">
          <a href="javascript:;" title="返回首页">
            <img src="./images/logo.svg" />
          </a>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="javascript:;">登录 / 注册</a>
            </li>
            <li>
              <a href="javascript:;">成为房东</a>
            </li>
            <li>
              <a href="javascript:;">下载App</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 照片区域 -->
    <div class="picContainer">
      <div class="left">
        <div class="img"></div>
      </div>
      <div class="center">
        <div>
          <div class="small1"></div>
        </div>
        <div class="img2">
          <div class="small2"></div>
        </div>
      </div>
      <div class="right">
        <div>
          <div class="small3"></div>
        </div>
        <div class="img2">
          <div class="small4"></div>
        </div>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="contentContainer clearfix">
      <!-- 主要内容头部 -->
      <div class="top clearfix">
        <div class="wrap clearfix">
          <ul>
            <li @click="changeNavNum(0)" :class="{ active: navNum === 0 }">
              <a href="#001">
                <div class="tag">概览</div>
                <div class="eTag">DETAIL</div>
              </a>
            </li>
            <li @click="changeNavNum(1)" :class="{ active: navNum === 1 }">
              <a href="#002">
                <div class="tag">房东</div>
                <div class="eTag">HOST</div>
              </a>
            </li>
            <li @click="changeNavNum(2)" :class="{ active: navNum === 2 }">
              <a href="#003">
                <div class="tag">位置</div>
                <div class="eTag">LOCATION</div>
              </a>
            </li>
            <li @click="changeNavNum(3)" :class="{ active: navNum === 3 }">
              <a href="#004">
                <div class="tag">评价</div>
                <div class="eTag">REVIEWS</div>
              </a>
            </li>
            <li @click="changeNavNum(4)" :class="{ active: navNum === 4 }">
              <a href="#005">
                <div class="tag">设施</div>
                <div class="eTag">AMENITIES</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="wrapper">
          <span>
            <a href="javascript:;">天津民宿</a>
            >
          </span>
          <span>
            <a href="javascript:;">天津南开区民宿</a>
          </span>
        </div>
        <div class="desc">
          <p>【九月●美宿】NO.4/浓浓北欧情/鼓楼/古文化街/100寸投影</p>
          <div class="description">
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
            <span class="pink">
              <a href="javascript:;">极速退款</a>
            </span>
            <span class="orange">
              <a href="javascript:;">臻选房源</a>
            </span>
            <span class="blue">
              <a href="javascript:;">超赞房东</a>
            </span>
          </div>
        </div>
      </div>
      <!-- 主要内容左侧 -->
      <div class="leftContent clearfix">
        <div class="detail clearfix">
          <div>
            <i class="iconfont iconicon-"></i>
            <div class="intro">
              整套
              <p>45m²</p>
            </div>
          </div>
          <div>
            <i class="iconfont iconweishengjian"></i>
            <div class="intro">
              1间卧室
              <p>0厅1厨1卫</p>
            </div>
          </div>
          <div>
            <i class="iconfont iconchuang"></i>
            <div class="intro">
              宜住2人
              <div>
                <span>1张双人床</span>
                <b class="iconfont iconzuojiantou"></b>
              </div>
            </div>
          </div>
        </div>
        <div class="event clearfix">
          <div class="left">
            促销
            <span>今夜特价</span>
          </div>
          <div class="right">
            <span>更多活动</span>
            <i class="iconfont iconzuojiantou"></i>
          </div>
        </div>
        <!-- 房东 -->
        <div class="host" id="002">
          <div class="title">
            房东
            <span>HOST</span>
          </div>
          <div class="container">
            <div class="hostInfo">
              <div class="avator">
                <img src="./images/host.jpg" />
              </div>
              <div class="hostIntro">
                <p>阿成~呀</p>
                <span class="green">已实名认证</span>
                <span class="green">企业房东认证</span>
                <span class="blue">超赞房东</span>
                <span class="gray">90后双子座</span>
                <span class="gray">天津大学</span>
              </div>
              <div class="hostDetail">
                <div>
                  <span class="text">评价数</span>
                  <p>4</p>
                </div>
                <div>
                  <span class="text">回复率</span>
                  <p class="reply">暂无</p>
                </div>
                <div>
                  <span class="text">房源数</span>
                  <p>16套</p>
                </div>
              </div>
            </div>
            <div class="content">
              70支贡缎床上用品，洁丽雅超柔软浴巾毛巾，万元级100寸投影仪带全部VIP，
              300兆无线全屋死角覆盖，全屋覆盖高级地毯，林氏木业高级沙发，无印良品香薰机，
              COCO洗漱用品。可观天津之眼全景。专业保洁清扫,品质床品,一客一换，清洗消毒。
            </div>
          </div>
        </div>
        <!-- 房源位置 -->
        <div class="location" id="003" ref="hostPos">
          <div class="title">
            房源位置
            <span>LOCACATION</span>
          </div>
          <div class="container">
            <div class="leftMap">
              <Map :position='position' :label='label'></Map>
            </div>
            <div class="right">
              <div class="address">
                <div class="content">
                  泰安
                  <p>泰安泰山区望岳东路31号</p>
                </div>
                <div class="copy">
                  <i class="iconfont iconfuzhi"></i>
                  <p>复制</p>
                </div>
              </div>
              <div class="nearby">
                <div class="category">
                  <div
                    @click="changeSurrounding(0)"
                    :class="{ chosed: chosedNum === 0 }"
                  >
                    <i class="iconfont iconjiaotong"></i>
                    <span>交通</span>
                  </div>
                  <div
                    @click="changeSurrounding(1)"
                    :class="{ chosed: chosedNum === 1 }"
                  >
                    <i class="iconfont iconcanyin"></i>
                    <span>餐饮</span>
                  </div>
                  <div
                    @click="changeSurrounding(2)"
                    :class="{ chosed: chosedNum === 2 }"
                  >
                    <i class="iconfont icongouwu"></i>
                    <span>购物</span>
                  </div>
                  <div
                    @click="changeSurrounding(3)"
                    :class="{ chosed: chosedNum === 3 }"
                  >
                    <i class="iconfont iconjingdian"></i>
                    <span>景点</span>
                  </div>
                </div>
                <div class="detailList">
                  <div
                    class="detail"
                    v-for="item in surroundingList[chosedNum]"
                    :key="item.id"
                  >
                    <div class="number">{{ item.sortNum }}</div>
                    <div class="content">
                      {{ item.title }}
                      <p>{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
                <div class="tip">
                  <div class="hr"></div>
                  <div class="support">以上信息由美团点评提供</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评价 -->
        <div class="reviews" id="004">
          <div class="title">
            评价
            <span>REVIEWS</span>
          </div>
          <div class="reviewsContent">
            <div class="score">
              <div class="left">
                <div class="left1">
                  <div>4.9</div>
                  <p>共4条</p>
                </div>
                <div class="left2">
                  <p>超赞</p>
                  <button class="stars">
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                  </button>
                </div>
              </div>
              <div class="right">
                <div class="grade">
                  <div class="num">4.9</div>
                  <p>描述</p>
                </div>
                <div class="grade">
                  <div class="num">4.8</div>
                  <p>沟通</p>
                </div>
                <div class="grade">
                  <div class="num">4.7</div>
                  <p>卫生</p>
                </div>
                <div class="grade">
                  <div class="num">4.8</div>
                  <p>位置</p>
                </div>
              </div>
            </div>
            <div class="content">
              <img class="avatar" src="./images/avatar.jpg" />
              <div class="details">
                <div class="nickName">叶**0</div>
                <div class="time">
                  <button class="stars">
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                    <i class="iconfont iconxingxing"></i>
                  </button>
                  <span>2020年08月发布</span>
                </div>
                <div class="label">
                  <span class="blue">位置赞</span>
                  <span class="blue">设施丰富</span>
                  <span class="blue">性价比超高</span>
                  <span class="blue">希望再来</span>
                </div>
                <div class="desc">
                  风景秀丽、设施完善、装修豪华、是朋友、家人、公司聚会的佳地，建议业主在餐厅和客厅加上电源插座就更好了
                </div>
                <div class="commentPic">
                  <img class="pic" src="./images/commentPic1.jpg" />
                  <img class="pic" src="./images/commentPic2.jpg" />
                  <img class="pic" src="./images/commentPic3.jpg" />
                </div>
                <div class="replay">
                  房东回复：谢谢小姐姐对我们的别墅的肯定和支持以及十分有用的建议，我们会不断提高和完善设置设备，欢迎小姐姐下次再来喔😊
                </div>
              </div>
            </div>
            <div class="unfoldedComments" v-show="isFold">
              <div
                class="content2"
                v-for="comment in commentTextList"
                :key="comment.commentId"
              >
                <img class="avatar" :src="comment.userAvatarUrl" />
                <div class="details">
                  <div class="nickName">{{ comment.userNickName }}</div>
                  <div class="time">
                    <button class="stars">
                      <i class="iconfont iconxingxing"></i>
                      <i class="iconfont iconxingxing"></i>
                      <i class="iconfont iconxingxing"></i>
                      <i class="iconfont iconxingxing"></i>
                      <i class="iconfont iconxingxing"></i>
                    </button>
                    <span>{{ comment.commentDate }}发布</span>
                  </div>
                  <div class="label" v-show="comment.commentTextList">
                    <span
                      class="blue"
                      v-for="(tag, index) in comment.commentTextList"
                      :key="index"
                      >{{ tag }}</span
                    >
                  </div>
                  <div class="desc">
                    {{ comment.body }}
                  </div>
                  <div class="commentPic" v-show="comment.picModelList">
                    <img
                      class="pic"
                      :src="pic.url"
                      v-for="pic in comment.picModelList"
                      :key="pic.id"
                    />
                  </div>
                  <div class="replay" v-show="comment.hostReply">
                    {{ comment.hostReply }}
                  </div>
                </div>
              </div>
            </div>
            <div class="unfold" @click="foldComments()">
              <div v-show="!isFold">
                展开更多真实评价
                <i class="iconfont iconjiantou-copy-copy-copy"></i>
              </div>
              <span v-show="isFold">收起</span>
            </div>
          </div>
        </div>
        <!-- 设施服务 -->
        <div class="amenities" id="005">
          <div class="title">
            设施服务
            <span>AMENITIES</span>
          </div>
          <div class="facility">
            <div class="facilityCatgory">
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont iconwifi"></p>
                  <div>居家</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>Wi-Fi</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>空调</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>暖气</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>热水壶</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont iconyugang"></p>
                  <div>卫浴</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>热水淋浴</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>拖鞋</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>沐浴露</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>洗发水</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont iconmenuicon"></p>
                  <div>餐厨</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>电磁炉</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>微波炉</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>烹饪锅具</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>调料</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont iconfangzi"></p>
                  <div>入住服务</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>自主入住</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>床品每客一换</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>免费停车</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>付费停车</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont icon94"></p>
                  <div>娱乐</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>游戏机</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>扑克牌</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>狼人杀</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>麻将</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont iconmenjin"></p>
                  <div>安全</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>门禁系统</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>智能门锁</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>消毒洗手液</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>一次性手套</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont icondianti"></p>
                  <div>建筑</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>电梯</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>书桌</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>阳台</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>露台</span>
                  </div>
                </div>
              </div>
              <div class="facilityItem">
                <div class="categoryName">
                  <p class="iconfont iconcsc"></p>
                  <div>周边500米</div>
                </div>
                <div class="categoryList">
                  <div class="categoryItem">
                    <i class="iconfont icondisable"></i>
                    <span>菜市场</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>公园</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>餐厅</span>
                  </div>
                  <div class="categoryItem">
                    <i class="iconfont iconyunxu"></i>
                    <span>超市</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 预定须知 -->
        <div class="notice">
          <div class="title">
            预定须知
            <span>NOTICE</span>
          </div>
          <div class="noticeContainer">
            <div class="noticeForm">
              <div class="left">退款权益</div>
              <div class="content">
                <div class="info">
                  <span>极速退款</span>
                  15分钟内免费取消
                </div>
                房东已为您提供预定成功后15分钟内免费取消权益。（该权益不受房源退订规则限制）
              </div>
            </div>
            <div class="noticeForm">
              <div class="left">退订规则</div>
              <div class="content">
                <div class="babel">
                  <span>宽松</span>
                  入住前1天12:00前退订，可获100%退款。之后退订不退款
                </div>
                <div class="time">
                  <div class="success">
                    <p>预定成功</p>
                    <span>付款当天</span>
                  </div>
                  <div class="before">
                    <p>入住前1天</p>
                    <span>12:00前</span>
                  </div>
                  <div class="before">
                    <p>入住当天</p>
                    <span>14:00前</span>
                  </div>
                  <div class="before">
                    <p>离店</p>
                    <span>12:00后</span>
                  </div>
                </div>
                <div class="percent">
                  <div class="allReturn">
                    <p>100%</p>
                    <p>取消时全退款</p>
                  </div>
                  <div class="noReturn">
                    <p>0%</p>
                    <p>取消时不退款</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="noticeForm">
              <div class="left">入离时间</div>
              <div class="content">
                14:00之后可入住（若晚于24:00请联系房东确认)，12:00之前需退房
              </div>
            </div>
            <div class="noticeForm">
              <div class="left">预定时长</div>
              <div class="content">
                随时可预订,最少预订1天, 最多预订天数不限
              </div>
            </div>
            <div class="noticeForm">
              <div class="left">房东要求</div>
              <div class="content clearfix">
                <div class="noticeItem">
                  <i class="iconfont iconyunxu"></i>
                  适合婴幼儿(2岁以下)
                </div>
                <div class="noticeItem">
                  <i class="iconfont iconyunxu"></i>
                  允许聚会
                </div>
                <div class="noticeItem">
                  <i class="iconfont iconyunxu"></i>
                  适合老人(60岁以上)
                </div>
                <div class="noticeItem">
                  <i class="iconfont iconyunxu"></i>
                  适合儿童(2-12岁)
                </div>
                <div class="noticeItem">
                  <i class="iconfont iconyunxu"></i>
                  允许抽烟
                </div>
                <div class="noticeItem">
                  <i class="iconfont icondisable"></i>
                  不允许做饭
                </div>
                <div class="noticeItem">
                  <i class="iconfont icondisable"></i>
                  不允许携带宠物
                </div>
                <div class="hint">
                  温馨提示：未带身份证、未成年人、维吾尔族、和外宾本店没有权限，无法办理入住，敬请谅解！
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 附近同类好房 -->
        <div class="similar">
          <div class="title">
            附近同类好房
            <span>SIMILAR</span>
          </div>
          <div class="similarList">
            <div
              class="similarItem"
              v-for="similarInfo in similarInfoList"
              :key="similarInfo.id"
            >
              <div
                class="top"
                :style="{
                  'background-image': 'url(' + similarInfo.imgUrl + ')',
                }"
              ></div>
              <div class="content">
                <p>
                  整套·{{ similarInfo.roomNum }}居室·可住{{
                    similarInfo.allowNum
                  }}人
                </p>
                <span>
                  {{ similarInfo.desc }}
                </span>
                <div class="price">
                  <i>￥</i>
                  <span>{{ similarInfo.price }}</span>
                  /晚
                </div>
              </div>
              <div class="bottom">
                <div>
                  <i class="iconfont icondidian sign"></i>
                  <span>{{ similarInfo.address }}</span>
                </div>
                <i class="iconfont iconshenglve dot"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- 客服 -->
        <div class="service">
          <div class="serviceDetail">
            <div class="guarantee">
              <div>
                <i class="iconfont iconanquan icon1"></i>
                <span>美团保障</span>
                <div class="description">
                  千万保障赔付先行 · 7*24小时贴心客服
                </div>
              </div>
              <i
                class="iconfont iconxiangyouyuanjiantouyoujiantouxiangyoumianxing right"
              ></i>
            </div>
            <div class="phone">
              <div>
                <i class="iconfont icondianhua icon2"></i>
                <span>客服电话</span>
                <div class="description">400-0660-190</div>
              </div>
              <i
                class="iconfont iconxiangyouyuanjiantouyoujiantouxiangyoumianxing right"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要内容右侧 -->
      <div class="rightContent">
        <div class="price">
          <i>￥</i>
          <span>126.4</span>
          <b>/晚</b>
        </div>
        <div class="date">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
        <button class="count">
          <i class="iconfont iconzhanghu"></i>
          1位房客
          <b class="iconfont iconzuojiantou"></b>
        </button>
        <div class="tip">
          <span>可住2人，不可加客</span>
        </div>
        <div class="reserve clearfix">
          <div class="host">
            <i class="iconfont iconxinxi"></i>
            联系房东
          </div>
          <div class="reserveNow">立即预订</div>
        </div>
        <div class="codePic clearfix">
          <div class="pic">
            <img src="./images/QRcode.png" />
          </div>
          <div class="description">
            <p>微信扫码9折订</p>
            <span>扫描二维码，使用小程序预订更优惠哦~</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部热门 -->
    <div class="hot">
      <dl class="hotList">
        <dt>热门城市</dt>
        <dd v-for="item in hotCity" :key="item.text">{{ item.text }}</dd>
      </dl>
      <dl class="hotList">
        <dt>热门房源</dt>
        <dd v-for="item in hotHouse" :key="item.text">{{ item.text }}</dd>
      </dl>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="top">
        <div class="info">
          <h5>公司信息</h5>
          <ul>
            <li>关于我们</li>
            <li>工作机会</li>
          </ul>
        </div>
        <div class="info">
          <h5>网站帮助</h5>
          <ul>
            <li>规则中心</li>
            <li>网站地图</li>
            <li>民宿推荐</li>
          </ul>
        </div>
        <div class="info">
          <h5>人工客服</h5>
          <ul>
            <li>
              客服电话
              <span class="span1">400-0660-190</span>
            </li>
            <li>
              登录机会
              <span class="span2">1010788</span>
            </li>
          </ul>
        </div>
        <div class="codePic2">
          <div class="logo1"></div>
          <p>下载美团民宿APP</p>
        </div>
      </div>
      <p>
        <img src="./images/110.png" />
        <span>沪公网安备31010502000052号</span>
        <span>沪B2-20040012</span>
        <span>营业资质</span>
      </p>
    </div>
    <!-- 吸顶导航 -->
    <div class="fiexNav">
      <ul @click="fiexNavHandler">
        <li data-fiexIndex="1">概念</li>
        <li data-fiexIndex="2">房东</li>
        <li data-fiexIndex="3">位置</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Map from "@/pages/Map";
export default {
  name: "HomestayInfo",
  data() {
    return {
      isFold: false,
      navNum: 0,
      chosedNum: 0,
      value1:'',
      position: [116.363641, 39.96737],
      label:{}
    };
  },
  components:{
    Map
  },
  mounted() {
    this.getInformation();
    this.initMapData()
  },
  methods: {
    getInformation() {
      //获取民宿详情页附近房源的列表数据
      this.$store.dispatch("getSimilarInfoList");
      //获取民宿详情页底部热门城市数据
      this.$store.dispatch("getHotCity");
      //获取民宿详情页底部热门房源数据
      this.$store.dispatch("getHotHouse");
      //获取民宿详情页评价列表数据
      this.$store.dispatch("getCommentTextList");
      //获取房源位置周边列表数据
      this.$store.dispatch("getSurroundingList");
    },
    // 点击打开收起评论
    foldComments() {
      this.isFold = !this.isFold;
    },
    // 点击导航锚点跳转
    changeNavNum(navNum) {
      this.navNum = navNum;
    },
    // 点击切换周边
    changeSurrounding(chosedNum) {
      this.chosedNum = chosedNum;
    },
    fiexNavHandler(e) {
      const target = e.target;
      switch (target.dataset.fiexindex) {
        case "1":
          let currentScrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          // let tiem = 500
          // let frameTime = 25
          // let MoveScrollTop =  currentScrollTop - 100
          console.log(this.$refs.hostPos.offsetTop);
          break;

        default:
          break;
      }
      console.log();
    },
    // 初始化地图数据
    initMapData() {
      // 地图经纬度
      // this.position.push(116.397128, 39.916527);
      const label = {
        direction: "top",
      };
      // 地图定位点提示内容
      label.content = '泰安万达';
      this.$set(this.$data, "label", label);
    },
  },
  computed: {
    ...mapState({
      similarInfoList: (state) => state.homestayInfoModule.similarInfoList,
      hotCity: (state) => state.homestayInfoModule.hotCity,
      hotHouse: (state) => state.homestayInfoModule.hotHouse,
      commentTextList: (state) => state.homestayInfoModule.commentTextList,
      surroundingList: (state) => state.homestayInfoModule.surroundingList,
    }),
  },
};
</script>

<style lang="less" scoped>
body,
html {
  scroll-behavior: smooth;
  //头部
  .header {
    width: 100%;
    background: #fff;
    margin-bottom: 8px;
    .headerContent {
      width: 1180px;
      height: 70px;
      line-height: 70px;
      margin: 0 auto;
      .logo {
        float: left;
        width: 142px;
        height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        ul {
          float: right;
          li {
            float: left;
            margin-left: 15px;
            a {
              display: block;
              height: 70px;
              line-height: 70px;
              color: #585a5a;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  // 照片区域
  .picContainer {
    width: 100%;
    height: 56vh;
    display: flex;
    .left {
      width: 50%;
      height: 100%;
      margin-right: 8px;
      overflow: hidden;
      .img {
        background-size: cover;
        width: 100%;
        height: 100%;
        background: url(./images/big.jpg) no-repeat;
        background-size: 100% 100%;
        background-position: 50%;
        &:hover {
          transform: scale(1.1);
          transition: all 0.2s;
        }
      }
    }
    .center {
      width: 25%;
      display: flex;
      flex-direction: column;
      height: 56vh;
      margin-right: 8px;
      .img2 {
        margin: 0;
      }
      & > div {
        overflow: hidden;
        width: 100%;
        height: 50%;
        margin-bottom: 8px;
        .small1 {
          background-size: cover;
          width: 100%;
          height: 100%;
          background: url(./images/small1.jpg) no-repeat;
          background-size: 100% 100%;
          &:hover {
            transform: scale(1.1);
            transition: all 0.2s;
          }
        }
        .small2 {
          background-size: cover;
          width: 100%;
          height: 100%;
          background: url(./images/small2.jpg) no-repeat;
          background-size: 100% 100%;
          &:hover {
            transform: scale(1.1);
            transition: all 0.2s;
          }
        }
      }
    }
    .right {
      width: 25%;
      display: flex;
      flex-direction: column;
      height: 56vh;
      overflow: hidden;
      .img2 {
        margin: 0;
      }
      & > div {
        overflow: hidden;
        width: 100%;
        height: 50%;
        margin-bottom: 8px;
        .small3 {
          background-size: cover;
          width: 100%;
          height: 100%;
          background: url(./images/small3.jpg) no-repeat;
          background-size: 100% 100%;
          margin-bottom: 8px;
          &:hover {
            transform: scale(1.1);
            transition: all 0.2s;
          }
        }
        .small4 {
          background-size: cover;
          width: 100%;
          height: 100%;
          background: url(./images/small4.jpg) no-repeat;
          background-size: 100% 100%;
          &:hover {
            transform: scale(1.1);
            transition: all 0.2s;
          }
        }
      }
    }
  }
  //主要内容区域
  .contentContainer {
    width: 1180px;
    margin: 0 auto;
    padding: 0 16px;
    //主要内容头部
    .top {
      margin-top: 10px;
      .wrap {
        margin-bottom: 5px;
        border-bottom: 1px solid #eee;
        li {
          position: relative;
          float: left;
          text-align: center;
          margin-right: 40px;
          a {
            display: block;
          }
          &.active::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 28px;
            height: 4px;
            border-radius: 2px;
            background: #3e3f40;
          }
          .tag {
            color: #7d7e80;
            font-size: 14px;
            font-weight: 500;
          }
          .eTag {
            padding: 4px 0;
            color: #d0d4d7;
            font-weight: 500;
            font-size: 1px;
            font-style: italic;
          }
        }
      }
      .wrapper {
        margin: 18px 0;
        font-size: 12px;
        color: #aaa;
        a {
          color: #aaa;
        }
      }
      .desc {
        p {
          font-size: 20px;
          color: #252626;
          font-weight: bold;
        }
        .description {
          height: 25px;
          line-height: 25px;
          margin: 10px 0;
          white-space: nowrap;
          span {
            margin-right: 8px;
            font-size: 12px;
          }
          .blue {
            a {
              color: #465ee6;
            }
            background: #e3e7f8;
            border: 1px solid #e3e7e0;
            padding: 2px 5px;
            border-radius: 4px;
          }
          .pink {
            a {
              color: #ff4d6a;
            }
            background: #f2e1e8;
            border: 1px solid #f2e1d0;
            padding: 2px 5px;
            border-radius: 4px;
          }
          .orange {
            a {
              color: #f58e11;
            }
            background: #f5ebe3;
            border: 1px solid#F5EBD0;
            padding: 2px 5px;
            border-radius: 4px;
          }
        }
      }
    }
    //主要内容左侧
    .leftContent {
      float: left;
      margin-top: 16px;
      width: 718px;
      .detail {
        width: 100%;
        background: #fff;
        padding: 20px 30px;
        margin-bottom: 15px;
        & > div {
          float: left;
          margin: 0 30px;
          i {
            margin-right: 8px;
            font-size: 25px;
            color: #333;
          }
          .intro {
            display: inline-block;
            color: #252626;
            font-size: 16px;
            p {
              margin-top: 4px;
              color: #8a9094;
            }
            span {
              margin-top: 4px;
              color: #8a9094;
            }
            b {
              font-size: 12px;
              opacity: 60%;
              margin-left: 4px;
            }
          }
        }
      }
      .event {
        width: 100%;
        background: #fff;
        padding: 12px 16px;
        .left {
          float: left;
          line-height: 20px;
          font-size: 14px;
          color: #8a9094;
          span {
            background: #f2e1e8;
            border: 1px solid #f2e1d0;
            padding: 1px 5px;
            border-radius: 4px;
            color: #ff4d6a;
            font-size: 12px;
            margin-left: 8px;
          }
        }
        .right {
          float: right;
          line-height: 20px;
          font-size: 12px;
          color: #7d7e80;
          cursor: pointer;
          i {
            opacity: 30%;
            margin-left: 6px;
            font-size: 14px;
            vertical-align: middle;
          }
        }
      }
      .title {
        position: relative;
        font-size: 24px;
        color: #252626;
        margin-bottom: 12px;
        font-weight: 700;
        margin-top: 40px;
        span {
          position: absolute;
          font-size: 10px;
          color: #d0d4d7;
          font-weight: 500;
          margin-left: 4px;
          font-style: italic;
        }
      }
      // 房东
      .host {
        .container {
          width: 100%;
          background: #fff;
          padding: 16px;
          .hostInfo {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            padding-bottom: 30px;
            border-bottom: 1px solid #e7eaed;
            .avator {
              width: 56px;
              height: 56px;
              flex-shrink: 0;
              img {
                width: 100%;
                height: 100%;
                border-radius: 4px;
              }
            }
            .hostIntro {
              margin-left: 4px;
              flex: 1;
              p {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 4px;
                color: #252626;
              }
              span {
                font-size: 12px;
              }
              .green {
                color: #59d7ad;
                background: #ebfaf5;
                border-radius: 4px;
                border: 1px solid #d8f5ec;
                margin-right: 8px;
                padding: 2px 5px;
              }
              .blue {
                color: #465ee6;
                background: #e3e7f8;
                border: 1px solid #e3e7e0;
                padding: 2px 5px;
                border-radius: 4px;
                margin-right: 8px;
              }
              .gray {
                color: #8c9296;
                background: #f5f6fa;
                border: 1px solid#F3F4F7;
                padding: 2px 5px;
                border-radius: 4px;
                margin-right: 8px;
              }
            }
            .hostDetail {
              width: 40%;
              display: flex;
              justify-content: space-between;
              .text {
                color: #8a9094;
                font-size: 12px;
              }
              p {
                margin-top: 4px;
                font-size: 20px;
                color: #252626;
                text-align: center;
                font-weight: 500;
              }
            }
          }
          .content {
            margin-top: 15px;
            font-size: 14px;
            color: #333;
            line-height: 1.6;
          }
        }
      }
      // 房源位置
      .location {
        .container {
          width: 100%;
          background: #e4e8f4;
          min-height: 335px;
          padding: 6px;
          display: flex;
          .leftMap {
            width: 50%;
            height: 100%;
            margin-right: 8px;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .right {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .address {
              border-radius: 4px;
              background: #fff;
              margin-bottom: 8px;
              display: flex;
              padding: 6px;
              .content {
                width: 85%;
                font-size: 16px;
                color: #333;
                line-height: 16px;
                border-right: 1px solid #f2f5f8;
                p {
                  margin-top: 4px;
                  font-size: 14px;
                }
              }
              .copy {
                width: 15%;
                margin-left: 20px;
                color: #0af;
                i {
                  margin-left: 16px;
                }
                p {
                  font-size: 14px;
                  text-align: center;
                }
              }
            }
            .nearby {
              border-radius: 4px;
              background: #fff;
              .category {
                display: flex;
                padding: 15px 0;
                & > div {
                  width: 25%;
                  font-size: 14px;
                  color: #252626;
                  border: 1px solid #f1f1f9;
                  border-radius: 30px;
                  text-align: center;
                  margin: 0 10px;
                  line-height: 25px;
                  height: 30px;
                  background: #f9faff;
                  padding: 0 8px;
                  cursor: pointer;
                  &.chosed {
                    background: #00aaff;
                    color: #fff;
                  }
                  i {
                    margin-right: 4px;
                  }
                }
              }
              .detailList {
                .detail {
                  display: flex;
                  justify-content: left;
                  padding: 0;
                  margin-bottom: 16px;
                  .number {
                    width: 14px;
                    height: 14px;
                    border-radius: 14px;
                    line-height: 14px;
                    text-align: center;
                    color: #fff;
                    font-size: 12px;
                    margin: 2px 4px 0 10px;
                    background: rgb(0, 170, 255);
                  }
                  .content {
                    margin-left: 0;
                    font-size: 14px;
                    p {
                      margin-top: 8px;
                      color: #8a9094;
                      font-size: 12px;
                    }
                  }
                }
              }
              .tip {
                padding: 16px;
                .hr {
                  height: 1px;
                  width: 100%;
                  background: #e4e7eb;
                }
                .support {
                  background-image: url(./images/dianping.png);
                  background-position: right 10px center;
                  background-size: 50px 12px;
                  background-repeat: no-repeat;
                  margin-left: 16px;
                  margin-top: 16px;
                  color: #d0d4d7;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      // 评价
      .reviews {
        .reviewsContent {
          width: 100%;
          background: #fff;
          padding: 16px;
          .unfoldedComments {
            // display: none;
          }
          .stars {
            border: 0;
            background: #fff;
            .iconxingxing {
              width: 100%;
              color: #fecd0f;
              height: 100%;
            }
          }
          .score {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            border-bottom: 1px solid #f7f8f8;
            .left {
              display: flex;
              .left1 {
                div {
                  width: 48px;
                  height: 48px;
                  line-height: 48px;
                  text-align: center;
                  font-size: 24px;
                  color: #fff;
                  background: #3d3e3e;
                  border-radius: 50%;
                  margin-bottom: 5px;
                  margin-left: 3px;
                }
                p {
                  font-size: 14px;
                }
              }
              .left2 {
                margin-left: 10px;
                margin-top: 18px;
              }
            }
            .right {
              display: flex;
              justify-content: space-between;
              .grade {
                .num {
                  width: 38px;
                  height: 38px;
                  background: #3fd2a1;
                  color: #fbfefd;
                  font-weight: 700;
                  font-size: 14px;
                  text-align: center;
                  margin-right: 10px;
                  margin-bottom: 5px;
                  line-height: 50px;
                  border-radius: 4px;
                }
                p {
                  font-size: 12px;
                  text-align: center;
                  color: #8a9094;
                  margin-right: 10px;
                }
              }
            }
          }
          .content,
          .content2 {
            margin-top: 16px;
            display: flex;
            .avatar {
              width: 48px;
              height: 48px;
              margin-right: 8px;
              border-radius: 50%;
            }
            .details {
              .nickName {
                color: #252626;
                font-size: 14px;
                font-weight: 500;
              }
              .time {
                span {
                  margin-left: 5px;
                  font-size: 12px;
                  color: #585a5a;
                }
              }
            }
            .label {
              .blue {
                color: #0af;
                font-size: 12px;
                padding: 0 8px;
                border: 1px solid #d8f2ff;
                border-radius: 4px;
                margin-right: 8px;
                background: #e5f6ff;
              }
            }
            .desc {
              margin-top: 12px;
              line-height: 20px;
              font-size: 14px;
              white-space: wrap;
            }
            .commentPic {
              margin-top: 8px;
              .pic {
                width: 80px;
                height: 80px;
                border-radius: 4px;
                margin-right: 8px;
              }
            }
            .replay {
              position: relative;
              color: #8a9094;
              background: #f5f6fa;
              padding: 8px;
              margin-top: 12px;
              line-height: 20px;
              font-size: 14px;
              &::before {
                content: "";
                position: absolute;
                top: -10px;
                left: 16px;
                width: 0;
                height: 0;
                border-left: 12px solid rgba(0, 0, 0, 0);
                border-right: 12px solid rgba(0, 0, 0, 0);
                border-bottom: 12px solid #f5f6fa;
              }
            }
          }
          .unfold {
            margin-top: 30px;
            font-size: 12px;
            font-weight: 500;
            color: #0af;
            display: flex;
            justify-content: space-between;
            div,
            span {
              cursor: pointer;
            }
            i {
              font-size: 10px;
              vertical-align: middle;
            }
          }
        }
      }
      // 设施服务
      .amenities {
        .facility {
          width: 100%;
          background: #fff;
          // height: 300px;
          .facilityCatgory {
            width: 100%;
            padding: 16px;
            display: flex;
            flex-wrap: wrap;
            .facilityItem {
              width: 50%;
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 20px;
              .categoryName {
                width: 30%;
                text-align: center;
                margin-top: 8px;
                p {
                  color: #333;

                  font-size: 20px;
                }
                div {
                  color: #333;
                  font-size: 14px;
                }
              }
              .categoryList {
                width: 70%;
                display: flex;
                flex-wrap: wrap;
                .categoryItem {
                  flex-wrap: nowrap;
                  width: 50%;
                  margin: 4px 0;
                  .iconyunxu {
                    font-size: 10px;
                    color: #3fd2a1;
                  }
                  .icondisable {
                    font-size: 10px;
                    opacity: 30%;
                  }
                  span {
                    margin-left: 8px;
                    font-size: 14px;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
      }
      // 预定须知
      .notice {
        .noticeContainer {
          width: 100%;
          background: #fff;
          padding: 16px 8px;
          .noticeForm:first-child {
            .content {
              .info {
                color: #1fb4ff;
                margin-bottom: 10px;
                span {
                  color: #fff;
                  background: #00aaff;
                  border-radius: 4px;
                  padding: 0 4px;
                }
              }
            }
          }
          .noticeForm:nth-child(2) {
            .babel {
              color: #252626;
              font-size: 12px;
              margin-bottom: 4px;
              span {
                color: #fff;
                background: #3fd2a1;
                padding: 0 4px;
                border-radius: 4px;
              }
            }
            .time {
              display: flex;
              .success {
                position: relative;
                width: 13%;
                padding-bottom: 12px;
                border-bottom: 1px solid#54D7AB;
                p {
                  font-size: 12px;
                  color: #252626;
                  text-align: left;
                  margin-top: 4px;
                }
                span {
                  margin-top: 4px;
                  color: #989ca0;
                  text-align: left;
                  font-size: 12px;
                  display: block;
                }
                &::after {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  content: "";
                  display: block;
                  height: 5px;
                  width: 1px;
                  background: #54d7ab;
                }
              }
              .before {
                position: relative;
                width: 29%;
                padding-bottom: 12px;
                border-bottom: 1px solid #ff617b;
                p {
                  font-size: 12px;
                  color: #252626;
                  text-align: left;
                  margin-top: 4px;
                }
                span {
                  margin-top: 4px;
                  color: #989ca0;
                  text-align: left;
                  font-size: 12px;
                  display: block;
                }

                &::after {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  content: "";
                  display: block;
                  height: 5px;
                  width: 1px;
                  background: #ff617b;
                }
              }
            }
            .percent {
              display: flex;
              .allReturn {
                width: 13%;
                background: #edfaf6;
                padding: 4px;
                p {
                  font-size: 12px;
                  margin: 2px 0;
                  color: #54d7ab;
                }
              }
              .noReturn {
                width: 87%;
                background: #fff2f4;
                padding: 6px 8px;
                p {
                  font-size: 12px;
                  margin: 2px 0;
                  color: #ff617b;
                }
              }
            }
          }
          .noticeForm {
            display: flex;
            margin-bottom: 15px;
            .left {
              color: #7d7e80;
              margin-right: 12px;
              font-size: 12px;
              line-height: 17px;
            }
            .content {
              flex: 1;
              color: #252626;
              font-size: 12px;
              line-height: 15px;
            }
            .content:last-child {
              color: #252626;
              font-size: 12px;
              .noticeItem {
                width: 210px;
                float: left;
                margin-bottom: 8px;
                .iconyunxu {
                  font-size: 14px;
                  color: #3fd2a1;
                }
                .icondisable {
                  font-size: 14px;
                  color: #ff4d6a;
                }
              }
              .hint {
                width: 640px;
                float: left;
                margin-top: 16px;
              }
            }
          }
        }
      }
      // 附近同类好房
      .similar {
        .similarList {
          width: 100%;
          display: flex;
          & > div:not(:nth-child(4)) {
            margin-right: 8px;
          }
          .similarItem {
            width: 25%;
            // flex: 1;
            background: #fff;
            padding: 8px;
            .top {
              background-size: cover;
              width: 100%;
              height: 103px;
            }
            .content {
              border-bottom: 1px solid #f6f8fa;
              p {
                color: #8a9094;
                font-size: 12px;
                margin-bottom: 5px;
              }
              span {
                white-space: wrap;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                font-size: 14px;
                color: #252626;
              }
              .price {
                margin: 5px 0;
                display: flex;
                color: #8a9094;
                font-size: 12px;
                i {
                  color: #ff4d6a;
                  font-size: 12px;
                  font-weight: 700;
                  font-style: italic;
                  margin-top: 4px;
                }
                span {
                  color: #ff4d6a;
                  font-size: 16px;
                }
              }
            }
            .bottom {
              margin-left: -4px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px;
              font-size: 12px;
              color: #252626;
              .sign {
                color: #3e88ff;
                font-size: 14px;
              }
              .dot {
                opacity: 40%;
                font-size: 14px;
              }
            }
          }
        }
      }
      // 保障 客服
      .service {
        width: 100%;
        background: #fff;
        margin-top: 40px;
        .serviceDetail {
          padding: 0 8px;
          .right {
            font-size: 10px;
            opacity: 40%;
          }
          .guarantee,
          .phone {
            display: flex;
            justify-content: space-between;
            padding: 16px 0;
            span {
              margin-left: 8px;
              font-size: 14px;
              color: #252626;
            }
            .description {
              font-size: 12px;
              color: #585a5a;
              margin-left: 8px;
              display: inline-block;
            }
            .icon1,
            .icon2 {
              font-size: 16px;
            }
          }
          .guarantee {
            border-bottom: 1px solid #e7eaed;
            .icon1 {
              color: #ff9b4f;
            }
          }
          .phone {
            .icon2 {
              color: #33bbff;
            }
          }
        }
      }
    }
    //主要内容右侧
    .rightContent {
      margin-top: 16px;
      margin-left: 24px;
      width: 406px;
      background: #fff;
      float: right;
      padding: 16px;
      .price {
        i {
          font-size: 18px;
          font-weight: 700;
          color: #ff4d6a;
        }
        span {
          font-size: 32px;
          font-weight: 700;
          color: #ff4d6a;
        }
        b {
          font-size: 12px;
          color: #585a5a;
          font-weight: 400;
        }
      }
      .date {
        margin: 15px 0 15px 0;
        width: 100%;
        background: #f5f6fa;
        color: #252626;
        text-align: left;
        padding: 0 8px;
        font-weight: 500;
        border-radius: 4px;
        line-height: 44px;
        border: 0;
        font-size: 12px;
        .el-date-editor--daterange.el-input__inner{
          border:none;
          background:none;
          /deep/ .el-range-input {
          background:none;
          }
          /deep/ .el-range-separator {
            width: 15%;
          }
        }
        cursor: pointer;
        i {
          opacity: 60%;
          margin-right: 6px;
          font-size: 18px;
          vertical-align: middle;
        }
      }
      .count {
        position: relative;
        width: 100%;
        background: #f5f6fa;
        color: #252626;
        text-align: left;
        padding: 0 8px;
        font-weight: 500;
        border-radius: 4px;
        line-height: 44px;
        border: 0;
        font-size: 12px;
        cursor: pointer;
        i {
          opacity: 60%;
          margin-right: 6px;
          font-size: 18px;
          vertical-align: middle;
        }
        b {
          position: absolute;
          opacity: 30%;
          right: 6px;
          font-size: 14px;
          vertical-align: middle;
        }
      }
      .tip {
        font-size: 12px;
        color: #585a5a;
        margin: 10px 0;
      }
      .reserve {
        height: 50px;
        width: 100%;
        .host {
          width: 60px;
          height: 50px;
          float: left;
          border: 1px solid #eee;
          font-size: 12px;
          text-align: center;
          i {
            padding-top: 6px;
            display: block;
            text-align: center;
            color: #000;
          }
        }
        .reserveNow {
          float: right;
          width: 302px;
          height: 50px;
          line-height: 50px;
          border-radius: 4px;
          background: #ffdb28;
          text-align: center;
        }
      }
      .codePic {
        position: relative;
        width: 100%;
        height: 140px;
        // display: inline-block;
        margin-top: 20px;
        .pic {
          width: 140px;
          height: 140px;
          display: inline-block;
        }
        .description {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 155px;
          width: 218px;
          p {
            font-size: 18px;
          }
          span {
            display: block;
            margin-top: 10px;
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
  // 底部热门
  .hot {
    width: 1200px;
    margin: 50px auto;
    padding: 0 15px 20px 15px;
    border-bottom: 1px solid #f0f2f5;
    dl {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 20px;
      dt {
        display: inline-block;
        font-weight: 700;
        line-height: 20px;
        font-size: 14px;
        color: #333;
        width: 96px;
      }
      dd {
        display: inline-block;
        color: #666;
        line-height: 20px;
        margin-right: 40px;
      }
    }
  }
  //底部
  .footer {
    width: 1200px;
    margin: 0 auto;
    .top {
      width: 100%;
      padding-bottom: 42px;
      border-bottom: 1px solid #f0f2f5;
      display: flex;
      justify-content: space-between;
      .info {
        h5 {
          font-weight: 700;
          margin-bottom: 20px;
          font-size: 18px;
        }
        li {
          color: #87888a;
          font-size: 14px;
          margin-bottom: 12px;
          font-weight: 500;
          .span1 {
            font-size: 18px;
            font-weight: 700;
            color: #252626;
            margin-left: 12px;
          }
          .span2 {
            font-size: 14px;
            font-weight: 700;
            color: #252626;
            margin-left: 12px;
          }
        }
      }
      .codePic2 {
        .logo1 {
          width: 120px;
          height: 120px;
          margin-right: 40px;
          background: url("./images/logo1.png") no-repeat 50% / auto 30%,
            url("./images/2codePic.svg") no-repeat 50% / auto 100%;
        }
        p {
          color: #333;
          font-size: 12px;
          text-align: center;
          margin: 0 0 20px 0;
        }
      }
    }
    p {
      margin: 30px;
      img {
        width: 14px;
        height: 14px;
        vertical-align: middle;
      }
      span {
        font-size: 13px;
        color: #7d7e80;
        margin-left: 6px;
      }
    }
  }
  // 吸顶导航
  .fiexNav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    ul {
      padding: 16px 16px 4px;
      max-width: 1180px;
      margin: 0 auto;
      border: none;
      display: flex;
      li {
        margin-right: 20px;
      }
    }
  }
}
</style>
