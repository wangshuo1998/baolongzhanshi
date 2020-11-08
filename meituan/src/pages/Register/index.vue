<template>
  <!-- 最外部div -->
  <div class="Insgesamt">
    <!-- 头部 -->
    <div class="header">
      <div class="wapper">
        <a class="logo" @click="$router.push('/')"></a>
        <span class="tip">
          <i>已有美团账号?</i>
          <button @click="$router.push('/login')">登录</button>
        </span>
      </div>
    </div>
    <!-- // 版心内容区域 -->
    <div class="content">
      <div class="sheet">
        <!-- 手机号 -->
        <div class="from-field">
          <span class="span">手机号</span>
          <input
            v-validate="{ required: true, regex: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/ }"
            :class="{ invalid: errors.has('phone') }"
            name="phone"
            v-model="phone"
            type="text"
            class="f-text"
          />
          <span v-show="phone !== ''" class="error-msg">
            <i v-show="errors.first('phone')" class="iconfont iconcuowu"></i>
            {{ errors.first('phone') }}
          </span>
          <span v-if="!errors.first('phone')" class="unitive-tip">注册成功后, 全美团通用</span>
        </div>
        <!-- 获取验证码按钮 -->
        <div class="vbtn">
          <button @click="sendVerifyCode" :disabled="errors.first('phone')" class="btn-mini">
            免费获取短信动态码<span v-if="isClick">({{ time }})</span>
          </button>
        </div>
        <!-- 短信动态码 -->
        <div class="from-sms">
          <span class="span1">短信动态码</span>
          <input
            name="code"
            v-validate="{ required: true, regex: /^\d{6}$/ }"
            :class="{ invalid: errors.has('code') }"
            v-model="verifyCode"
            type="text"
            class="f-sms"
          />
          <span class="error-msg">
            <i v-show="errors.first('code')" class="iconfont iconcuowu"></i>
            {{ errors.first('code') }}
          </span>
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
          <input
            name="password"
            v-validate="{ required: true, regex: /^\w{6,20}$/ }"
            :class="{ invalid: errors.has('password') }"
            v-model="password"
            type="password"
            class="f-pwd"
          />
          <span class="error-msg">
            <i v-show="errors.first('password')" class="iconfont iconcuowu"></i>
            {{ errors.first('password') }}
          </span>
        </div>
        <!-- 确认密码 -->
        <div class="frow-pwd2">
          <span class="span2">确认密码</span>
          <input
            name="password2"
            v-validate="{ required: true, regex: /^\w{6,20}$/, is: password }"
            :class="{ invalid: errors.has('password2') }"
            v-model="repeatPassword"
            type="password"
            class="f-pwd2"
          />
          <span class="error-msg">
            <i v-show="errors.first('password2')" class="iconfont iconcuowu"></i>
            {{ errors.first('password2') }}
          </span>
        </div>
        <div class="form-btn">
          <input @click="submitRegister" type="submit" class="btn" value="同意以下协议并注册" />
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
import { reqVerifyCode, submitRegister } from '@/Api/mysqlApi'
import Encryption from '@/utils/encryption'

export default {
  name: 'Register',
  data() {
    return {
      phone: '', //电话的字段
      verifyCode: '', //短信验证码
      password: '', //创建的密码
      repeatPassword: '', //重复的密码
      time: 60, //60秒
      isClick: false,
    }
  },
  methods: {
    async sendVerifyCode() {
      let { phone } = this
      if (phone !== '') {
        let result = await reqVerifyCode(phone)
        if (result.code === '200') {
          if (this.isClick === false) {
            this.$alert(result.data, {
              confirmButtonText: '确定',
            })
            this.isClick = true
            let timer = setInterval(() => {
              this.time -= 1
              if (this.time === 0) {
                this.isClick = false
                clearInterval(timer)
                this.time = 60
              }
            }, 1000)
          }
        } else {
          this.$alert(result.data, {
            confirmButtonText: '确定',
          })
          this.phone = ''
        }
      }
    },
    async submitRegister() {
      let { phone, verifyCode, password } = this
      const success = await this.$validator.validateAll() // 对所有表单项进行验证
      if (success) {
        password = Encryption.encrypt(password, 'meituanasdfghjkl')
        let result = await submitRegister(phone, verifyCode, password)
        this.$alert(result.data, {
          confirmButtonText: '确定',
          callback: (confirm) => {
            this.$router.push('/login')
          },
        })
      }
    },
  },
}
</script>

<style scoped lang="less">
body {
  background: none;
}

.error-msg {
  position: absolute;
  top: 0px;
  color: #f76120;
  font-size: 14px;
  margin-left: 10px !important;
  display: inline-block !important;
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
        background: url('./images/logo1.png');
        background-size: 100%;
      }
    }
    min-height: 300px;
    height: 356px;
    // background: skyblue;

    .sheet {
      width: 100%;
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
          padding: 3px 8px;
          color: #333;
          background-color: #ececec;
          border: 1px solid #e3e3e3;
          border-bottom: 1px solid #aaa;
          font-size: 12px;
          font-weight: 400;
          cursor: pointer;
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
