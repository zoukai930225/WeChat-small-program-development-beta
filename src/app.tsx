import Taro, { Component, Config } from '@tarojs/taro'
// import Info from './pages/info'
import Index from './pages/index'
import './app.scss'
import dinghuoSelect from './image/tab_dhd@2x.png';
import dinghuo from './image/tab_dhds@2x.png';
import fenleiSelect from './image/tab_fl@2x.png';
import fenlei from './image/tab_fls@2x.png';
import shouyeSelect from './image/tab_sy@2x.png';
import shouye from './image/tab_sys@2x.png';
import woSelect from './image/tab_wo@2x.png';
import wo from './image/tab_wos@2x.png';

console.log(shouye);
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/info/index',
      'pages/type/index',
      'pages/order/index',
      'pages/center/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      position: 'bottom',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: shouye,
          selectedIconPath: shouyeSelect,
        },
        {
          pagePath: 'pages/type/index',
          text: '分类',
          iconPath: fenlei,
          selectedIconPath: fenleiSelect,
        },
        {
          pagePath: 'pages/order/index',
          text: '订货单',
          iconPath: dinghuo,
          selectedIconPath: dinghuoSelect,
        },
        {
          pagePath: 'pages/center/index',
          text: '我的',
          iconPath: wo,
          selectedIconPath: woSelect,
        }
      ],
      // custom: true,
    },
    // debug: true
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
