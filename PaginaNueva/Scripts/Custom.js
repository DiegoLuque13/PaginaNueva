// A $( document ).ready() block.
$(document).ready(function () {
    /******AJAX CREAR******/
    $("#Create-persona-modal").click(function () {
        $.ajax({
            url: 'Persona/Create',
            type: 'GET',
            success: function (data) {
                //alert(data);
                $("#Create-Person-Container").html(data);
                //$(".edit-person-container").load(data);
                $("#Create-Person-Container").modal('show');
            }
        });
    });
    /******AJAX ELIMINAR******/
    $(".delete-modal").click(function () {
        var idDelete = $(this).attr("data-id");
        $.ajax({
            url: 'Persona/Delete/' + idDelete,
            type: 'GET',
            success: function (data) {
                //alert(data);
                $("#Delete-Person-Container").html(data);
                //$(".edit-person-container").load(data);
                $("#Delete-Person-Container").modal('show');
            }
        });
    });
    /******AJAX DETALLE******/
    $(".detail-persona-modal").click(function () {
        var id = $(this).attr("data-id");
        //console.log(id);
        //console.log(id);
        $.ajax({
            url: 'Persona/Details/' + id,
            type: 'POST',
            success: function (data) {
                //alert(data);
                $("#detail-person-container").html(data);
                //$(".edit-person-container").load(data);
                $("#edit-person").modal('show');
            }
        });
    });
    /******AJAX EDITAR******/
    $(".Edit-persona-modal").click(function () {
        var idEdit = $(this).attr("data-id");
        $.ajax({
            url: 'Persona/Edit/' + idEdit,
            type: 'GET',
            success: function (data) {
                //alert(data);
                $("#edit-Person-Container").html(data);
                //$(".edit-person-container").load(data);
                $("#edit-Person-Container").modal('show');
            }
        });
    });
    /*****AGREGAR IMAGEN A MODAL********/
    $(".image-index").click(function () {
        var srcimage = $(this).attr("src");
        //console.log(srcimage);
        var newsrcimage = $(".new-image").attr("src");
        //console.log(newsrcimage);
        $(".new-image").attr("src", srcimage);
        $("#image-containe").modal('show');
        //console.log("click");
    });

    $("#ajaxForm").click(function () {
        console.log("click");
    });



});