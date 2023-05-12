import { createRouter, createWebHashHistory } from 'vue-router'
import NewSolvideView from '../views/NewSolvideView.vue'
import KokonaraView from '../views/KokonaraView.vue'
import NewSolvidePolicy from '../views/NewSolPolicyView.vue'
import NewSolService from '../views/NewSolServiceView.vue'

const routes = [
  {
    path: '/',
    name: 'solvide',
    component: NewSolvideView,
    meta: {
      title: 'ソルバイド・ホームページ制作',
      metaTags: [
        {
          name: 'description',
          content: 'ソルバイドは、Web制作でお悩み解決します。埼玉県さいたま市を拠点に、Web制作グループとして多くのお客様にご支持いただいています。お気軽にお問い合わせください。',
        },
        {
          name: 'keywords',
          content: '埼玉県さいたま市のWeb制作, 埼玉ホームページ制作, ヘッドレスCMSサイト制作,ワードプレスサイト制作、'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Web制作グループ ソルバイド'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ソルバイドは、Web制作でお悩み解決します。埼玉県さいたま市を拠点に、Web制作グループとして多くのお客様にご支持いただいています。お気軽にお問い合わせください。'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '画像URL'
        }
      ]
    }
  },
  {
    path: '/solvide-policy',
    name: 'solvide-policy',
    component: NewSolvidePolicy,
    meta: {
      title: '私たちについて - ソルバイド',
      metaTags: [
        {
          name: 'description',
          content: '埼玉県さいたま市を拠点にWeb制作を行う私達は、ヘッドレスCMSサイト制作やWordPressサイト制作など、様々なニーズに応えることができます。埼玉ホームページ制作においても、お客様の要望に合わせた最適な解決策を提供することができます。当社は、技術力とノウハウを持つ制作グループであり、最高品質のWeb制作を提供します',
        },
        {
          name: 'keywords',
          content: '埼玉県さいたま市のWeb制作, 埼玉ホームページ制作, ヘッドレスCMSサイト制作,ワードプレスサイト制作、'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Web制作グループ ソルバイド'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ソルバイドは、Web制作でお悩み解決します。埼玉県さいたま市を拠点に、Web制作グループとして多くのお客様にご支持いただいています。お気軽にお問い合わせください。'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '画像URL'
        }
      ]
    }
  },
  {
    path: '/solvide-service',
    name: 'solvide-service',
    component: NewSolService,
    meta: {
      title: 'ソルバイド・サービス内容',
      metaTags: [
        {
          name: 'description',
          content: '埼玉県さいたま市を拠点にWeb制作を行う私達は、ヘッドレスCMSサイト制作やWordPressサイト制作など、様々なニーズに応えることができます。埼玉ホームページ制作においても、お客様の要望に合わせた最適な解決策を提供することができます。当社は、技術力とノウハウを持つ制作グループであり、最高品質のWeb制作を提供します',
        },
        {
          name: 'keywords',
          content: '埼玉県さいたま市のWeb制作, 埼玉ホームページ制作, ヘッドレスCMSサイト制作,ワードプレスサイト制作、'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Web制作グループ ソルバイド'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ソルバイドは、Web制作でお悩み解決します。埼玉県さいたま市を拠点に、Web制作グループとして多くのお客様にご支持いただいています。お気軽にお問い合わせください。'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '画像URL'
        }
      ]
    }
  },
  {
    path: '/solvide-kokonara',
    name: 'solvide-kokonara',
    component: KokonaraView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const meta = to.meta.metaTags
  if (meta) {
    meta.forEach(tag => {
      const tagElement = document.createElement('meta')
      Object.keys(tag).forEach(key => {
        tagElement.setAttribute(key, tag[key])
      })
      document.head.appendChild(tagElement)
    })
  }
  next()
})

export default router
