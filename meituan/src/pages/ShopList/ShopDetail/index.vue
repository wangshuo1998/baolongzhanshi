<template>
  <!-- 店铺详情容器 -->
  <div class="shopDetailContainer">
    <!-- 店铺详情内容部分 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <Breadcrumbs></Breadcrumbs>
      <!-- 详情部分 -->
      <div class="details">
        <!-- 左部 -->
        <div class="d-left">
          <!-- 头部名称 -->
          <div class="title">
            <div class="title-name">
              <h2>
                <!-- 店铺名称 -->
                {{ baseInfo.name }}
              </h2>
              <span> <i class="iconfont icondunpai"></i> 食品安全档案</span>
            </div>
            <!-- 评分 -->
            <div class="d-score">
              <ul class="default-star">
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
              </ul>
              <ul class="avg-star" :style="{ width: baseInfo.avgScore * 2 * 8 + 'px' }">
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
                <li>
                  <i class="iconfont iconxingxing1"></i>
                </li>
              </ul>
              <span class="avg-score">{{ baseInfo.avgScore }}分</span>
              <span class="avg-price">人均￥{{ baseInfo.avgPrice }}</span>
            </div>
          </div>
          <!-- 地址 -->
          <div class="address">
            <p>{{ baseInfo.address }} <i class="iconfont iconweizhi"></i></p>
            <p>电话：{{ baseInfo.phone }}</p>
            <p>营业时间：{{ baseInfo.openTime }}</p>
          </div>
          <!-- 标签选项 -->
          <ul class="tags">
            <li v-for="(item, index) in baseInfo.extraInfos" :key="index">
              <!-- <i class="iconfont iconicon-test">
                <img :src="item.iconUrl" alt="" />
              </i> -->
              <i class="icon-url">
                <img :src="item.iconUrl" alt="" />
              </i>
              <span>
                {{ item.text }}
              </span>
            </li>
          </ul>
        </div>
        <!-- 右部 -->
        <div class="d-right">
          <div class="big-img">
            <img
              src="https://img.meituan.net/msmerchant/a15b1e24ed8b36ebefde1c925ed6c875117239.jpg@380w_214h_1e_1c"
              alt=""
            />
          </div>
          <ul class="img-list">
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://img.meituan.net/msmerchant/2ef5e301a08649d840ab12b8ca8609ce3863042.jpg@92w_50h_1e_1c"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- 详情底部 -->
      <div class="btm-cont">
        <div class="btm-left">
          <!-- 团购及优惠 -->
          <div class="group-buy">
            <h4>商家团购及优惠</h4>
            <div class="login-group-buy">
              <img src="https://p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="" />
              <span>请登录后查看详细团购优惠</span>
              <button>立即登录</button>
            </div>
          </div>
          <!-- 推荐菜 -->
          <div class="recommend">
            <h4>推荐菜</h4>
            <div class="recommend-content">
              <ul>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="pic">
                    <div class="img-box">
                      <img
                        src="https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c"
                        alt=""
                      />
                      <div class="desc">
                        <span>极品羊肉</span>
                        <span>￥32</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="list">
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
                <span>火锅</span>
                <span>麻酱调料</span>
                <span>炸灌肠</span>
              </div>
            </div>
          </div>
          <!-- 网友点评 -->
          <div class="comment">
            <!-- 网友点评头部->多少条 -->
            <div class="total">
              <span>9880条网友点评</span>
              <div class="sort">
                <span class="active">质量排序</span>
                <span>时间排序</span>
              </div>
            </div>
            <!-- 网友点评内容区 -->
            <div class="comment-con">
              <!-- 网友点评标签区 -->
              <ul class="tags">
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
                <li>
                  <span>回头客</span>
                  <i>(666)</i>
                </li>
              </ul>
              <!-- 网友点评查看图片评论 -->
              <div class="sea">
                <i class="iconfont iconweixuanzhong"></i>
                <span>只看有图片的评论</span>
              </div>
              <!-- 用户评论内容区列表 -->
              <ul class="user-comment-list">
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
                <li>
                  <!-- 用户头像 -->
                  <div class="pic">
                    <div class="avatar">
                      <img
                        src="https://img.meituan.net/avatar/250725259f23672a034014a370ee92af14972.jpg@60w_60h_1e_1c"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 评论信息 -->
                  <div class="info">
                    <p class="user-name">巴拉巴拉Barbara</p>
                    <!-- 评分 -->
                    <div class="d-score">
                      <ul class="default-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                      <ul class="avg-star">
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                        <li>
                          <i class="iconfont iconxingxing1"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="comment-time">2020年11月2日</span>
                    <p class="user-desc">
                      菜量很大 三个人吃了双人餐又点了两个菜 吃的饱饱的 服务态度也非常好 点菜时点多了
                      阿姨还跟我们说不用太多 不够再加 点名表扬小油条和鱼豆腐 非常好吃 麻酱味道也很不错 菜很新鲜
                      肉质也不错 环境也很高大上 下次要尝一尝羊上脑
                    </p>
                    <span class="reply">商家回复：亲，感谢您的惠顾，祝您生活愉快、天天开心！</span>
                    <div class="user-pic-box">
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/88555f3f0ccd93a7ca77f6ff6b481a5c315542.jpg" alt="" />
                      </div>
                      <div class="user-pic">
                        <img src="https://p0.meituan.net/shaitu/b2c0ce415ec541e69620deb56f8c7e6b3002010.jpg" alt="" />
                      </div>
                    </div>
                    <div class="great">
                      <i class="iconfont iconzan"></i>
                      <span>赞</span>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- 自我封装分页组件 -->
              <div class="my-pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  :pager-count="pagerCount"
                  layout="prev, pager, next"
                  :total="400"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="btm-right">
          <div class="guess-you-like">
            <h3>猜你喜欢</h3>
            <ul>
              <li v-for="(item, index) in guessInfo" :key="item.itemId">
                <a href="javascript:;">
                  <div class="pic">
                    <img :src="item.imgUrl" alt="" />
                  </div>
                  <p class="merchant-name">
                    {{ item.title }}
                  </p>
                  <p class="merchant-pos">
                    {{ item.areaName }}
                  </p>
                  <p class="price"><b>￥</b>{{ item.avgPrice }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 附近商家 -->
      <div class="nearby-businesses">
        <h4>附近商家</h4>
        <div class="nearby">
          <ul>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="pic">
                  <img
                    src="https://p0.meituan.net//bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@214w_120h_1e_1c"
                    alt=""
                  />
                </div>
                <p class="title">P.STYLE 派斯造型（五道口店）</p>
                <p class="source">5分 <span>188792人消费</span></p>
                <p class="desc source">免费停车</p>
                <p class="price"><b>￥</b> 766 <b>起</b></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs'
import { mapState } from 'vuex'
export default {
  name: 'ShopDetail',
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      currentPage: 4,
      pagerCount: 5,
      sortIndex: 0,
    }
  },
  methods: {
    // 每页 ${val} 条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 当前页: ${val}
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    // 获取猜你喜欢列表数据
    getGuessInfo() {
      this.$store.dispatch('getGuessInfo')
    },
    // 发送请求店铺获取数据
    getShopDetailData() {
      const { shopId } = this.$route.params
      this.$store.dispatch('getShopDetailData', { shopId })
    },
  },
  mounted() {
    // 调用 获取猜你喜欢数据函数
    this.getGuessInfo()
    // 调用 获取列表信息函数
    this.getShopDetailData()
  },
  computed: {
    // 从vuex 中把商品筛选数据拿出来
    ...mapState({
      guessInfo: (state) => state.ShopList.guessInfo,
      shopDetailData: (state) => state.ShopDetail.shopDetailData,
    }),
    baseInfo() {
      return this.shopDetailData.baseInfo || {}
    },
  },
}
</script>

