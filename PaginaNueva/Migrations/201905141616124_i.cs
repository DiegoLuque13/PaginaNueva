namespace PaginaNueva.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class i : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Personas", "Nacimiento_Appaterno");
        }
        
        public override void Down()
        {
            CreateIndex("dbo.Personas", new[] { "Nombre", "Appaterno" }, name: "Nacimiento_Appaterno");
        }
    }
}
