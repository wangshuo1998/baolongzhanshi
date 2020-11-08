const KoaRouter = require("koa-router");
//引入随机数函数
const random = require("../utils/random.js");
//生成路由器
const router = KoaRouter();
const mysql = require("../mysql");
var uuid = require('uuid');
const { selectInfo } = require("../mysql");

//创建一个对象,用来存储验证的手机号和六位验证码
let phoneAndCode = {

}
//创建发送六位验证的接口
router.post("/verifyCode",async (ctx,next)=>{
    phoneAndCode = {};
    let {phone} = ctx.request.body;
    let status = await selectInfo(phone);
    if(status.length>0){
        ctx.body = {
            "code":204,
            "data":"用户名已注册,请直接登录或找回密码",
            "msg":"ok"
        }
    }else{
        phoneAndCode.phone = phone;
        let code = random();
        phoneAndCode.verifyCode = code;
        ctx.body = {
            "code":200,
            "data":"验证码发送成功,请在手机上进行查收",
            "msg":"ok"
        }
        console.log(code);
    }
});

//携带phone,verifyCode,password参数提交注册
router.post("/submitRegister",async (ctx,next)=>{
    let {nickName,phone,verifyCode,password} = ctx.request.body;
    if(phoneAndCode.phone === phone){
        if(phoneAndCode.verifyCode === verifyCode){
            let status = await selectInfo(phone);
            if(status.length === 0){
                let id = uuid.v4();
                let dataParams = [id,nickName,phone,password];
                mysql.addInfo(dataParams);
                ctx.body = {
                    "code":"200",
                    "data":"恭喜您注册成功,快去登录吧!"
                }
            }else{
                ctx.body = {
                    "code":"300",
                    "data":"用户名已存在!"
                };
                return;
            }
            
        }else{
            ctx.body = {
                "code":"203",
                "data":"验证码错误,请检查手机的验证码!"
            }
        }
    }else{
        ctx.body = {
            "code":"201",
            "data":"请检查您的手机号是否有误!"
        }
    }
    console.log(phoneAndCode);
    console.log(phone,verifyCode)
})

//携带phone,password参数进行登录
router.post("/login",async (ctx,next)=>{
    let {phone,password} = ctx.request.body;
    let status = await selectInfo(phone);
    if(status.length>0){
        if(status[0].password === password){
            let userInfo = {
                nickName:status[0].nickname,
                phone:status[0].phone
            }
            ctx.body = {
                "code":"200",
                "data":userInfo,
                "msg":"登录成功!"
            }
        }else{
            ctx.body = {
                "code":"205",
                "data":"密码输入错误,请稍后重试!"
            }
        }
    }else{
        ctx.body = {
            "code":"203",
            "data":"用户不存在,请稍后重试!"
        }
    }
})

//获取动态码进行登录
router.post("/getPhoneCode",async (ctx,next)=>{
    let {phone} = ctx.request.body;
    let status = await selectInfo(phone);
    if(status.length>0){
        let code = random();
        phoneAndCode.phone = phone;
        phoneAndCode.code = code;
        ctx.body = {
            "code":"200",
            "data":"动态码发送成功,请在手机上查收!"
        }
        console.log(code);
    }else{
        ctx.body = {
            "code":"209",
            "data":"用户名不存在!"
        }
    }
})

//携带手机号和验证码进行登录
router.post("/phoneCodeLogin",async (ctx,next)=>{
    let {phone,code} = ctx.request.body;
    if(phone === phoneAndCode.phone && code === phoneAndCode.code){
        let status = await selectInfo(phone);
        let userInfo = {
            nickName:status[0].nickname,
            phone:status[0].phone
        };
        ctx.body = {
            "code":"200",
            "data":userInfo,
            "msg":"登录成功!"
        }
    }else{
        ctx.body = {
            "code":"202",
            "data":"手机号或验证码不正确,请检查您的手机号或验证码!"
        }
    }
})

module.exports = router;