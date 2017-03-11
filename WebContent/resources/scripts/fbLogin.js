/**
 * 
 */
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1568787966483272',
      cookie	 : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };
  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "//connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  $(document).ready(function(){
	  $('.fbLogin').on('click', function(e){
		  fbLogin();
	  });
	  
	  function fbLogin(){
		  FB.login(function(response){
			  console.log(response);
			  if (response.status === 'connected') {
				  $('.main-login-cont').append('<div>Success!! Logged In...</div>');
			  }
			  else {
				  $('.main-login-cont').append('<div>Failure!!</div>');
			  }
		  },
		  {scope:'public_profile, email'});
	  }
  });
