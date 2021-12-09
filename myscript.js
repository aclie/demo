<html>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>

<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"> </script>

<script>

validateHuman=function(){
	    alert(  (checkHuman() ? "You are a human being. Congratulations.": "Damn cyborgs!")  );   
	}
	checkHuman=function(){
	    var s='';
	    $('.cItem').each(function(){
	        s+= $(this).text();
	    });
	    return (s=="012345");
	}
	    
	$.fn.randomize = function(childElem) {
	  return this.each(function() {
	      var $this = $(this);
	      var elems = $this.children(childElem);

	      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

	      $this.remove(childElem);  

	      for(var i=0; i < elems.length; i++)
	        $this.append(elems[i]);      

	  });    
	}
	        
	$('#captcha').sortable();
	$('#captcha').disableSelection();
	$('#captcha').fadeIn('slow');
	while(checkHuman()){
	    $("div#captcha").randomize("div.cItem");
	}
</script>
</html>

