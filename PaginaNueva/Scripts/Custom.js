// A $( document ).ready() block.
$(document).ready(function () {
   
    function Cargar() {
        $.ajax({
            url: 'Persona/_list',
            type: 'GET',
            success: function (data) {
                //console.log(data);
                //alert(data);
                $(".content-div").html(data);
            }
        });
    };

    $(".btn btn-warning").click(function () {
        $("#Create-Person-Container").css("display", "Block");
        $(".create-persona").css("display", "none");
        $("#form-create-id").removeClass("disabled");
    });

  
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
    /******AJAX CREAR POST******/
    // Evento que envía una petición Ajax al servidor
    $('.ajaxForm-Post').click(function (e) {

        var data = {
            Nombre: $('#Nombre').val(),
            Appaterno: $('#Appaterno').val(),
            Apmaterno: $('#Apmaterno').val(),
            Nacionalidad: $('#Nacionalidad').val(),
            Foto: $('#Foto').val()
        };

        $.ajax({
            type: "POST",
            url: "Persona/Create",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (d) {          
                console.log('Has introducido una nueva persona!!');
                $('#form-create-id').css("display", "none");
                $('.ajaxForm-Post').addClass("disabled");
                $('.modal-title').css("display", "none");
                $('.create-persona').css("display", "block");
                Cargar();
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Error!!');
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
    ////AJAX ELIINAR POST
    
    /*$('.btn-eliminar-confirm').click(function () {
        console.log("condirmar eliminar");
    });*/
    $('.btn-eliminar-confirm').click(function () {
        var idDeleteConfirm = $(this).attr("data-id");
        var data = {
            Id: idDeleteConfirm,
        };

        $.ajax({
            type: "POST",
            url: "Persona/Delete",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (d) {
                console.log('Has eliminado a la pessona persona!!');
                $('.dalete-persona').css("display", "block");
                $('.body-eliminar-confirm').css("display", "none");
                $('.btn-eliminar-confirm').addClass("disabled");
                $('.modal-title').css("display", "none");
                Cargar();
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Error!!');
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
    /******AJAX EDITAR POST******/
    // Evento que envía una petición Ajax al servidor
    $('.edit-post').click(function (e) {
        var data = {
            PersonaId: $('#PersonaId').val(),
            Nombre: $('#Nombre').val(),
            Appaterno: $('#Appaterno').val(),
            Apmaterno: $('#Apmaterno').val(),
            Nacionalidad: $('#Nacionalidad').val(),
            Foto: $("#Foto").val(),
        };

        $.ajax({
            type: "POST",
            url: "Persona/Edit",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (d) {
                console.log('Has editado una persona!!');
                $('.form-horizontal').css("display", "none");
                $('.modal-title').css("display", "none");
                $('.edit-persona').css("display", "block");
                $('.edit-post').addClass("disabled");
                Cargar();
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Error!!');
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
});