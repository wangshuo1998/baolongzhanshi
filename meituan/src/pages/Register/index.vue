<template>
  <!-- 最外部div -->
  <div class="Insgesamt">
    <!-- 头部 -->
    <div class="header">
      <div class="wapper">
        <a class="logo" href="http://www.weituan.com"></a>
        <span class="tip">
          <i>已有美团账号?</i>
          <button>登录</button>
        </span>
      </div>
    </div>
    <!-- // 版心内容区域 -->
    <div class="content">
      <div class="sheet">
        <div class="from-field">
          <span class="span">手机号</span>
          <input type="text" class="f-text" />
          <span class="unitive-tip">注册成功后,   全美团通用</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less">
body {
  background: none;
}
.Insgesamt {
  margin: 0;
  padding: 0;
  //   width: 9999px;
  // 头部样式
  .header {
    width: 100%;
    height: 61.6px;
    margin: 0;
    border-bottom: 2px solid #d8d8d8;

    .wapper {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;
      //   background: darksalmon;
      display: flex;
      justify-content: space-between;
      .tip {
        display: flex;
        align-items: center;

        i {
          font-style: normal;
          font-size: 14px;
          color: #666;
          margin-right: 10px;
        }

        button {
          color: #222;
          padding: 3px 10px;
          background-color: #ffcb00;
          border: none;
          font-size: 12px;
        }
      }

      .logo {
        width: 99px;
        height: 36px;
      }
    }
  }
  //   版心内容样式
  .content {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    height: 356px;
    // background: skyblue;

    .sheet {
      width: 100%;
      height: 100%;
      // background: palegreen;

      .from-field {
        position: relative;
        padding: 8px 0 8px 110px;
        zoom: 1;
        width: 980px;
        height: 52px;
        line-height: 52px;
        // background: palegreen;

        .span {
          
          position: absolute;
          left: 0;
          top: -7px;
          display: block;
          width: 100px;
          height: 26.8px;
          padding-top: 6px;
          font-size: 14px;
          text-align: right;
          color: #333;
        }

        .f-text {
          width: 260px;
          height: 36px;
          *margin: -1px auto;
          padding: 5px;
          border: 1px solid #aaa;
          line-height: 24px;
          vertical-align: top;
        }

        .unitive-tip {
          display: inline-block;
          margin-left: 8px;
          padding: 6px 0;
          line-height: 24px;
          font-size: 12px;
          color: #999;
          vertical-align: top;
          zoom: 1;
        }
      }
    }
  }
}
</style>