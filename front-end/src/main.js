import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyBWQ-1xJyAahiskqfZkXGfOPiEf-77pOfA',
	authDomain: 'vue-full-stack-site-bcce6.firebaseapp.com',
	projectId: 'vue-full-stack-site-bcce6',
	storageBucket: 'vue-full-stack-site-bcce6.appspot.com',
	messagingSenderId: '491188431412',
	appId: '1:491188431412:web:7fc46267f69e8b61613861',
}

initializeApp(firebaseConfig)

createApp(App)
	.use(
		VueRouter.createRouter({
			history: VueRouter.createWebHistory(process.env.BASE_URL),
			routes: [
				{
					path: '/cart',
					component: ShoppingCartPage,
				},
				{
					path: '/products',
					component: ProductsPage,
				},
				{
					path: '/products/:productId',
					component: ProductDetailPage,
				},
				{
					path: '/',
					redirect: '/products',
				},
				{
					path: '/:pathMatch(.*)*',
					component: NotFoundPage,
				},
			],
		})
	)
	.mount('#app')
