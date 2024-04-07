namespace Domain
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public int Price { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public int Depth { get; set; }
        public int Weight { get; set; }
        public int Quantity { get; set; }
        public int Rating { get; set; }
        public string Color { get; set; }
        public string Shipping { get; set; }
        public DateTime Date { get; set; }
    }
}