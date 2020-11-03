<template>
  <div class="condition">
    <div class="classification">{{ classification }}</div>
    <div class="all">
      <a href="javascript:;" class="active">
        全部
      </a>
    </div>
    <ul class="con" @click="conditionHandler">
      <li v-for="(item, index) in filtersDatas" :key="item.id">
        <a href="javascript:;" v-if="!item.subAreas" :data-conditionName="item.name">
          {{ item.name }}
        </a>
        <div class="areasContainer" v-else>
          <div class="areas">
            <!-- 城市 -->
            <span :data-conditionNameAll="item.name">{{ item.name }}</span>
            <i class="iconfont iconxiasanjiaoxing"></i>
            <!-- 城市详情列表 -->
            <div class="areasList">
              <div class="areasContent">
                <p class="title">
                  {{ item.name }}
                </p>
                <ul>
                  <li v-for="(subArea, index) in item.subAreas" :key="subArea.id">
                    <a href="javascript:;" :data-conditionName="subArea.name" :data-conditionNameAll="item.name">
                      {{ subArea.name }}
                    </a>
                  </li>
                </ul>
              </div>

              <i class="sanjiao"></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailFilterCondition',
  props: {
    classification: {
      type: String,
      default: '分类',
    },
    filtersDatas: {
      type: Array,
    },
    detailFilterId: {
      type: Number,
    },
  },
  methods: {
    conditionHandler(e) {
      let { conditionname, conditionnameall } = e.target.dataset
      if (conditionname === '全部') conditionname = conditionnameall
      if (!conditionname) return
      const conditionData = {
        id: this.detailFilterId,
        conditionname,
      }
      this.$emit('conditionFlterHandler', conditionData)
    },
  },
  // props: ['classification', 'filtersDatas'],
}
</script>

<style lang="less" scoped>
@import url('../css/Mixins.less');
.condition {
  padding: 10px 0 0 20px;
  color: #333;
  font-size: 14px;
  &:last-of-type .con {
    border-bottom: none;
  }
  .classification {
    float: left;
    width: 65px;
  }
  .con {
    float: left;
    width: 788px;
    border-bottom: 1px solid #e5e5e5;
    li {
      float: left;
      height: 28px;
      min-width: 125px;
      line-height: 28px;
      cursor: pointer;
      a {
        padding: 0 10px;
      }
      .areasContainer {
        .areas {
          position: relative;
          color: #666;
          padding: 0 10px;
          .iconfont {
            padding-left: 5px;
            font-size: 12px;
          }
          .areasList {
            display: none;
            position: absolute;
            width: 520px;
            // height: 500px;
            background-color: #fff;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e5e5;
            border-radius: 5px;
            z-index: 9;
            // 三角
            .sanjiao {
              position: absolute;
              width: 15px;
              height: 10px;
              left: 16px;
              top: -9px;
              overflow: hidden;
              &::after {
                content: '';
                position: absolute;
                top: 4px;
                left: 2px;
                width: 10px;
                height: 10px;
                overflow: hidden;
                background-color: #fff;
                transform: rotate(45deg);
              }
              &::before {
                content: '';
                position: absolute;
                top: 3px;
                left: 2px;
                width: 10px;
                height: 10px;
                background-color: #e5e5e5;
                transform: rotate(45deg);
              }
            }
            .areasContent {
              padding: 15px 19px 5px;
              .clearfix();
              .title {
                color: #ccc;
                font-size: 16px;
                cursor: default;
                margin-bottom: 10px;
              }
              ul {
                .clearfix();
                margin-bottom: 6px;
                li {
                  float: left;
                  min-width: 120px;
                  line-height: 20px;
                  margin-bottom: 3px;
                  a {
                    font-size: 12px;
                    padding: 0;
                  }
                }
              }
            }
          }
          &:hover .areasList {
            display: block;
          }
        }
      }
    }
    .clearfix();
  }

  .all {
    float: left;
    width: 53px;
    min-width: auto;
    text-align: center;
    margin: 0 13px 0 9px;
    a {
      display: block;
      color: #333;
    }
  }
  .active {
    background-color: #13d1be;
    color: #fff !important;
    border-radius: 100px;
  }
  a {
    color: #666;
  }
  .clearfix();
}
</style>
