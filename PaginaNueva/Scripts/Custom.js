// A $( document ).ready() block.
$(document).ready(function () {
    //  RECARGAR LIST
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
            url: "Persona/_Delete",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (d) {
                console.log('Has eliminado a la pessona persona!!');
                $('.modal-backdrop.fade.in').css("display", "none");
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
            url: "Persona/_Create",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (d) {
                console.log('Has introducido una nueva persona!!');
                $('.modal-backdrop.fade.in').css("display", "none");
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
                $('.modal-backdrop.fade.in').css("display", "none");
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
    /******AJAX CREAR******/
    $("#Create-persona-modal").click(function () {
        $.ajax({
            url: 'Persona/_Create',
            type: 'GET',
            success: function (data) {
                //alert(data);
                $("#Create-Person-Container").html(data);
                //$(".edit-person-container").load(data);
            }
        });
    });

    /******AJAX ELIMINAR******/
    $(".delete-modal").click(function () {
        var idDelete = $(this).attr("data-id");
        $.ajax({
            url: 'Persona/_Delete/' + idDelete,
            type: 'GET',
            success: function (data) {
                //alert(data);
                $("#Delete-Person-Container").html(data);
                //$(".edit-person-container").load(data);
            }
        });
    });
    /******AJAX DETALLE******/
    $(".detail-persona-modal").click(function () {
        var id = $(this).attr("data-id");
        //console.log(id);
        //console.log(id);
        $.ajax({
            url: 'Persona/_Details/' + id,
            type: 'POST',
            success: function (data) {
                //alert(data);
                $("#detail-person-container").html(data);
                //$(".edit-person-container").load(data);
            }
        });
    });

    /******AJAX EDITAR******/
    $(".Edit-persona-modal").click(function () {
        var idEdit = $(this).attr("data-id");
        $.ajax({
            url: 'Persona/_Edit/' + idEdit,
            type: 'GET',
            success: function (data) {
                //alert(data);
                $("#edit-Person-Container").html(data);
                //$(".edit-person-container").load(data);
            }
        });
    });

});