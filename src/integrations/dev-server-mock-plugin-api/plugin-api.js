class getPluginApi {
  configObject = async () => {
    return {
      username: 'admin',
      password: 'vPr0tect',
      vProtectURL: 'http://10.40.0.54:8080/api'
    }
  }
  showToast = (toastType, text) => {
    return null
  }
}

export default new getPluginApi();
