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
  var firtsName = contact.name.first;
  var lastName = contact.name.last;
  var userName = contact.login.username;
  var picture = contact.picture.large;
  var location = contact.location.street;
  var email = contact.email;
  var cell = contact.cell;

  var templateList =  '<div class="col-6 card">' +
                        '<div>' +
                          '<a href="detailContact.html">' +
                            '<img src='+ picture + '>'
                          +'</a>' +
                        '</div>' +
                        '<div class="name">' +
                          '<p>' + firtsName + ' ' + lastName +'</p>' +
                          '<p>' + '@' + userName + '</p>' +
                        '</div>' +
                      '</div>';

  $('#here').append(templateList);


  var templateContact = '<div class="row">'+
                          '<div class="col-12">' +
                           '<div>' +
                            '<img class="fullPicture" src='+ picture + '>' +
                           '</div>' +
                           '<div class="bigName">' +
                             '<p>' + firtsName + ' ' + lastName +'</p>' +
                             '<p>' + '@' + userName + '</p>' +
                           '</div>' +
                          '</div>'+
                        '</div>' +

                        '<div class="row">'+
                          '<div class="col-12">'+
                            '<div class="info">'+
                              location +
                            '</div>'+
                            '<div class="info">' +
                              email +
                            '</div>' +
                            '<div class="info">' +
                              cell +
                            '</div>' +
                          '</div>'+
                        '</div>'

  $("#detail").append(templateContact);
}



$(document).ready(loadPage);
