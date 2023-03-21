using Builder;

var builder = new BurgerBuilder();
builder.AddBun();
builder.AddCutlet();
builder.AddCheese();
var burger = builder.Build();
Console.WriteLine(burger.Log());

var builder2 = new BurgerBuilder();
builder2.AddBun();
builder2.AddBun();
builder2.AddCutlet();
var burger2 = builder2.Build();
Console.WriteLine(burger2.Log());
