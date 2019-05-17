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
                //$(".content-div").html(data);
                $(".content-div").replaceWith(data);
            }
        });
    };
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
            success: function (response) {
                if (response = "True") {
                    console.log('Has eliminado al usuario!!');
                    $('.alerts-ajax').removeClass("hidden");
                    $('.alerts-ajax').removeClass("alert-success");
                    $('.alerts-ajax').removeClass("alert-warning");
                    $('.alerts-ajax').addClass("alert-danger");
                    $('.alerts-ajax h4').text("Usuario Eliminado !!");
                    $('.modal-backdrop.fade.in').css("display", "none");
                    Cargar();
                }
                else {
                    console.log('Error al aliminar usuario!!');
                    $('.alerts-ajax').removeClass("hidden");
                    $('.alerts-ajax').removeClass("alert-success");
                    $('.alerts-ajax').removeClass("alert-warning");
                    $('.alerts-ajax').addClass("alert-danger");
                    $('.alerts-ajax h4').text("Error al aliminar usuario !!");
                    $('.modal-backdrop.fade.in').css("display", "none");
                    Cargar();
                }
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
            //Foto: $('#Foto').val()
            Foto : $('#Foto')[0].files[0].name,
        };

        $.ajax({
            type: "POST",
            url: "Persona/_Create",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (response) {
                
                if (response == "True") {
                    console.log('Has introducido una nueva usuario!!');
                    $('.alerts-ajax').removeClass("hidden");
                    $('.alerts-ajax').removeClass("alert-danger");
                    $('.alerts-ajax').removeClass("alert-warning");
                    $('.alerts-ajax').addClass("alert-success");
                    $('.alerts-ajax h4').text("Usuario Agregado !!");
                    $('.modal-backdrop.fade.in').css("display", "none");
                    Cargar();
                }
                else {
                    console.log('Error al agregar usuario!!');
                    $('.alerts-ajax').removeClass("hidden");
                    $('.alerts-ajax').removeClass("alert-success");
                    $('.alerts-ajax').removeClass("alert-warning");
                    $('.alerts-ajax').addClass("alert-danger");
                    $('.alerts-ajax h4').text("Error al agregar usuario !!");
                    $('.modal-backdrop.fade.in').css("display", "none");
                    Cargar();
                }
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
            //Foto: $('#Foto').val()
            Foto: $('#Foto')[0].files[0].name,
        };

        $.ajax({
            type: "POST",
            url: "Persona/_Edit",
            content: "application/json; charset=utf-8",
            dataType: "json",
            data: data,
            success: function (response) {
                if (response = "True") {
                    console.log('Has editado una persona!!');
                    $('.alerts-ajax').removeClass("hidden");
                    $('.alerts-ajax').removeClass("alert-danger");
                    $('.alerts-ajax').removeClass("alert-warning");
                    $('.alerts-ajax').addClass("alert-warning");
                    $('.alerts-ajax h4').text("Usuario Editado !!");
                    $('.modal-backdrop.fade.in').css("display", "none");
                    Cargar();
                }
                else {
                    console.log('Error al editar usuario!!');
                    $('.alerts-ajax').removeClass("hidden");
                    $('.alerts-ajax').removeClass("alert-success");
                    $('.alerts-ajax').removeClass("alert-warning");
                    $('.alerts-ajax').addClass("alert-danger");
                    $('.alerts-ajax h4').text("Error al editar usuario!!");
                    $('.modal-backdrop.fade.in').css("display", "none");
                    Cargar();
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Error!!');
            }
        });

    });
});

/*$('#uploadFile').click(function (e) {
    var selectFile = $("#Foto")[0].files[0].name;
    var selectFilePath = $("#Foto").val();
    var data = {
        FileName: selectFile,
        Path: selectFilePath,
    }
    //var selectFile2 = $("#Foto")[0].files[0];
    //var dataString = new FormData();
    //dataString.append("fileUpload", selectFile2);
    //console.log(dataString);
    $.ajax({
        type: "POST",
        url: "Persona/LoadFile",
        content: "application/json; charset=utf-8",
        dataType: false,
        data: data,
        success: function (d) {

            console.log('Archivo cargado!!');
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('Error!!');
        }
    });
});*/