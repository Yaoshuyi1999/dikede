import Layout from '@/layout'
export default {
  path: '/people',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/people'),
      meta: { title: '人员管理', icon: 'renyuan' }
    }
  ]
}
