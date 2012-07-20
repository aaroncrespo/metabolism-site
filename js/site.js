!function ($) {

  $(function(){

    var metabolism = Raphael('metabolism', '940', '680');
    var dots = metabolism.set();
    var reactions = metabolism.set();
    var lines = metabolism.set();

    var dotData;

    var reactionData;

    var modalTitleHolder    = $('.modal-header h3');
    var modalDiseaseHolder  = $('#reaction-diseases .accordion-inner');
    var modalProductsHolder = $('#reaction-products .accordion-inner');
    var modalReactionHolder = $('#reaction-info .accordion-inner');
    var modalQuizesHolder   = $('#reaction-quizes .accordion-inner');
    var diseaseMenu         = $('diseases .dropdown-menu');

    function replaceModal(data, reaction, products, diseases) {
      modalTitleHolder.empty();
      modalDiseaseHolder.empty();
      modalProductsHolder.empty();
      modalReactionHolder.empty();
      modalQuizesHolder.empty();

      modalTitleHolder.append(data.id);
      modalReactionHolder.append(reaction);
      

      if (products) {
        products.forEach(function(product){
          modalProductsHolder.append('<ul>');
          modalProductsHolder.append('<li>' + product.id + '</li>');
          modalProductsHolder.append('</ul>');
        });
      } else {
        modalProductsHolder.append("<strong>Sorry Liz hasnt given me products for this reaction yet</strong>");
      }

      if(diseases) {
        diseases.forEach(function(disease){
          modalDiseaseHolder.append('<h4>' + disease.id + '</h4>');
          modalDiseaseHolder.append('<ul>' + disease.description + '</ul>');
        });
      } else {
       modalDiseaseHolder.append("<strong>Sorry Liz hasn't told me about any diseases related to this reaction yet</strong>");
      }
    }

    function reactionsLoaded(){
      reactions.attr({'stroke-width': '0','stroke-opacity': '1',opacity: '0.7', cursor: 'pointer'});
      reactions.forEach(function (el) {
        el.node.setAttribute('data-toggle','modal');
        el.node.setAttribute('href','#reaction-modal');
        // console.log(el.data('reactionData').('reaction'));
        var reactionData = el.data('reactionData');
        // if (reactionData.diseases) {
        //   reactionData.diseases.forEach(function(disease){
        //     console.log(diseaseMenu);
        //     diseaseMenu.append("safklhiadkjh");
        //     diseaseMenu.append('<li>' + disease.id + '</li>');
        //   });
        // }

        el.mouseover(function () {
            el.animate({'stroke-width': '3','stroke-opacity': '100', 'stroke-color': '#FFFFFF'}, 100);
            var reactionData = el.data('reactionData');
            replaceModal(reactionData, reactionData.reaction, reactionData.products, reactionData.diseases);
        });

        el.mouseout(function () {
            el.animate({'stroke-width': '0','stroke-opacity': '0'}, 100);

        });
      });
    }

    function linesLoaded(){
      lines.attr({stroke: '#000000','stroke-width': '4','stroke-miterlimit': '10','stroke-opacity': '1'});
    }

    function dotsLoaded(){
      dots.attr({fill: '#62B24F',stroke: '#000000','stroke-width': '3','stroke-miterlimit': '10','stroke-opacity': '1', cursor: 'pointer'});
    }

    $.getJSON('json/reactions.json', function(json) {
      metabolism.fromJSON(json, function(el, data){

          el.node.setAttribute('title', data.id);

          el.data('reactionData', data);

          el.node.setAttribute('rel','tooltip');
          el.toBack();
          reactions.push(el);
      });

      reactions.forEach(function(el){
        el.node.setAttribute('rel','tooltip');
      });

     $("[rel=tooltip]").tooltip();

      reactionsLoaded();
    });

     $.getJSON('json/dots.json', function(json) {
        metabolism.fromJSON(json, function(el, data){
          el.node.setAttribute('title', data.id);
          el.node.setAttribute('rel','tooltip');

          el.toFront();
          dots.push(el);

        });
      $("[rel=tooltip]").tooltip();

        dotsLoaded();
    });

    $.getJSON('json/lines.json', function(json) {
      metabolism.fromJSON(json, function(el, data){
          lines.push(el);
      });
      linesLoaded();
    });


    // var json = metabolism.toJSON(function(el, data){
    //   data.id = el.node.id;
    //   data.name = el.node.title;
    //   data.setName = el.setName;
    //   return data;
    // });
    //$('#jsonoutput').append(json).show();

    // fix sub nav on scroll
    // var $win = $(window);
    // var $nav = $('.subnav');
    // var navHeight = $('.navbar').first().height();
    // var navTop = $('.subnav').length && $('.subnav').offset().top - navHeight;
    // var isFixed = 0;

    // processScroll();

    // $win.on('scroll', processScroll);

    // function processScroll() {
    //   var i, scrollTop = $win.scrollTop();
    //   if (scrollTop >= navTop && !isFixed) {
    //     isFixed = 1;
    //     $nav.addClass('subnav-fixed');
    //   } else if (scrollTop <= navTop && isFixed) {
    //     isFixed = 0;
    //     $nav.removeClass('subnav-fixed');
    //   }
    // }
    //this needs to be loaded when the reactions are loaded
  });
}(window.jQuery)