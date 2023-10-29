
$('.mainDiv').click(function(ev) { 
    // ev.stopPropagation();
    var id = $(this).attr('id');
    console.log("id",id);
    $('#'+id+'').attr('contenteditable',"true")
    $('#'+id+'').focus()
    // ev.stopPropagation();
});