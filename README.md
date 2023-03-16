# tarp
A small (751b) JS canvas wrapper for interval, that makes animations easy.
[Live Example](https://replit.com/@bryku/tarp-3#index.html)

```
let example1 = tarp('#canvas');
    example1.render = (can, ctx)=>{
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.fill();
    }
```
