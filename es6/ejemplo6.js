function f(){
    {
        let x;
        {
            const x = 'sneaky';

            x = 'foo';
        }

        x = 'bar';

        let x = 'inner';
    }
    
}
f();