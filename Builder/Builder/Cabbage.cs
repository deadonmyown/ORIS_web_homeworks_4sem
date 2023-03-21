using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class Cabbage : Ingredient
    {
        public Cabbage(int price)
        {
            Price = price;
            Name = "Cabbage";
        }
    }
}
