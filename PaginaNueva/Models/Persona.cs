using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PaginaNueva.Models
{
    public class Persona
    {
        [Index]
        [Required(ErrorMessage ="El campo {0} es requerido")]
        public int PersonaId { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name ="Apellido Paterno")]
        public string Appaterno { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [Display(Name = "Apellido Materno")]
        public string Apmaterno { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Nacionalidad { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        public string Foto { get; set; }
    }
}