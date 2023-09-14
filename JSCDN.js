$(document).ready(function() {
    $('#sum').click(function() {
        var bla = $('#txt_name1').val();
        var blb = $('#txt_name2').val();
        var result = parseInt(bla) + parseInt(blb);
        alert("The sum is: " + result);
    });
    $('#into').click(function() {
        var bla = $('#txt_name1').val();
        var blb = $('#txt_name2').val();
        var result = parseInt(bla) * parseInt(blb);
        alert("The multiply is: " + result);
    });
    $('#minus').click(function() {
        var bla = $('#txt_name1').val();
        var blb = $('#txt_name2').val();
        var result = parseInt(bla) - parseInt(blb);
        alert("The minus is: " + result);
    });
});