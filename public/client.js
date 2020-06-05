// client-side js
// run by the browser each time your view template is loaded

//generate cards from airtable
$(function() {
  $.getJSON('/data', function(data) {
    var $dataContainer = $('#data-container');
      
    if (data.error) {
      $dataContainer.html('Error! ' + data.error);
      return;
    }
      
    // Clear the loading message.
    $dataContainer.html('');
      
    data.records.forEach(function(record) {
      var $galleryCard = $('<div class="gallery-card" />');
      if (record.picture[0]) {
        // Just show the first picture, if it has one.
        $('<img />').attr('src', record.picture[0].url).appendTo($galleryCard);
      }
      var $label = $('<strong />').text(record.name);
      
      
      $galleryCard.append($label);
            
      var imageLink = record.picture[0].url
      var priceToken = Math.random() * 100
      
      var cardTemplate = `<div class="gallery-card">
                            
                            <p><strong>${record.name}</strong> | <i> Earth Bender</i></p>
                            <hr>
                            <div class="linkBox">
                              <p>3Box Profile</p>
                              <threebox-address data-address=${record.owner_address} data-display='full'></threebox-address>
                             </div><br><br><hr>
                             <p>Est price per token: <span class="tokenPrice">${priceToken} DAI</span</p>
                             
                          </div>`;
      
    $dataContainer.append(cardTemplate);
    });
  });
});

//Slider interaction number
$(document).ready(function() {
  
  //create slider number
   $('input[type="range"]').on("change mousemove", function() {
     $("#ratingOne").html($(this).val());
   });

});

//TODO create form submit for airtable POST
//create owner with web3 provider
  var userAddress = document.getElementById("userAddress").textinnerHTML;
  console.log("userAddress: " + userAddress);
  document.getElementById("address_owner").attr("value", userAddress);

