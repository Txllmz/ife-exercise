function draw_line(data){
var can=document.getElementById('mycan');
can.width=900;
can.height=400;
//can.style.border = "1px solid black";
var axis_h=560;
var axis_w=750;
var diameter=5;
var linecolor='blue';
var stroke_w=2;

// 拿到折线图中的最大值Max
var max=data[0];
for(var i=1;i<data.length;i++)
{
  if(max<data[i])
  {
      max=data[i];
  }
  else{
      max=max;
  }
}
//根据Max和你用来绘制折线图图像区域的高度，进行一个数据和像素的折算比例
var ratio=max/500;
//绘制横轴及纵轴
var ctx=can.getContext("2d");
ctx.beginPath();
ctx.moveTo(30,30);
ctx.lineTo(30,360);
ctx.lineTo(800,360);
ctx.stroke();

//数据点的坐标位置
var x=30;
var y=0;
var clonex;
var cloney;

for(var j=0;j<data.length;j++)
{
    x+=60;
    y=ratio*data[j];
    ctx.beginPath();
    ctx.arc(x,y,diameter/2,0,2*Math.PI);
    ctx.stroke();
    if(j!=0)
    {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(clonex,cloney);
        ctx.stroke();
    }
    clonex=x;
    cloney=y;
}

}