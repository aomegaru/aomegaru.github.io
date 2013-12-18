(function() {
  this.Like = (function() {
    function Like() {}

    Like.prototype.find = function(id) {
      return document.getElementById(id);
    };

    Like.prototype.show = function() {
      var domain, title;
      title = 'Middleman';
      domain = 'http://mydomain.com';
      return this.find('msg').innerHTML = "    	<a target=\"_blank\" href=\"https://twitter.com/intent/tweet?text=" + title + "&url=" + domain + "&via=TWITTER-HANDLE\" class=\"btn-twitter\">Twitter</a>\n    	<a target=\"_blank\" href=\"http://www.facebook.com/sharer/sharer.php?u=" + domain + "\" class=\"btn-facebook\">Facebook</a>\n<a target=\"_blank\" href=\"https://vk.com/share.php?url=" + domain + "&title=" + title + "&noparse=true\" class=\"btn-vk\">VK</a>";
    };

    return Like;

  })();

}).call(this);
