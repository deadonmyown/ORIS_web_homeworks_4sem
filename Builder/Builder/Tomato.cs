using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class Tomato : Ingredient
    {
        public Tomato(int price) 
        {
            Price = price;
            Name = "Tomato";
        }
    }
}
