using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PaginaNueva.Models;
using System.IO;
using System.Web.Configuration;

namespace PaginaNueva.Controllers
{
    public class PersonaController : Controller
    {

        private PaginaNuevaContext db = new PaginaNuevaContext();

        public async Task<ActionResult> _List()
        {
            
            return PartialView("_List", await db.Personas.ToListAsync());
        }

        // GET: Persona
        public async Task<ActionResult> Index()
        {
            return View(await db.Personas.ToListAsync());
        }

        // GET: Persona/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Persona persona = await db.Personas.FindAsync(id);
            if (persona == null)
            {
                return HttpNotFound();
            }
            return View(persona);
        }

        // GET: Persona/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Persona/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        /*[HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "PersonaId,Nombre,Appaterno,Apmaterno,Nacionalidad,Foto")] Persona persona)
        {
            if (ModelState.IsValid)
            {
                db.Personas.Add(persona);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(persona);
        }*/

        [HttpPost]

        // El Json recibido será serializado automáticamente al objeto nuevo cocche teniendo en cuenta que las propiedades han de tener el mismo nombre
        public  JsonResult Create(Persona persona)
        {
            if (ModelState.IsValid)
            {
                db.Personas.Add(persona);
                db.SaveChanges();
                return Json("'Success':'true'");
            }
            else
            {
                return Json(String.Format("'Success':'false','Error':'Ha habido un error al insertar el registro.'"));
            }
               
        }

        // GET: Persona/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Persona persona = await db.Personas.FindAsync(id);
            if (persona == null)
            {
                return HttpNotFound();
            }
            return View(persona);
        }

        // POST: Persona/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que desea enlazarse. Para obtener 
        // más información vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public JsonResult Edit(Persona persona)
        {
            if (ModelState.IsValid)
            {
                db.Entry(persona).State = EntityState.Modified;
                db.SaveChanges();
                return Json("'Success':'true'");
            }
            else
            {
                return Json(String.Format("'Success':'false','Error':'Ha habido un error al insertar el registro.'"));
            }

        }

        // GET: Persona/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Persona persona = await db.Personas.FindAsync(id);
            if (persona == null)
            {
                return HttpNotFound();
            }
            return View(persona);
        }
       
        // POST: Persona/Delete/5
        // El Json recibido será serializado automáticamente al objeto nuevo cocche teniendo en cuenta que las propiedades han de tener el mismo nombre
        [HttpPost, ActionName("Delete")]
        public JsonResult DeleteConfirmed(int id)
        {
            if (ModelState.IsValid)
            {
                Persona persona =  db.Personas.Find(id);
                db.Personas.Remove(persona);
                db.SaveChangesAsync();
                return Json("'Success':'true'");
            }
            else
            {
                return Json(String.Format("'Success':'false','Error':'Ha habido un error al insertar el registro.'"));
            }

        }
        // GET: Persona/Upload/file
        [HttpPost]
        public ActionResult LoadFile(HttpPostedFileBase fileUpload)
        {
            try
            {
                string path = Server.MapPath("~/Content/img/personas/");
                if (Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                fileUpload.SaveAs(path = Path.GetFileName(fileUpload.FileName));
            }
            catch (Exception e)
            {
                return Json(new { Value = false, Message = e.Message }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { Value = true, Message = "Subido con éxito" }, JsonRequestBehavior.AllowGet);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

    }
}
