 namespace PaginaNueva.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class index2 : DbMigration
    {
        public override void Up()
        {
            
        }
        
        public override void Down()
        {
            DropIndex("dbo.Personas", "Nacimiento_Appaterno");
        }
    }
}
