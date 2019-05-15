namespace PaginaNueva.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Index : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Personas", "PersonaId");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Personas", new[] { "PersonaId" });
        }
    }
}
