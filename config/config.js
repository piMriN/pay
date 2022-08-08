const APIConfig = {
  "api1" : {
    baseURL : 'https://admin.hxwendeng.com'
  },
  "api2" : {
    baseURL : 'http://jd.itying.com' 
  }
}

// 路径白名单
const pathWhiteList = [
  "/login",
  "/404",
  "/401",
  "/settings"
]

const field = {
  loginCredentials : "token",
  userInfokey:"userInfo"
}

export {APIConfig,pathWhiteList,field}