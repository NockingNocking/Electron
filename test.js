import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
// 导出-为了在切换页面时取消被切换页面的正在请求的接口
export const pendingMap = new Map()
/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config) {
  let { url, method, params, data } = config
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  // 以url和...组成字符串作为储存的key值
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}
/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config) {
  const pendingKey = getPendingKey(config)
  // https://segmentfault.com/a/1190000039844280
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}
/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config) {
  // console.log(pendingMap,'pendingMap')
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

const LoadingInstance = {
  _target: null, // 保存Loading实例
  _count: 0
}

function myAxios(axiosConfig, customOptions) {
  const service = axios.create({
    // baseURL: '', // 设置统一的请求前缀// http://localhost:8888
    timeout: 30000 // 设置统一的超时时长
  })

  // 自定义配置
  let custom_options = Object.assign(
    {
      repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
      loading: false // 是否开启loading层效果, 默认为false
    },
    customOptions
  )

  service.interceptors.request.use(
    (config) => {
      removePending(config)
      custom_options.repeat_request_cancel && addPending(config)
      // 创建loading实例
      if (custom_options.loading) {
        LoadingInstance._count++
        if (LoadingInstance._count === 1) {
          LoadingInstance._target = ElLoading.service({
            text: '加载中-----------',
            background: 'rgba(0,0,0,0.6)'
          })
        }
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  service.interceptors.response.use(
    (response) => {
      removePending(response.config)
      custom_options.loading && closeLoading(custom_options) // 关闭loading

      return response
    },
    (error) => {
      error.config && removePending(error.config)
      custom_options.loading && closeLoading(custom_options) // 关闭loading
      httpErrorStatusHandle(error) // 处理错误状态码
      return Promise.reject(error)
    }
  )
  return service(axiosConfig)
}
const messageList1 = []
/**
 * 处理异常
 * @param {*} error
 */
function httpErrorStatusHandle(error) {
  console.log(axios.isCancel(), error, 'axios')
  // 处理被取消的请求
  if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.message)
  let message = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = '接口重定向了！'
        break
      case 400:
        message = '参数不正确！'
        break
      case 401:
        message = '您未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        message = '您没有权限操作！'
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        break // 在正确域名下
      case 408:
        message = '请求超时！'
        break
      case 409:
        message = '系统已存在相同数据！'
        break
      case 500:
        message = '服务器内部错误！'
        break
      case 501:
        message = '服务未实现！'
        break
      case 502:
        message = '网关错误！'
        break
      case 503:
        message = '服务不可用！'
        break
      case 504:
        message = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        message = 'HTTP版本不受支持！'
        break
      default:
        message = '异常问题，请联系管理员！'
        break
    }
  }
  if (error.message.includes('timeout')) message = '网络请求超时！'
  if (error.message.includes('Network'))
    message = window.navigator.onLine ? '服务端异常！' : '您断网了！'
  showMessage(message)
}

/**
 * 关闭Loading层实例
 * @param {*} _options
 */
function closeLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target.close()
    LoadingInstance._target = null
  }
}
/**
 * 处理相同内容多次弹出弹框
 * @param {*} _options
 */
function showMessage(message) {
  // 1：判断同时只能存在消息相同的一个弹框
  // 2：或是通过判断弹框元素来判断
  if (!messageList1.includes(message)) {
    messageList1.push(message)
    ElMessage({
      type: 'error',
      // grouping: true,
      onClose: (e) => {
        const _this = e
        const index = messageList1.findIndex((i) => i == _this.props.message)
        messageList1.splice(index, 1)
      },
      message
    })
  }
}

export default myAxios
