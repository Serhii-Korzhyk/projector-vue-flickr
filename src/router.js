import VueRouter from 'vue-router';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Home from './components/Home.vue';
import Search from './components/Search.vue';
import Group from './components/Group.vue';
import NotFound from './components/pages/NotFound.vue';
import Upload from './components/pages/Upload.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: "Home" } },
    { path: '/home',  component: Home,  name: "Home"  },
    { path: '/search',  component: Search,  name: "Search"  },
    { path: '/group',  component: Group,  name: "Group"  },
    { path: '/login',  component: Login,  name: "Login"  },
    { path: '/upload',  component: Upload,  name: "Upload"  },
    { path: '/register',  component: Register,  name: "Register"  },
    { path: '*', component: NotFound, props: {  msg: "Cannot find the page you requested" },},
  ]
});
