jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		
		
		var getNoteid = $(this).attr('nid');
		var getType = $(this).attr('ntype');
		var getLevel = $(this).attr('nlevel');
		var proceed = true;
		
		
        if((getNoteid=="") || (getNoteid==" ")){ 
            proceed = false;
        }
           
		//loading
		if(getLevel){
			getpath = "";
		}else{
			getpath = "../";
		}
		
		data1 = "<div><img src='"+getpath+"images/loading.gif'></div>"
		$('.cd-panel-content').html(data1);	    
        
        if(proceed){
			
         $noteid = "note"+getNoteid;  
		
		$(function(){
			$(".cd-panel-content").load('../financial_statements/notes_to_the_consolidated_financial_statements.html #'+$noteid, function() {
        	// $(this).html($(this).html().replace('button', 'span'));
			// $(this).html($(this).html().replace('fas fa-chevron-down', ''));
//			 $(this).html($(this).html().replace('<div class="sub-menu-content">', '<div class="sub-menu-content" style="display: block;">'));
    }); 
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


	
	
	
	
	

//bod

$(function() {
    var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});	
	
	
	
	
	
	    /* ---------------------------------------------

     WOW init

     --------------------------------------------- */

    if (typeof WOW == "function")

    new WOW().init();	
	
	
	
	
	
	
	
	
	
	
	
	
	
// Scroll to top  
	if ($('#totop').length) {
		var scrollTrigger = 100, // px
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('#totop').addClass('show');
			} else {
				$('#totop').removeClass('show');
			}
		};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#totop').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
// END Scroll to top 		
	
	



	
	
	
});




//BOD
	$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});	








