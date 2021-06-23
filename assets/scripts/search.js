//  SEARCH FILTER

//  The base of this search filter can be found at the source link below
//  SOURCE: https://stackoverflow.com/questions/47224846/search-box-for-json-data
$("#txt-search").keyup(function () {
      var searchField = $(this).val();
      if (searchField === "") {
        $("#filter-records").html("");
        return;
      }

      var regex = new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i')
      var output = '<div class="elem-flex">';

      var count = 1;
      $.each(data, function (key, val) {
        if (val.name.search(regex) != -1) {
          let usdtResult = val.cost * prices.aether * prices.wax;
          output += `
          <div class="well">
              <div class="element-title"><h5>
              ${val.name}</h5>
                  <img class="element-image" src="${val.image}" alt="${val.name}" />
              </div>
              <div class="">
                  <img class="searched-price-image" src="assets/images/aether.png" alt="Card image cap"> <p class=" inline-block">${val.cost}</p></br>
                  <img class="searched-price-image" src="assets/images/wax.png" alt="Card image cap">
                  <p class="inline-block">${val.cost * prices.aether}</p>
                  <img class="searched-price-image inline-block" src="assets/images/usdt.png" alt="Card image cap">
                  <p class="inline-block">${usdtResult}</p>
              </div>
          </div>`
        }
      });
      output += `<div class="placeholder-card"></div>
                  <div class="placeholder-card" ></div>
                  <div class="placeholder-card" ></div>`
      output += "</div> </div> </div>";
      $("#filter-records").html(output);
    });
  if (!RegExp.escape) {
    RegExp.escape = function (s) {
      return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    };
  }
  
  jQuery(function(){
   var $rows = $('.values');
   $('#seeker').keyup(function () {
     var regex =  new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i')
     $rows.hide().filter(function () {
       var text = $(this).children(".value-name").text().replace(/\s+/g, ' ');
       return regex.test(text)
     }).show();
   });
 });


 




  
