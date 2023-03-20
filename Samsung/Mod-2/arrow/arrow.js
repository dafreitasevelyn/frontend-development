function suma(x,y) 
        {
            return x+y;
        }
        
        function sumaLenta(x,y)
        {
            this.a=x;
            this.b=y;
            setTimeout(()=>
            {
                console.log(suma(this.a,this.b));
            },1000)
        }
            sumaLenta(1,4);