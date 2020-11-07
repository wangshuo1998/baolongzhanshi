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
        <!-- 手机号 -->
        <div class="from-field">
          <span class="span">手机号</span>
          <input type="text" class="f-text" />
          <span class="unitive-tip">注册成功后, 全美团通用</span>
        </div>
        <!-- 获取验证码按钮 -->
        <div class="vbtn">
          <input type="button" class="btn-mini" value="免费获取短信动态码" />
        </div>
        <!-- 短信动态码 -->
        <div class="from-sms">
          <span class="span1">短信动态码</span>
          <input type="text" class="f-sms" />
        </div>
        <!-- 创建密码 -->
        <div class="from-pwd">
          <!-- 难度等级 -->
          <div class="strength">
            <div class="strength-letter">
              <span class="strebgth-label">弱</span>
              <span class="strebgth-label">中</span>
              <span class="strebgth-label">强</span>
            </div>
          </div>
          <span class="span2">创建密码</span>
          <input type="password" class="f-pwd" />
        </div>
        <!-- 确认密码 -->
        <div class="frow-pwd2">
          <span class="span2">确认密码</span>
          <input type="password" class="f-pwd2" />
        </div>
        <div class="form-btn">
          <input type="submit" class="btn" value="同意以下协议并注册" />
          <a href target="_blank"></a>
        </div>

        <div class="term">
          <a class="f1">《美团用户服务协议》</a>
          <a class="f1">《美团隐私政策》</a>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer-mini">
      <p class="copyright">
        <span> ©meituan.com</span>&nbsp; <span>京ICP证070791号</span>&nbsp;
        <span>京公网安备11010502025545号</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
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
        background: url(./images/logo1.png);
        background-size: 100%;
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

      .vbtn {
        width: 100%;
        height: 22.5px;
        line-height: 22.5px;
        margin-left: 115px;

        .btn-mini {
          color: #333;
          background-color: #dedede;
          border: 1px solid #e3e3e3;
          border-bottom: 1px solid #aaa;
          font-size: 12px;
          font-weight: 400;
        }
      }

      .from-sms {
        position: relative;
        padding: 8px 0 8px 110px;
        zoom: 1;
        width: 980px;
        height: 52px;
        line-height: 52px;

        .span1 {
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

        .f-sms {
          width: 260px;
          height: 36px;
          *margin: -1px auto;
          padding: 5px;
          border: 1px solid #aaa;
          line-height: 24px;
          vertical-align: top;
        }
      }

      .from-pwd {
        position: relative;
        padding: 8px 0 8px 110px;
        zoom: 1;
        width: 980px;
        height: 52px;
        line-height: 52px;

        .strength {
          position: absolute;
          width: 260px;
          top: 50px;
          left: 110px;
          background: #eee;

          .strength-letter {
            position: absolute;
            top: 0;
            left: 0;

            .strebgth-label {
              display: block;
              float: left;
              text-align: center;
              font-size: 12px;
              height: 20px;
              line-height: 20px;
              width: 85px;
              border-right: 2px solid #fff;
              background: #eee;
              color: #fff;
            }
          }
        }

        .span2 {
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

        .f-pwd {
          width: 260px;
          height: 36px;
          *margin: -1px auto;
          padding: 5px;
          border: 1px solid #aaa;
          line-height: 24px;
          vertical-align: top;
        }
      }

      .frow-pwd2 {
        position: relative;
        padding: 8px 0 8px 110px;
        zoom: 1;
        width: 980px;
        height: 52px;
        line-height: 52px;
        margin-top: 19px;

        .span2 {
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

        .f-pwd2 {
          width: 260px;
          height: 36px;
          *margin: -1px auto;
          padding: 5px;
          border: 1px solid #aaa;
          line-height: 24px;
          vertical-align: top;
        }
      }

      .form-btn {
        position: relative;
        padding: 8px 0 8px 110px;
        zoom: 1;
        width: 980px;
        height: 50px;

        .btn {
          width: 179px;
          height: 36px;
          color: #222;
          background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
          border-width: 0;
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
          background-size: 100%;
          *zoom: 1;

          font-size: 14px;
          font-weight: 700;
          -webkit-font-smoothing: antialiased;
          line-height: 1.5;
          letter-spacing: 0.1em;
          text-align: center;
        }
      }

      .term {
        position: relative;
        padding: 3px 10px 3px 110px;
        margin: 0 auto 8px;
        zoom: 1;

        .f1 {
          color: #fe8c00;
          font-size: 13px;
        }
      }
    }
  }

  .footer-mini {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;

    .copyright {
      font-size: 12px;
      font-family: initial;
      color: #999;
    }
  }
}
</style>