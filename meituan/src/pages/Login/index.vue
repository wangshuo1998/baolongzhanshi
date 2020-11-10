<template>
  <!--  login登录页-->
  <div class="loginContainer">
    <!--    login头部-->
    <div class="loginHeader">
      <h1 @click="$router.push('/')">
        <img src="./images/logo.png" class="logo" alt="登录界面logo">
      </h1>
    </div>
    <!--    login内容-->
    <div class="loginContent clearfix">
      <!--      左侧的图片-->
      <div class="leftContent">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="登录页左侧的图">
      </div>
      <!--      右侧的input内容-->
      <div v-if="dynamicCode" class="rightContent">
        <div class="loginWay clearfix">
          <span class="accountLogin">账号登录</span>
          <a class="codeLogin" href="javascript:;" @click="dynamicCode = !dynamicCode">
            普通方式登录
            <i class="iconfont iconyonghu"></i>
          </a>
        </div>
        <!--        input框-->
        <div class="phone">
          <span>+86</span>
          <i></i>
          <input v-model="phone"
                 type="text"
                 class="phone-input"
                 name="phone"
                 placeholder="手机号"
                 v-validate="{ required: true, regex: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/ }"
                 :class="{ invalid: errors.has('phone') }"/>
          <span class="error-msg">
            <i v-show="errors.first('phone')" class="iconfont iconcuowu"></i>
            {{ errors.first('phone') }}
          </span>
        </div>
        <div class="password">
          <i class="iconfont iconmima"></i>
          <input v-model="code"
                 type="code"
                 class="pw-input"
                 name="code"
                 placeholder="动态码"
                 v-validate="{ required: true, regex: /^\d{6}$/ }"
                 :class="{ invalid: errors.has('code') }"/>
          <button :disabled="phone.length !== 11 || time < 60" @click="getPhoneCode" class="phoneCode">
            {{ timeOut ? `重新获取(${time})` : '获取动态码' }}
          </button>
          <span class="error-msg">
            <i v-show="errors.first('code')" class="iconfont iconcuowu"></i>
            {{ errors.first('code') }}
          </span>
        </div>
        <!--        忘记密码-->
        <div class="forgetPassword clearfix">
          <span>忘记密码?</span>
        </div>
        <!--        登录按钮-->
        <div class="login">
          <button @click="phoneCodeLogin">登录</button>
        </div>
        <!--        免费注册-->
        <div class="toRegister">
          <label>
            提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
            <a href="javascript:;">《美团用户服务协议》《美团隐私政策》</a>
          </label>
        </div>
        <!--        其他网站登录-->
        <div class="otherWebsite">
          <span>用合作网站登录</span>
        </div>
        <!--        qq和微信登录-->
        <div class="qqAndWechat">
          <i class="iconfont iconQQfang"></i>
          <i class="iconfont iconweibo3"></i>
        </div>
      </div>
      <div v-else class="rightContent">
        <div class="loginWay clearfix">
          <span class="accountLogin">账号登录</span>
          <a class="codeLogin" href="javascript:;" @click="dynamicCode = !dynamicCode">
            手机动态码登录
            <i class="iconfont iconshouji"></i>
          </a>
        </div>
        <!--        input框-->
        <div class="phone">
          <span>+86</span>
          <i></i>
          <input v-model="phone"
                 type="text"
                 class="phone-input"
                 name="phone"
                 placeholder="手机号"
                 v-validate="{ required: true, regex: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/ }"
                 :class="{ invalid: errors.has('phone') }"/>
          <span class="error-msg">
            <i v-show="errors.first('phone')" class="iconfont iconcuowu"></i>
            {{ errors.first('phone') }}
          </span>
        </div>
        <div class="password">
          <i class="iconfont iconmima"></i>
          <input v-model="password"
                 type="password"
                 class="pw-input"
                 name="password"
                 placeholder="密码"
                 v-validate="{ required: true, regex: /^\w{6,20}$/ }"
                 :class="{ invalid: errors.has('password') }"/>
          <span class="error-msg">
            <i v-show="errors.first('password')" class="iconfont iconcuowu"></i>
            {{ errors.first('password') }}
          </span>
        </div>
        <!--        忘记密码-->
        <div class="forgetPassword clearfix">
          <span>忘记密码?</span>
        </div>
        <!--        登录按钮-->
        <div class="login">
          <button @click="login">登录</button>
        </div>
        <!--        免费注册-->
        <div class="toRegister">
          <span>还没有账号?<a href="javascript:;" @click="$router.push('/register')">免费注册</a></span>
        </div>
        <!--        其他网站登录-->
        <div class="otherWebsite">
          <span>用合作网站登录</span>
        </div>
        <!--        qq和微信登录-->
        <div class="qqAndWechat">
          <i class="iconfont iconQQfang"></i>
          <i class="iconfont iconweibo3"></i>
        </div>
      </div>
    </div>
    <!--    login底部-->
    <div class="loginFooter">
      <dl class="siteInfo clearfix">
        <dd>关于美团</dd>
        <dd>加入我们</dd>
        <dd>商家入驻</dd>
        <dd>帮助中心</dd>
        <dd>美团手机版</dd>
      </dl>
      <div class="copyright">
        <span>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Encryption from '@/utils/encryption'
  import {login, getPhoneCode, phoneCodeLogin} from '@/Api/mysqlApi'

  export default {
    name: 'Login',
    data() {
      return {
        phone: '',
        password: '',
        code: '',
        dynamicCode: false,
        time: 60,
        timeOut: false,
      }
    },
    methods: {
      async login() {
        let {phone, password} = this
        const success = await this.$validator.validateAll() // 对所有表单项进行验证
        if (success) {
          password = Encryption.encrypt(password, 'meituanasdfghjkl')
          let result = await login(phone, password)
          if (result.code === '203') {
            this.$alert(result.data, {
              confirmButtonText: '确定',
              callback: (confirm) => {
                this.phone = ''
                this.password = ''
              },
            })
          } else if (result.code === '205') {
            this.$alert(result.data, {
              confirmButtonText: '确定',
              callback: (confirm) => {
                this.password = ''
              },
            })
          } else if (result.code === '200') {
            this.$alert(result.msg, {
              confirmButtonText: '确定',
              callback: (confirm) => {
                localStorage.setItem('USERINFO_KEY', JSON.stringify(result.data))
                this.$router.push('/')
              },
            })
          }
        }
      },
      async getPhoneCode() {
        let {phone} = this
        if (phone.length === 11) {
          let result = await getPhoneCode(phone)
          if (result.code === "209") {
            this.$alert(result.data, {
              confirmButtonText: '确定'
            })
            this.phone = "";
          } else if (result.code === "200") {
            this.$alert(result.data, {
              confirmButtonText: '确定',
              callback: (confirm) => {
                this.timeOut = true
                let timer = setInterval(() => {
                  this.time -= 1
                  if (this.time === 0) {
                    clearInterval(timer)
                    this.time = 60
                    this.timeOut = false
                  }
                }, 1000)
              },
            })
          }
        }
      },
      async phoneCodeLogin() {
        let {phone, code} = this
        const success = await this.$validator.validateAll() // 对所有表单项进行验证
        if (success) {
          if (phone !== '' && code !== '') {
            let result = await phoneCodeLogin(phone, code)
            if (result.code === '202') {
              this.$alert(result.data, {
                confirmButtonText: '确定',
              })
            } else if (result.code === '200') {
              this.$alert(result.msg, {
                confirmButtonText: '确定',
                callback: (confirm) => {
                  localStorage.setItem('USERINFO_KEY', JSON.stringify(result.data))
                  this.$router.push('/')
                },
              })
            }
          }
        }
      },
    },
  }
