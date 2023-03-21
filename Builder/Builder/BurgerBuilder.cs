using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder
{
    public class BurgerBuilder : Builder
    {
        private readonly Burger _burger = new Burger();

        public override void AddBun() => _burger.Add(new Bun(20));

        public override void AddCabbage() => _burger.Add(new Cabbage(10));

        public override void AddCheese() => _burger.Add(new Cheese(12));

        public override void AddCutlet() => _burger.Add(new Cutlet(22));

        public override void AddTomato() => _burger.Add(new Tomato(10));

        public override Burger Build() => _burger.Build();
    }

    public abstract class Builder
    {
        public abstract void AddBun();
        public abstract void AddCutlet();
        public abstract void AddCheese();
        public abstract void AddTomato();
        public abstract void AddCabbage();
        public abstract Burger Build();
    }
}
