using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class Cutlet : Ingredient
    {
        public Cutlet(int price)
        {
            Price = price;
            Name = "Cutlet";
        }
    }
}
