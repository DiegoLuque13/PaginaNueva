namespace PaginaNueva.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Personas",
                c => new
                    {
                        PersonaId = c.Int(nullable: false, identity: true),
                        Nombre = c.String(),
                        Appaterno = c.String(),
                        Apmaterno = c.String(),
                        Nacionalidad = c.String(),
                        Foto = c.String(),
                    })
                .PrimaryKey(t => t.PersonaId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Personas");
        }
    }
}
