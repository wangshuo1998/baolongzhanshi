import msqAjax from '@/Ajax/mysqlAjax';

//发送验证码
export const reqVerifyCode = (phone)=>{
  return msqAjax({
    url:"/verifyCode",
    method:"POST",
    data:{
      phone
    }
  })
}
//携带phone,verifyCode,password三个参数提交注册
export const submitRegister = (phone,verifyCode,password)=>{
  return msqAjax({
    url:"/submitRegister",
    method:"POST",
    data:{
      nickName:phone,
      phone,
      verifyCode,
      password
    }
  })
}
//携带phone,password两个参数进行登录
export const login = (phone,password)=>{
  return msqAjax({
    url:"/login",
    method:"POST",
    data:{
      phone,
      password
    }
  })
}
