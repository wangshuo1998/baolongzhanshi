<template>
  <div class="Insgesamt">
    <!-- 头部 -->
    <div class="header">
      <a @click="$router.push('/')" class="logo"></a>
    </div>
    <!-- 版心 -->
    <div class="wrapper">
      <img src="./images/image.jpg" alt="美团呦"/>
      <div v-if="dynamicCode" class="login-section">
        <div class="leer"></div>
        <div class="spans">
          <span>账号登陆</span>
          <span @click="dynamicCode=!dynamicCode" class="right-span">
            手机号登录
            <i class="iconfont iconyonghu"></i>
          </span>
        </div>
        <div class="input-wrapper">
          <span class="country-area">
            <span class="plus"></span>
            <span class="float">+86</span>
            <i class="right-arrow"></i>
          </span>
          <input type="hidden" name="countrycode" value="86"/>
          <input
            v-model="phone"
            type="text"
            class="phone-input"
            name="phone"
            placeholder="手机号"
            v-validate="{required:true,regex: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/}"
            :class="{invalid: errors.has('phone')}"
          />
          <span class="error-msg">
            <i v-show="errors.first('phone')"
               class="iconfont iconcuowu"></i>
            {{ errors.first('phone') }}
          </span>
        </div>
        <div class="pw-input-wrapper">
          <i class="iconfont iconsuotou icon-password"></i>
          <input
            v-model="code"
            type="code"
            class="pw-input"
            name="code"
            placeholder="动态码"
            v-validate="{required:true,regex:/^\d{6}$/}"
            :class="{invalid: errors.has('code')}"
          />
          <button :disabled="phone.length!==11 || time < 60" @click="getPhoneCode" class="phoneCode">
            {{timeOut?`重新获取(${time})`:"获取动态码"}}
          </button>
          <span class="error-msg">
            <i v-show="errors.first('code')"
               class="iconfont iconcuowu"></i>
            {{ errors.first('code') }}
          </span>
        </div>
        <div class="login-cf">
          <a href="java-scripc:;" target="top" class="forget-password"
          >忘记密码?</a
          >
        </div>
        <div class="btn">
          <button @click="phoneCodeLogin" class="btn-one">登录</button>
        </div>
        <p class="text-p tips">
          提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
          <a href="javascript:;">《美团用户服务协议》《美团隐私政策》</a>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="center">
            <div class="oauth">
              <span class="iconfont iconQQfang icon1"></span>
              <span class="iconfont iconweibo2 icon2"></span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="login-section">
        <div class="leer"></div>
        <div class="spans">
          <span>账号登陆</span>
          <span class="right-span" @click="dynamicCode=!dynamicCode"
          >手机动态码登录
            <i class="iconfont iconshouji3"></i>
          </span>
        </div>
        <div class="input-wrapper">
          <span class="country-area">
            <span class="plus"></span>
            <span class="float">+86</span>
            <i class="right-arrow"></i>
          </span>
          <input type="hidden" name="countrycode" value="86"/>
          <input
            v-model="phone"
            type="text"
            class="phone-input"
            name="phone"
            placeholder="手机号"
            v-validate="{required:true,regex: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/}"
            :class="{invalid: errors.has('phone')}"
          />
          <span class="error-msg">
            <i v-show="errors.first('phone')"
               class="iconfont iconcuowu"></i>
            {{ errors.first('phone') }}
          </span>
        </div>
        <div class="pw-input-wrapper">
          <i class="iconfont iconsuotou icon-password"></i>
          <input
            v-model="password"
            type="password"
            class="pw-input"
            name="password"
            placeholder="密码"
            v-validate="{required:true,regex:/^\w{6,20}$/}"
            :class="{invalid: errors.has('password')}"
          />
          <span class="error-msg">
            <i v-show="errors.first('password')"
               class="iconfont iconcuowu"></i>
            {{ errors.first('password') }}
          </span>
        </div>
        <div class="login-cf">
          <a href="java-scripc:;" target="top" class="forget-password"
          >忘记密码?</a
          >
        </div>
        <div class="btn">
          <button @click="login" class="btn-one">登录</button>
        </div>
        <p class="text-p">
          还没有账号?
          <a @click="$router.push('/register')">免费注册</a>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="center">
            <div class="oauth">
              <span class="iconfont iconQQfang icon1"></span>
              <span class="iconfont iconweibo2 icon2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <ul>
        <li class="first">
          <a href="###">关于美团</a>
        </li>
        <li>
          <a href="###">加入我们</a>
        </li>
        <li>
          <a href="###">商家入驻</a>
        </li>
        <li>
          <a href="###">帮助中心</a>
        </li>
        <li class="last">
          <a href="###">美团手机版</a>
        </li>
      </ul>
      <div class="copyright">
        <p class="span-size">
          ©2020 美团网团购 meituan.com 京ICP证070791号
          京公网安备11010502025545号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Encryption from "@/utils/encryption";
  import {login,getPhoneCode,phoneCodeLogin} from "@/Api/mysqlApi";

  export default {
    name: "Login",
    data() {
      return {
        phone: "",
        password: "",
        code:"",
        dynamicCode:false,
        time:60,
        timeOut:false
      }
    },
    methods: {
      async login() {
        let {phone, password} = this;
        const success = await this.$validator.validateAll(); // 对所有表单项进行验证
        if (success){
          password = Encryption.encrypt(password, "meituanasdfghjkl");
          let result = await login(phone, password);
          if (result.code === "203") {
            this.$alert(result.data, {
              confirmButtonText: '确定',
              callback: confirm => {
                this.phone = "";
                this.password = "";
              }
            });
          } else if (result.code === "205") {
            this.$alert(result.data, {
              confirmButtonText: '确定',
              callback: confirm => {
                this.password = "";
              }
            });
          } else if (result.code === "200") {
            this.$alert(result.msg, {
              confirmButtonText: '确定',
              callback: confirm => {
                localStorage.setItem("USERINFO_KEY", JSON.stringify(result.data));
                this.$router.push("/");
              }
            });
          }
        }
      },
      async getPhoneCode(){
        let {phone} = this;
        if (phone.length===11){
          let result = await getPhoneCode(phone);
          this.$alert(result.data, {
            confirmButtonText: '确定',
            callback:confirm=>{
              this.timeOut = true;
              let timer = setInterval(()=>{
                this.time -= 1;
                if (this.time === 0){
                  clearInterval(timer);
                  this.time = 60;
                  this.timeOut = false;
                }
              },1000)
            }
          });
        }
      },
      async phoneCodeLogin(){
        let {phone,code} = this;
        const success = await this.$validator.validateAll(); // 对所有表单项进行验证
        if (success){
          if (phone !== "" && code !== ""){
            let result = await phoneCodeLogin(phone,code);
            if (result.code === "202"){
              this.$alert(result.data, {
                confirmButtonText: '确定',
              });
            }else if(result.code === "200"){
              this.$alert(result.msg, {
                confirmButtonText: '确定',
                callback:confirm=>{
                  localStorage.setItem("USERINFO_KEY",JSON.stringify(result.data));
                  this.$router.push("/");
                }
              });
            }
          }
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .Insgesamt {
    background: #fff;
    /* 头部 */

    .header {
      width: 980px;
      height: 47px;
      /* background:rgb(177, 172, 172); */
      margin: 40px auto 30px;

      .logo {
        display: block;
        width: 130px;
        height: 47px;
        line-height: 47px;
        text-decoration: none;
        background: url(./images/logo.png);
        background-size: 100%;
      }
    }

    /* 版心 */

    .wrapper {
      width: 980px;
      height: 370px;

      margin: 0 auto 70px;
      display: flex;

      img {
        margin-right: 115px;
      }

      .login-section {
        width: 270px;
        height: 100%;
        /* background: cornflowerblue; */
        float: right;

        .error-msg {
          position: absolute;
          top: 0;
          left: 280px;
          white-space: nowrap;
          color: #F76120;
        }
        .phoneCode{
          position: absolute;
          top: 8px;
          left: 185px;
          background: #fff;
          border: none;
          cursor: pointer;
          font-size: 13px;
          color: #666;
        }
        .tips{
          font-size: 12px !important;
        }

        .leer {
          width: 270px;
          height: 40px;
          visibility: hidden;
          margin-top: 15px;
        }

        .spans {
          font-size: 14px;

          .right-span {
            font-size: 12px;
            float: right;
            margin-right: 0px;
            cursor: pointer;
            i{
              color: #666;
            }
          }
        }

        .input-wrapper {
          box-sizing: border-box;
          position: relative;
          width: 270px;
          height: 36px;
          line-height: 36px;
          padding: 0;
          border: 1px solid #aaa;
          background-color: #fff;
          margin: 8px 0;

          .country-area {
            color: #646464;

            .plus {
              box-sizing: border-box;
              display: inline-block;
              width: 5px;
              height: 10px;
            }

            .float {
              display: block;
              float: left;
            }

            .right-arrow {
              width: 5px;
              height: 5px;
              display: inline-block;
              border-right: 1px solid #646464;
              border-top: 1px solid #646464;
              transform: rotate(45deg);
              margin-right: 4px;
              position: relative;
              bottom: 2px;
            }
          }

          /*
        input {
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          &:focus{
            background-color: #fff;
          }
        } */

          .phone-input {
            width: 270px;
            height: 34px;
            padding-left: 5px;
            margin-right: 26px;
            border: none;
            max-width: 200px !important;
            float: right;
            line-height: 36px;
            font-size: 14px;
          }
        }

        .pw-input-wrapper {
          padding-left: 0;
          padding-bottom: 8px;
          margin-top: 17px;
          box-sizing: border-box;
          border: 1px solid #999;
          width: 270px;
          height: 36px;
          position: relative;

          .icon-password {
            width: 18px;
            height: 18px;
            background-size: 100%;
            position: absolute;
            left: 5px;
            top: 50%;
            color: #999;
            transform: translateY(-50%);
            /* background-position: -1250px -527px; */
            /* background-image: url(./images/icon.png); */
          }

          .pw-input {
            width: 219px;
            border-color: #999;
            height: 36px;
            border: none;
            padding-left: 30px;
          }
        }

        .forget-password {
          float: right;
          text-decoration: none;
          margin-right: 0px;
          margin-bottom: 5px;
          margin-top: 5px;
          display: block;
          font-size: 10px;
          color: #fe8c00;
        }

        .btn {
          width: 100%;
          height: 80px;
          /* background: red; */

          .btn-one {
            display: block;
            background: #ffc300;
            float: left;
            width: 270px;
            height: 33.8px;
            line-height: 33.8px;
            border: none;
            margin: 10px 0;
            font-weight: bold;
          }
        }

        .text-p {
          font-size: 14px;

          a {
            color: #fe8c00;
            cursor: pointer;
          }
        }

        .oauth-wrapper {
          width: 270px;
          height: 49px;
          /* background: #ffc300; */
          margin-top: 20px;

          .title-wrapper {
            /* position: relative; */
            margin-bottom: 30px;
            /* border-bottom: 1px solid #ccc; */
            width: 100%;
            height: 0;
            overflow: visible;
            text-align: center;

            .title {
              /* position: absolute; */
              /* top: -10px; */
              /* left: 50%; */
              /* margin-left: -75px; */
              /* width: 150px;
            text-align: center; */
              font-size: 14px;
              font-weight: 400;
              color: #666;
              position: relative;
              background: #fff;

              &::before {
                content: "";
                width: 55px;
                height: 1px;
                background: #999;
                display: block;
                position: absolute;
                top: 50%;
                right: 113%;
              }

              &::after {
                content: "";
                width: 55px;
                height: 1px;
                background: #999;
                display: block;
                position: absolute;
                top: 8px;
                right: -55%;
              }
            }
          }

          .center {
            position: relative;
            width: 270px;
            height: 40px;

            .oauth {
              position: absolute;
              width: 50px;
              height: 18px;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              /* background: chartreuse; */

              .icon1 {
                color: skyblue;
                font-size: 18px;
                text-align: center;
                margin-right: 5px;
              }

              .icon2 {
                color: #ff988e;
                font-size: 20px;
                text-align: center;
              }
            }
          }
        }
      }
    }

    /* 底部*/

    .footer {
      width: 980px;
      height: 87px;
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;

      margin: 0 auto 30px;
      clear: both;
      font-size: 12px;

      ul {
        /* float: left; */
        width: 594px;
        height: 37.6px;
        /* background: cornflowerblue; */
        color: #eee;
        border-bottom: 1px solid #eee;
        padding-bottom: 0;

        .first {
          padding-left: 0;
        }

        .last {
          border-right: none;
        }

        li {
          float: left;
          margin: 5px 0;
          padding: 0 16px;
          line-height: 14px;
          border-right: 1px solid #eee;

          a {
            color: #999999;
          }
        }
      }

      .span-size {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
</style>
