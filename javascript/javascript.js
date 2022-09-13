$(document).ready(function(){
    $("#list-show-click").click(function(){
        $("#hidden-list").toggle(300);
        $("#hidden-list-two").css('display', 'none');
    });
});

$("#list-show-click").click(function() {
    $(this).find('img').toggle();
});

$(document).ready(function(){
    $("#hide-list").click(function(){
        $("#hidden-list-two").toggle(300);
        $("#hidden-list").css('display', 'none');
    });
});

$("#hide-list").click(function() {
    $(this).find('img').toggle();
});

// Notification animation on click //

$('#approved-button-animation').on('click', function(e) {
    $('#Proposal-approved-demo').toggleClass(".proposal-animation");
    $('#Proposal-approved-demo').show();
    setTimeout(function() {$("#Proposal-approved-demo").hide(); }, 4000);
  });

  $('#declined-button-animation').on('click', function(e) {
      $('#Proposal-declined-demo').toggleClass(".proposal-animation");
      $('#Proposal-declined-demo').show();
      setTimeout(function() {$("#Proposal-declined-demo").hide(); }, 4000);
    });

    $('#Pending-button-animation').on('click', function(e) {
        $('#Proposal-pending-demo').toggleClass(".proposal-animation");
        $('#Proposal-pending-demo').show();
        setTimeout(function() {$("#Proposal-pending-demo").hide(); }, 4000);
      });


// Hamburger navigation animation //
	$('#nav-menu-1').click(function(){
		$(this).toggleClass('open');
	});

  $("#nav-menu-1").click(function() {
      $(this).find('p').toggle();
  });
  
  function openTab(id, evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"+id);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks"+id+"-active");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = "tablinks"+id;
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "-active";
}

// When the user clicks on the button, scroll to the top of the document
/*function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/

$(document).ready(function(){
    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });

});