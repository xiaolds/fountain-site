// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HomePage from './pages/HomePage';
import Resource from './pages/HomePage/components/Resource';

const routerConfig = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/service',
    component: Resource,
  },
];

export default routerConfig;
