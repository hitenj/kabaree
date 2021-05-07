var config = {
    apiKey: "AIzaSyBPsfbA7M0fxbgtk0LCmhmpWKTCPi4K3QA",
    authDomain: "kabaree-71e88.firebaseapp.com",
    databaseURL: "https://kabaree-71e88-default-rtdb.firebaseio.com",
    projectId: "kabaree-71e88",
    storageBucket: "kabaree-71e88.appspot.com",
    messagingSenderId: "621150954368",
    appId: "1:621150954368:web:0cd63675c97274838f5765"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('MessagesfromWebsite');

  $('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
  });

  messagesRef.once('value').then((snapshot) => {
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Subject: ${snapshot.val()[key].subject}`);
        console.log(`Message: ${snapshot.val()[key].message}`);
    });
  });


  var bookingRef = firebase.database().ref('BookingfromWebsite');

  $('#bookingForm').submit(function(e) {
    e.preventDefault();
 
    var newBookingRef = bookingRef.push();
    newBookingRef.set({
        name: $('.name').val(),
        email: $('.emailadd').val(),
        phone: $('.phone').val(),
        address: $('.address').val(),
        scrap: $('.scrap').val(),
        donate: $('input:radio[name=donate]').val()    

    });
 
    $('.success-booking').show();
 
    $('#bookingForm')[0].reset();
  });

  bookingRef.once('value').then((snapshot) => {
    Object.keys(snapshot.val()).forEach((key) => {
        console.log(`Name: ${snapshot.val()[key].name}`);
        console.log(`Email: ${snapshot.val()[key].email}`);
        console.log(`Phone: ${snapshot.val()[key].phone}`);
        console.log(`Address: ${snapshot.val()[key].address}`);
        console.log(`Scrap: ${snapshot.val()[key].scrap}`);
     
    });
  });
  $(document).ready(function(){
    $(".btn-get-started").click(function(){
        alert("Android Application is in Production. Will be available soon!!");
            });
  });
