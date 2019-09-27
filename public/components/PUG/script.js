new Vue({
  el: '#app',
  data: {
    pugs: '',
    selectedPug: ''},

  created: function() {
    this.getPugs();
  },
  methods: {
    getPugs: function() {
      const $this = this;

      $.ajax({
        url: 'https://dog.ceo/api/breed/pug/images',
        success: function(data) {
          $this.pugs = data;
        },
        complete: function() {
          $this.selectPug();
        }});
    },
    selectPug: function() {
      const randomNum = Math.floor(Math.random() * this.pugs.message.length);
      console.log(randomNum);
      this.selectedPug = this.pugs.message[randomNum];
    }}});
