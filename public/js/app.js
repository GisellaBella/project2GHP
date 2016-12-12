// CLIENT-SIDE JS
$(document).ready(function() {

// javascript for the data collector widget
$(function() {
  $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });
  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });
  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});
// ______________________

var map;
var request;
function initialize(){
  var center= new google.maps.("location");
  map = new google.maps.Map(document.getElementById('map-result'), {
    center: center;
    zoom: 13
  });
}





});