using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class Bun : Ingredient
    {
        public Bun(int price)
        {
            Price = price;
            Name = "Bun";
        }
    }
}
