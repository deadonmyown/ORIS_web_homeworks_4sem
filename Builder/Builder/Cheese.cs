using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class Cheese : Ingredient
    {
        public Cheese(int price) 
        {
            Price = price;
            Name = "Cheese";
        }
    }
}
