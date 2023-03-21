using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class Burger : Ingredient
    {
        private List<Ingredient> _parts = new List<Ingredient>();

        public void Add(Ingredient part)
        {
            _parts.Add(part);
            Price += part.Price;
        }

        public string Log()
        {
            (int bunCount, int cutletCount) ingCount = _parts.Where(i => (i is Bun) || (i is Cutlet)).Aggregate((0,0), (a,i) => i is Bun ? (a.Item1 + 1, a.Item2) : (a.Item1, a.Item2 + 1));

            Console.WriteLine(ingCount);
            return (ingCount.bunCount == 2) && (ingCount.cutletCount > 0) ? $"it's a burger and it costs {Price}" : $"it's not a burger but it costs {Price}";
        }

        public Burger Build() => this;
    }
}
