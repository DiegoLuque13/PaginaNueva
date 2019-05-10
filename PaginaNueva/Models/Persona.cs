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
        [Required]
        public int PersonaId { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Appaterno { get; set; }
        [Required]
        public string Apmaterno { get; set; }
        [Required]
        public string Nacionalidad { get; set; }
        [Required]
        public string Foto { get; set; }
    }
}