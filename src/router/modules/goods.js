import Layout from '@/layout'
export default {
  path: '/goods',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/goods'),
      meta: { title: '商品管理', icon: 'shangpin' }
    }
  ]
}
