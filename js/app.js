var api ={
  url: "https://randomuser.me/api/?results=50"
}

var loadPage = function(){
  loadUser();
}

var loadUser = function(){
  $.getJSON(api.url, function(response){
    var results = response.results;
    results.forEach(contactList);
  });
}

var contactList = function(contact){
  var firtsName = contact.name,first;
  var userName = contact.login.username;
  var picture = contact.picture.large;
  var location = contact.location.street;
  var email = contact.email;
  var cell = contact.cell;

  var template = '<div class="row">'+ '<div class="col-6 card">' +
                 '<div>' + '<img src='+ picture + '>' + '</div>' +
                 '</div>'+ '<div class="col-6 card">' + '<div>' +
                 '<img src='+ picture + '>' + '</div>' + '</div>'+ '</div>'

  $('#here').append(template);
}


$(document).ready(loadPage);
