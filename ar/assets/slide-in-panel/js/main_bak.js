$(document).ready(function($) {
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		//event.preventDefault();

		var getNoteid = $(this).attr('nid');
		var getType = $(this).attr('ntype');
		var getLevel = $(this).attr('nlevel');
		var proceed = true;
		
		
		
        if((getNoteid=="") || (getNoteid==" ")){ 
            proceed = false;
        }
         
		//alert(getNoteid);
		//loading
		if(getLevel){
			getpath = "../";
			data1 = "<div><img src='https://integratedreporting.org/integratedreport2020/images/loading.gif'></div>"
		}else{
			getpath = "../";
			data1 = "<div><img src='https://integratedreporting.org/integratedreport2020/images/loading.gif'></div>"
		}
		
		
		$('.cd-panel-content').html(data1);	    
        
        if(proceed){
			
            //data to be sent
			if(getType){
				var p_data = {'noteId':getNoteid};
				var parth = getpath+'pro/compare.php';
				$('.cd-panel-content').addClass("bg-color-wt");
			}else{
				
				var p_data = {'noteId':getNoteid};
				var parth = getpath+'pro/getdata.php';
			}
			
			
		
		
			 //Ajax post data to server
        	$.post(parth, p_data, function(data){ 
				
				if(data){
					
				
					$('.cd-panel-content').html(data);
				}
						
			});
			
		}
		
		
		$('.cd-panel').addClass('is-visible');

	});
	
	//close the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	
	/*******  Custom scripts ******/


	
	
});






/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);

