var api ={
  url: "https://randomuser.me/api/?results=50"
}

var loadPage = function(){
  $("#demo01").animatedModal();
  loadUser();
}

var loadUser = function(){
  $.getJSON(api.url, function(response){
    var results = response.results;
    results.forEach(contactList);

    $(".card").click(function(){
      if(this){
        $(".fullPicture").attr("src", $(this).find("div > img").attr("src"));
        $("#bigName").text($(this).find("#fullName").text());
        $("#user").text($(this).find("#user_name").text());
        $("#location").text($(this).find("#street").text());
        $("#email").text($(this).find("#mail").text());
        $("#cell").text($(this).find("#phone").text());

      }

    });
  });
}

var contactList = function(contact){
  var firstName = contact.name.first;
  var lastName = contact.name.last;
  var userName = contact.login.username;
  var picture = contact.picture.large;
  var location = contact.location.street;
  var email = contact.email;
  var cell = contact.cell;

  var templateList =  '<div class="col-6 card">' +
                        '<div>' +
                            '<img src='+ picture + '>'+
                        '</div>' +
                        '<div class="name">' +
                          '<p id="fullName">' + firstName + ' ' + lastName +'</p>' +
                          '<p id="user_name">' + '@' + userName + '</p>' +
                        '</div>' +
                        '<div class="invisible">' +
                          '<p id="street">'+ location +'</p>' +
                          '<p id="mail">'+ email +'</p>' +
                          '<p id="phone">'+ cell +'</p>'
                        '</div>'+
                      '</div>';

  $('#demo01').append(templateList);

  // $("#location").append(location);
  // $("#email").append(email);
  // $("#cell").append(cell);


  // $(".card").click(function(){
  //   console.log($(this).index());
  //   // $(this).slideUp(function(){
  //   //   console.log("holaa");
  //   // });
  //   if(this){
  //     // $(this).hide();
  //     var photo = $("img").attr("src", picture)
  //
  //     $("fullPicture").append(photo);
  //     $(".no").append(firstName + " " + lastName);
  //     $(".user").append("@" + userName);
  //
  //   }


    // $(this).click(function(){
    //   console.log("seleccionado")
    // });
  // });

}






$(document).ready(loadPage);
