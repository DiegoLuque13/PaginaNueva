namespace PaginaNueva.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class required : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Personas", "Nombre", c => c.String(nullable: false));
            AlterColumn("dbo.Personas", "Appaterno", c => c.String(nullable: false));
            AlterColumn("dbo.Personas", "Apmaterno", c => c.String(nullable: false));
            AlterColumn("dbo.Personas", "Nacionalidad", c => c.String(nullable: false));
            AlterColumn("dbo.Personas", "Foto", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Personas", "Foto", c => c.String());
            AlterColumn("dbo.Personas", "Nacionalidad", c => c.String());
            AlterColumn("dbo.Personas", "Apmaterno", c => c.String());
            AlterColumn("dbo.Personas", "Appaterno", c => c.String());
            AlterColumn("dbo.Personas", "Nombre", c => c.String());
        }
    }
}
