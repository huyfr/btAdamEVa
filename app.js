const DEFAULT_WEIGHT_APPLE=10;

let Apple=function()
{
    this.weight=DEFAULT_WEIGHT_APPLE;
    this.getWeight=function ()
    {
        return this.weight;
    };

    this.decrease=function ()
    {
        if (this.weight>0)
        {
            this.weight=this.weight-1;
        }
    };

    this.isEmpty=function ()
    {
        if (this.weight===0)
        {
            return true;
        }
        else
        {
            if (this.weight>0)
            {
                return false;
            }
        }
    };
};

let Human=function (name, gender, weight)
{
    this.name=name;
    this.gender=gender;
    this.weight=weight;

    this.getName=function ()
    {
        return this.name;
    };
    this.setName=function (name)
    {
        this.name=name;
    };

    this.getWeight=function ()
    {
        return  this.weight;
    };
    this.setWeight=function (weight)
    {
        this.weight=weight;
    };

    this.isMale=function ()
    {
        if (this.gender)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.setGender=function (gender)
    {
        this.gender=gender;
    };

    this.checkApple=function (Apple)
    {
        if (Apple.weight>0)
        {
            return true;
        }
    };

    this.eat=function (Apple)
    {
        if (Apple.isEmpty())
        {
            alert("Out of stock!");
        }
        else
        {
            Apple.decrease();
            this.weight=this.weight+1;
        }
    };

    this.say=function (content)
    {
        console.log(content);
    }
};

let apple=new Apple();
console.log(apple);
let adam=new Human("Adam",true,86);
console.log(adam);
let eva=new Human("Eva",false,60);
console.log(eva);

function evaEat()
{
    eva.eat(apple);
    console.log(apple.getWeight());
    console.log(eva.getWeight());
    eva.say("hello");
}

function adamEat()
{
    adam.eat(apple);
    console.log(apple.getWeight());
    console.log(adam.getWeight());
    adam.say("xin chao");
}