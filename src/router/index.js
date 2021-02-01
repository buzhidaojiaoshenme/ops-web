import VueRouter from 'vue-router'
import Vue from 'vue'
//路由懒加载的写法
const Upload = () => import('../components/common/Upload')

//安装路由
Vue.use(VueRouter);

const routes = [
    {
        path: '/upload',
        component: Upload
    }
]

const router = new VueRouter({
    routes
})

//导出,然后将router对象传入到vue实例中
export default router;
