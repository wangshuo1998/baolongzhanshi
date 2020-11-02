<template>
    <div class="container">
        <!--  头部-->
        <div class="headerContainer">
            <div class="header">
                <!--    头部顶端的导航条-->
                <div class="headerBar clearfix">
                    <!--            左侧-->
                    <div class="leftHeaderBar">
                        <span class="iconfont iconweizhi location"></span>
                        <span>安丘</span>
                        <button class="changeCity">切换城市</button>
                        <div class="cityInfo">
                            <span>[</span>
                            <a href="javascript:;">潍坊</a>
                            <a href="javascript:;">昌乐</a>
                            <a href="javascript:;">昌邑</a>
                            <span>]</span>
                        </div>
                        <a class="login" href="javascript:;">立即登录</a>
                        <a class="register" href="javascript:;">注册</a>
                    </div>
                    <!--            右侧-->
                    <ul class="rightHeaderBar clearfix">
                        <li>
                            <a class="rightHeaderNavItem" href="javascript:;">我的美团</a>
                            <ul class="owner">
                                <li><a href="javascript:;">我的订单</a></li>
                                <li><a href="javascript:;">我的收藏</a></li>
                                <li><a href="javascript:;">抵用券</a></li>
                                <li><a href="javascript:;">账户设置</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="rightHeaderNavItem" href="javascript:;">手机APP</a>
                        </li>
                        <li>
                            <a class="rightHeaderNavItem" href="javascript:;">商家中心</a>
                        </li>
                        <li>
                            <a class="rightHeaderNavItem" href="javascript:;">美团规则</a>
                        </li>
                        <li>
                            <a class="rightHeaderNavItem" href="javascript:;">网站导航</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--        logo+搜索框-->
            <div class="logoAndSearch clearfix">
                <h1 class="logo">
                    <img src="../../assets/logo.png" alt="美团logo">
                </h1>
                <div class="searchContainer">
                    <div class="searchBar">
                        <input class="search" placeholder="搜索商家或地点" type="text">
                        <button class="searchButton">
                            <span class="iconfont iconsousuo"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
    }
</script>

<style lang="less" scoped>
    .container {
        height: 2000px;
    }

    /*清除浮动*/
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        font-size: 0;
    }

    .headerContainer {
        width: 100%;
        box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.10);
        .header {
            width: 100%;
            height: 40px;
            background: #f2f2f2;
            /*  头部顶端的导航条*/
            .headerBar {
                width: 1190px;
                height: 40px;
                margin: 0 auto;
                font-size: 12px;
                color: #999999;

                a {
                    color: #999999;
                }

                .leftHeaderBar {
                    height: 40px;
                    float: left;
                    line-height: 40px;

                    .location {
                        font-size: 12px;
                        vertical-align: bottom;
                    }

                    .changeCity {
                        background: #F4F4F4;
                        border: 1px solid #E5E5E5;
                        border-radius: 2px;
                        color: #666;
                        margin: 0 4px;
                        padding: 0 2px;
                        font-size: 12px;

                        &:hover {
                            color: #FE8C00;
                        }
                    }

                    .cityInfo {
                        display: inline-block;
                        padding: 0 2px 0 1px;

                        a {
                            margin: 0 4px;
                        }
                    }

                    .login {
                        color: #FE8C00;
                        margin-left: 21px;
                    }

                    .register {
                        margin-left: 10px;

                        &:hover {
                            color: #FE8C00;
                        }
                    }
                }

                .rightHeaderBar {
                    height: 40px;
                    line-height: 40px;
                    float: right;
                    li{
                        float: left;
                        position: relative;
                        &:not(:nth-child(2)):hover .rightHeaderNavItem{
                            background: #fff;
                            box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.1);
                            color: #FE8C00;
                        }
                        &:hover .owner{
                            display: block;
                        }
                        .rightHeaderNavItem {
                            display: block;
                            padding: 0 14px;
                            box-sizing: border-box;
                            border-left: 1px solid transparent;
                            border-right: 1px solid transparent;
                            &:hover{
                                color: #FE8C00;
                            }
                        }
                        .owner{
                            display: none;
                            position: absolute;
                            left: 0;
                            top: 40px;
                            padding: 0 14px;
                            background: #fff;
                            z-index: 90;
                            border-bottom-left-radius: 4px;
                            border-bottom-right-radius: 4px;
                            box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
                            a{
                                display: block;
                                line-height: 33px;
                                text-align: center;
                                width: 50px;
                                &:hover{
                                    color: #FE8C00;
                                }
                            }
                        }
                    }
                }
            }
        }
        /*  logo+搜索框和按钮 */
        .logoAndSearch {
            width: 1190px;
            margin: 0 auto;
            padding-bottom: 35px;
            position: relative;

            .logo {
                float: left;
                padding-top: 28px;
                padding-bottom: 40px;
                padding-right: 60px;
                box-sizing: content-box;
                min-width: 220px;
                cursor: pointer;
                img {
                    width: 126px;
                    height: 46px;
                }
            }

            .searchContainer {
                float: left;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                padding-top: 28px;

                .searchBar {
                    width: 550px;
                    height: 40px;

                    .search {
                        width: 85.45%;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 15px;
                        border: 1px solid #e5e5e5;
                        border-right: none;
                        background: transparent;
                        line-height: 100%;
                        border-radius: 4px 0 0 4px;
                        vertical-align: middle;

                        &::placeholder {
                            font-size: 14px;
                            color: #999999;
                            vertical-align: bottom;
                        }
                    }

                    .searchButton {
                        width: 14.55%;
                        height: 40px;
                        box-sizing: border-box;
                        border: none;
                        background: #FFC300;
                        cursor: pointer;
                        vertical-align: middle;
                        line-height: 40px;
                        text-align: center;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;

                        span {
                            font-size: 21px;
                            color: #222;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>