<style lang="less" scoped>
@import url('../css/Mixins.less');
// 店铺详情容器
.shopDetailContainer {
  // 店铺详情内容部分
  .content {
    .content();
    // 店铺详情
    .details {
      display: flex;
      justify-content: space-between;
      padding: 20px 20px 33px;
      border: 1px solid #e5e5e5;
      border-radius: 10px;
      background-color: #fff;
      color: #666;
      font-size: 12px;
      box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
      // 店铺详情左部
      .d-left {
        width: 70%;
        padding-right: 2%;
        // 店铺详情头部
        .title {
          border-bottom: 1px solid #e5e5e5;
          .title-name {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: 26px;
            line-height: 37px;
            span {
              font-size: 12px;
              color: #00c9b3;
              .icondunpai {
                font-size: 18px;
                height: 18px;
                line-height: 18px;
                display: inline-block;
              }
            }
          }
          // 店铺详情评分
          .d-score {
            position: relative;
            width: 70%;
            display: flex;
            font-size: 14px;
            height: 14px;
            line-height: 14px;
            margin: 6px 0 17px;
            .default-star,
            .avg-star {
              display: flex;
            }
            .default-star {
              margin-right: 8px;
            }
            .avg-star {
              position: absolute;
              color: #f90;
              width: 70px;
              overflow: hidden;
            }
          }
        }
        // 地址信息
        .address {
          font-size: 14px;
          padding: 16px 0 11px;
          line-height: 20px;
          border-bottom: 1px solid #e5e5e5;
          p {
            margin-bottom: 10px;
            .iconweizhi {
              color: #00c9b3;
            }
          }
        }
        // 底部标签
        .tags {
          display: flex;
          padding-top: 20px;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-right: 30px;
            i {
              width: 24px;
              height: 34px;
              display: block;
              // font-size: 24px;
              padding-bottom: 10px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      // 店铺详情右部
      .d-right {
        width: 30%;
        cursor: pointer;
        // 大图区域
        .big-img {
          width: 100%;
          height: 214px;
          border-radius: 5px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        // 小图列表区域
        .img-list {
          width: 100%;
          overflow: hidden;
          padding-top: 10px;
          display: flex;

          li {
            flex-shrink: 0;
            width: 25%;
            height: 56px;
            padding-right: 5px;
            box-sizing: border-box;
            &:nth-of-type(4) {
              padding: 0;
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
        }
      }
    }
    // 店铺底部内容信息
    .btm-cont {
      display: flex;
      padding-top: 40px;
      justify-content: space-between;
      .btm-left {
        width: 79%;
        // 商家团购及优惠
        .group-buy {
          margin-bottom: 40px;
          h4 {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 12px;
            font-weight: 700;
          }
          .login-group-buy {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            padding: 30px 0;
            img {
              width: 160px;
              height: 120px;
            }
            span {
              font-size: 16px;
              color: #666;
              line-height: 26px;
              margin-bottom: 15px;
            }
            button {
              background-color: #13d1be;
              width: 120px;
              height: 40px;
              font-size: 14px;
              line-height: 40px;
              border: none;
              border-radius: 25px;
              color: #fff;
              cursor: pointer;
            }
          }
        }
        // 推荐菜
        .recommend {
          margin-bottom: 40px;
          h4 {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 12px;
            font-weight: 700;
          }
          .recommend-content {
            width: 100%;
            padding: 33px 32px 26px;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            ul {
              display: flex;
              flex-wrap: wrap;
              text-align: center;
              li {
                width: 16.66%;
                display: flex;
                justify-content: center;
                .pic {
                  width: 130px;
                  height: 130px;
                  .img-box {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 100%;
                      border-radius: 5px;
                    }
                    .desc {
                      position: absolute;
                      width: 100%;
                      bottom: 0;
                      left: 0;
                      color: #fff;
                      background-color: rgba(0, 0, 0, 0.3);
                      padding: 8px 0;
                      font-size: 14px;
                      span {
                        max-width: 60%;
                      }
                    }
                  }
                }
              }
            }
            .list {
              padding-top: 25px;
              span {
                display: inline-block;
                margin: 10px;
              }
            }
          }
        }
        // 网友点评
        .comment {
          margin-bottom: 40px;
          // 网页评论条数 --> 网友评论头部
          .total {
            display: flex;
            justify-content: space-between;
            span {
              font-size: 20px;
              line-height: 26px;
            }
            .sort {
              cursor: pointer;
              color: #999;
              span {
                font-size: 12px;
                margin-left: 20px;
                &.active {
                  color: #00c9b3;
                }
              }
            }
          }
          // 网友评论内容区
          .comment-con {
            margin-top: 8px;
            background-color: #fff;
            border-radius: 4px;
            padding: 0 20px 40px;
            border: 1px solid #e5e5e5;
            color: #666;
            // 网友评论标签区
            .tags {
              font-size: 14px;
              padding-top: 15px;
              display: flex;
              flex-wrap: wrap;
              li {
                padding: 0 10px;
                border: 1px solid #e5e5e5;
                line-height: 34px;
                margin: 0 5px 10px;
                i {
                  font-style: normal;
                }
              }
            }
            // 查看网友评论
            .sea {
              margin-top: 22px;
              margin-left: 6px;
              font-size: 14px;
              line-height: 20px;
              .iconweixuanzhong {
                margin-right: 5px;
              }
            }
            // 网友评论
            .user-comment-list {
              padding-top: 30px;
              padding-left: 6px;
              li {
                display: flex;
                border-bottom: 1px solid #e5e5e5;
                // 用户头像
                .pic {
                  width: 10%;
                  .avatar {
                    width: 60px;
                    height: 60px;
                    img {
                      width: 100%;
                      height: 100%;
                      border-radius: 50%;
                    }
                  }
                }
                // 用户信息
                .info {
                  width: 90%;
                  // 用户名称
                  .user-name {
                    font-size: 16px;
                    line-height: 22px;
                    color: #222;
                  }
                  // 用户评论时间
                  .comment-time {
                    width: 100%;
                    font-size: 12px;
                    line-height: 20px;
                    color: #999;
                    display: inline-block;
                    text-align: right;
                  }
                  // 店铺详情评分
                  .d-score {
                    position: relative;
                    width: 70%;
                    display: flex;
                    font-size: 14px;
                    height: 14px;
                    line-height: 14px;
                    margin-top: 5px;
                    .default-star,
                    .avg-star {
                      display: flex;
                    }
                    .default-star {
                      margin-right: 8px;
                    }
                    .avg-star {
                      position: absolute;
                      color: #f90;
                      width: 70px;
                      overflow: hidden;
                    }
                  }
                  // 商家回复
                  .reply {
                    display: inline-block;
                    font-size: 14px;
                    color: #31bbac;
                    padding-top: 12px;
                  }
                  // 用户评论信息
                  .user-desc {
                    font-size: 14px;
                    line-height: 20px;
                    padding-top: 13px;
                  }

                  // 用户评论图片列表盒子
                  .user-pic-box {
                    padding-top: 10px;
                    display: flex;
                    .user-pic {
                      width: 140px;
                      height: 140px;
                      margin: 10px;
                      img {
                        width: 100%;
                        height: 100%;
                      }
                    }
                  }
                  // 点赞
                  .great {
                    text-align: right;
                    margin: 17px 0 16px;
                    span {
                      font-size: 12px;
                    }
                    i {
                      font-size: 18px;
                      margin-right: 10px;
                    }
                  }
                }
              }
            }
          }
          // 自定义分页器
          .my-pagination {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .el-pagination {
              /deep/ button {
                width: 42px;
                height: 42px;
                border: 1px solid #e5e5e5;
                border-radius: 50%;
                padding: 0;
                line-height: 42px;
                font-weight: 400;
                i {
                  font-size: 16px;
                }
              }
              /deep/ .el-pager {
                /deep/ li {
                  width: 42px;
                  height: 42px;
                  border-radius: 50%;
                  border: 1px solid #e5e5e5;
                  padding: 0;
                  line-height: 42px;
                  margin: 0 10px;
                  font-size: 16px;
                  color: #999;
                  font-weight: 400;
                  &.active {
                    color: #fff;
                    background-color: #13d1be;
                    border-color: #13d1be;
                  }
                }
              }
            }
          }
        }
      }
      .btm-right {
        width: 20%;
        margin-top: 32px;
        .guess-you-like {
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          background-color: #fff;
          padding: 16px 20px 0;
          h3 {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 12px;
            color: #333;
            font-weight: 600;
          }
          .pic {
            height: 106px;
            border-radius: 5px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
          .merchant-name {
            width: 100%;
            // 禁止换行
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            line-height: 20px;
            color: #222;
            margin: 10px 0 4px;
          }
          .merchant-pos {
            font-size: 12px;
            line-height: 17px;
            color: #999;
          }
          .price {
            font-size: 22px;
            color: #f60;
            line-height: 27px;
            b {
              font-weight: normal;
              font-size: 14px;
            }
          }
        }
      }
    }
    // 附近商家
    .nearby-businesses {
      h4 {
        font-size: 20px;
        line-height: 26px;
        color: #333;
        font-weight: 700;
      }
      .nearby {
        margin-top: 8px;
        color: #999;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        background-color: #fff;
        padding: 20px 20px 0;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 20%;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            margin-bottom: 20px;
            a {
              width: 214px;
              overflow: hidden;
              color: #222;
              .pic {
                width: 100%;
                img {
                  width: 100%;
                  border-radius: 5px;
                }
              }
              p {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .title {
                font-size: 16px;
                line-height: 22px;
                margin: 10px 0 6px;
              }
              .source {
                color: #999;
                font-size: 12px;
              }
              .desc {
                min-height: 32px;
              }
              .price {
                color: #f60;
                line-height: 27px;
                font-size: 22px;
                font-weight: 700;
                b {
                  font-weight: 400;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
