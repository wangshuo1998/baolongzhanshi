<template>
  <div class="Insgesamt">
    <div class="header">
      <a class="logo" href="http://www.weituan.com"></a>
    </div>
    <div class="wrapper">
      <img src="./images/image.jpg" alt="美团呦" />
      <div class="login-section">
        <div class="leer"></div>
        <div class="spans">
          <span>账号登陆</span>
          <span class="right-span">手机动态登录</span>
        </div>
        <div class="input-wrapper">
          <span class="country-area">
            <span class="plus"></span>
            <span class="float">+86</span>
            <i class="right-arrow"></i>
          </span>
          <input type="hidden" name="countrycode" value="86" />
          <input
            type="text"
            class="phone-input"
            name="email"
            placeholder="手机号"
            value
            maxlength="15"
          />
        </div>
        <div class="pw-input-wrapper">
            <i class="icon-password"></i>
            <input type="password" class="pw-input" name="password" placeholder="密码">
        </div>
        <div class="login-cf">
            <a href="java-scripc:;" target="top" class="forget-password">忘记密码?</a>
        </div>
        <div class="btn">
          <button class="btn-one">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang = "less">
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

.wrapper {
  width: 980px;
  height: 370px;
  /* background: coral; */
  margin: 0 auto 70px;
  display: flex;
  img {
    margin-right: 115px;
  }
  .login-section {
    width: 270px;
    height: 100%;
    /* background: cornflowerblue; */
    /* float: right; */

    .leer {
      width: 270px;
      height: 40px;
      visibility: hidden;
      /* margin-top: 15px; */
    }
    .spans {
      font-size: 14px;

      .right-span {
        font-size: 12px;
        float: right;
        margin-right: 37px;
      }
    }

    .input-wrapper {
      box-sizing: border-box;
      width: 235px;
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
          width: 10px;
          height: 10px;
        }

        .float{
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
      input{  
	background:none;  
	outline:none;  
	border:1px solid #ccc;
}
input:focus{   
	border:none;
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
        width: 180px;
        height: 34px;
        padding-left: 5px;
        border: none;
        max-width: 200px !important;
        float: right;
        line-height: 36px;
        font-size: 14px;
      }
    }

    .pw-input-wrapper{
        padding-left: 0;
        padding-bottom: 8px;
        

        .icon-password{
            width: 18px;
            height: 18px;
            background-size: 100%;
            /* background-position: -1250px -527px; */
            background-image: url(./images/icon.png);
        }

        .pw-input{
            width: 235px;
            border-color: #999;
            height: 36px;
            border: 1px solid #6464;
        }
    }

    .forget-password{
        float: right;
        text-decoration: none;
        margin-right: 35px;
        margin-bottom: 5px;
        display: block;
        font-size: 10px;
        color: #FE8C00;
    }

    .btn{
      width: 100%;
      height: 370px;
      /* background: red; */

      .btn-one{
        display: block;
        background: #ffc300;
        float: left;
        width: 235px;
        height: 33.8px;
        line-height: 33.8px;
        border: none;
        margin: 10px 0;
        font-weight: bold;
      }
    }
  }
}
</style>