
/*for(var i=10 ; i > 0 ; i--){//10到1

console.log(i);

}*/


/*for(var i=1 ; i<=10; i++){//1到 10
    console.log(i);
}*/


/*
var ssc='溜溜你你在在娜娜玉玉兰兰为为哎哎';    //输出偶数字符下标
 for ( var i = 0 ; i < ssc.length ; i+=2){
     console.log(ssc[i])
 }*/


/*for( var i=1; i<10 ;i++ ){                           //99乘法口诀
    for (var j=1; j<10 ; j++ ){
        console.log(`${i}x${j} = ${i*j}`) ;
    }
}*/

/*var n = 1;
while (n <= 10) {
  console.log(n);
  n += 1;
}
*/

/*
const ltx = `永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰，修禊事也。群贤毕至，少长咸集。
此地有崇山峻岭，茂林修竹；又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。
是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。
夫人之相与，俯仰一世，或取诸怀抱，晤言一室之内；或因寄所托，放浪形骸之外。
虽取舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至。及其所之既倦，情随事迁，感慨系之矣。
向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀。况修短随化，终期于尽。古人云：“死生亦大矣。
”岂不痛哉！每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。
后之视今，亦犹今之视昔。悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。`;

var count = 0 ;
var index = 0 ;
while(index !== -1){
  index = ltx.indexOf('之',index);         //搜索  ‘之’ 在文章里出现了多少次
  if(index !== -1){
    count++;
    index += 1;
  }
}
console.log(count)
*/





/* 遍历数组 

var ls=['是','不','是','你','在','门','口']

for( var i=0; i<ls.length; i++ ){
    console.log(ls[i])  
} 

ls.forEach(function(xs,l){
    console.log(`${xs},,,${l+1}`);
});


for(let xx of ls){
    console.log(`${xx}`);   



 var sg= ['刘备','关羽','张飞']

sg.splice(3,0,'诸葛亮','赵云','马超')  

sg.splice(1,2,)


    

function sx(year) {
    var nooster = '2';
    var sxs=['1','2','3','4','5','6','7','8','9','10','11','12'];
    return sxs[((year - 2017)%12+sxs.indexOf(nooster)+12 )%12 ];
}


console.log(sx(2017))

 */








 