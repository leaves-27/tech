import SelfVue from './vue';

new SelfVue({
  el: '#app',
  data(){
    return {
      title: 'hello world',
      name: 'canfoo'
    }
  },
  methods: {
    clickMe: function () {
      this.title = 'hello world';
    }
  },
  mounted: function () {
    window.setTimeout(() => {
        this.title = '你好';
    }, 1000);
  }
});