</script>
<style lang="less" scoped>
  /*  清除浮动*/
  .clearfix::after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }

  .loginContainer {
    width: 980px;
    margin: 0 auto;
    /*  login头部*/

    .loginHeader {
      width: 100%;
      margin: 40px auto 30px;

      h1 {
        .logo {
          width: 130px;
          height: 47px;
        }
      }
    }

    /*  login内容*/

    .loginContent {
      width: 980px;
      margin: 0 auto;
      padding: 0;

      .leftContent {
        width: 480px;
        height: 370px;
        float: left;
        margin: 0 115px 0 0;

        img {
          width: 480px;
          height: 370px;
        }
      }

      .rightContent {
        float: left;
        width: 270px;
        padding-top: 40px;

        .loginWay {
          width: 100%;
          color: #666;
          padding: 10px 0;
          font-size: 14px;

          .accountLogin {
            float: left;
          }

          .codeLogin {
            float: right;
            font-size: 12px;
            color: #666;
          }
        }

        .phone {
          width: 100%;
          height: 36px;
          margin: 8px 0;
          position: relative;

          span {
            position: absolute;
            top: 7px;
            left: 2px;
            color: #646464;
          }

          & > i {
            width: 8px;
            height: 8px;
            position: absolute;
            top: 13px;
            left: 30px;
            transform: rotate(-45deg);
            border-bottom: 1px solid #666;
            border-right: 1px solid #666;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 43px;

            &::placeholder {
              font-size: 16px;
            }

            &:focus {
              border: 1px solid #FE8C00;
            }
          }
        }

        .password {
          width: 100%;
          height: 36px;
          margin: 8px 0;
          position: relative;

          & > i {
            position: absolute;
            left: 8px;
            color: #ddd;
            top: 8px;
            font-weight: bold;
            font-size: 18px;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 28px;

            &::placeholder {
              font-size: 16px;
            }

            &:focus {
              border: 1px solid #FE8C00;
            }
          }

          .phoneCode {
            position: absolute;
            top: 11px;
            right: 5px;
            font-size: 12px;
            background: #fff;
            border: none;
            cursor: pointer;
            color: #666;
          }
        }

        .forgetPassword {
          width: 100%;
          padding-bottom: 8px;

          span {
            font-size: 12px;
            color: #FE8C00;
            float: right;
            cursor: pointer;
          }
        }

        .login {
          width: 100%;
          padding: 8px 0;

          button {
            background-image: linear-gradient(135deg, #FFD000 0, #FFBD00 100%);
            box-shadow: 0 2px 1px rgba(191, 105, 0, .15);
            width: 100%;
            border: none;
            cursor: pointer;
            color: #222;
            font-weight: 700;
            padding: 10px 0;
            border-radius: 4px;
          }
        }

        .toRegister {
          width: 100%;
          color: #666;
          font-size: 14px;

          label {
            font-size: 12px;
          }

          a {
            color: #FE8C00;
            margin-left: 5px;
          }
        }

        .otherWebsite {
          width: 100%;
          text-align: center;
          margin-top: 15px;
          color: #666;
          font-size: 14px;
          position: relative;

          &:before {
            content: "";
            width: 28%;
            height: 1px;
            background: #ddd;
            position: absolute;
            left: 0;
            top: 9px;
          }

          &:after {
            content: "";
            width: 28%;
            height: 1px;
            background: #ddd;
            position: absolute;
            right: 0;
            top: 9px;
          }
        }

        .qqAndWechat {
          width: 100%;
          margin-top: 20px;
          padding-left: 100px;

          i {
            margin-right: 20px;
            cursor: pointer;

            &:first-child {
              color: #93C8ED;
            }

            &:last-child {
              color: #FF978C;
            }
          }
        }

        /*  验证错误的样式*/

        .error-msg {
          position: absolute;
          top: 8px;
          left: 280px !important;
          color: #f76120 !important;
          white-space: nowrap;
        }
      }
    }

    /*  login底部*/

    .loginFooter {
      width: 100%;
      margin-top: 70px;

      .siteInfo {
        padding: 12px 0;
        box-sizing: border-box;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-bottom: 20px;

        dd {
          float: left;
          font-size: 12px;
          color: #999;
          margin: 5px 0;
          line-height: 14px;
          cursor: pointer;

          &:not(:last-child) {
            border-right: 1px solid #ddd;
          }

          &:first-child {
            padding-right: 16px;
          }

          &:not(:first-child) {
            padding: 0 16px;
          }
        }
      }

      .copyright {
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
