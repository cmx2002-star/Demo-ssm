import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
// 这里面放的是固定路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },

  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  }
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },
]

// 把需要设置权限的路由放在动态路由里 其中 meta中的 roles 就是对角色的管理
export const asyncRoutes = [
  {
    path: '/repairApplication',
    component: Layout,
    children: [
      {
        path: 'create',
        name: 'RepairApplication',
        component: () => import('@/views/repairApplication/create'),
        meta: {
          title: '维修申请',
          icon: 'el-icon-s-cooperation',
          roles: ['Student']
        }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'table',
        component: () => import('@/views/table/index'),
        meta: {
          title: '维修申报处理',
          icon: 'el-icon-s-tools',
          roles: ['DormAdmin']
        }
      }
    ]
  },

  {
    path: '/feePayment',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'FeePayment',
        component: () => import('@/views/feePayment/index'),
        meta: {
          title: '费用缴纳',
          icon: 'el-icon-s-finance',
          roles: ['Student']
        }
      }
    ]
  },

  {
    path: 'feePayment',
    component: Layout,
    children: [
      {
        path: '/showAllFee/index',
        name: 'StudentFees',
        component: () => import('@/views/feePayment/showAllFee/index'),
        meta: {
          title: '学生费用管理',
          icon: 'el-icon-s-finance',
          roles: ['DormAdmin']
        }
      }
    ]
  },

  // {
  //   path: '/dormitoryReplacement',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'DormitoryReplacement',
  //       component: () => import('@/views/dormitoryReplacement/index'),
  //       meta: {
  //         title: '宿舍更换',
  //         icon: 'form',
  //         roles: ['Student']
  //       }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/dormitoryExit',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'dormitoryExit',
  //       component: () => import('@/views/dormitoryExit/index'),
  //       meta: {
  //         title: '毕业退舍',
  //         icon: 'el-icon-delete',
  //         roles: ['Student']
  //       }
  //     }
  //   ]
  // },

  {
    path: '/Announcement',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Announcement',
        component: () => import('@/views/Announcement/index'),
        meta: {
          title: '发布公告',
          icon: 'el-icon-message-solid',
          roles: ['SysAdmin', 'DormAdmin']
        }
      }
    ]
  },
  {
    path: '/EmployeeManagement',
    component: Layout,
    redirect: '/EmployeeManagement/AdminManagement',
    name: 'EmployeeManagement',
    meta: {
      title: '人员管理',
      icon: 'el-icon-user-solid',
      roles: ['SysAdmin', 'DormAdmin']
    },
    children: [
      {
        path: 'AdminManagement',
        component: () => import('@/views/EmployeeManagement/AdminManagement/index'), // Parent router-view
        name: 'AdminManagement',
        meta: {
          title: '管理员管理',
          roles: ['SysAdmin']
        }
      },
      {
        path: 'StudentManagement',
        component: () => import('@/views/EmployeeManagement/StudentManagement/index'),
        name: 'StudentManagement',
        meta: {
          title: '学生管理',
          roles: ['SysAdmin', 'DormAdmin']
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
    new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({ y: 0 }),
      routes: constantRoutes
    })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
