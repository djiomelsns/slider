let img_slider =document.getElementById("imgg");



class App{
    constructor(){
        this.slide =[];
        this.slide[0] ="cheese.png";
        this.slide[1] ="tacos.png";
        this.slide[2] ="pizza.jfif";

        this.i =0;
        this.slider();
        setInterval(()=>{
            this.slider();
        },1000);
    }
    slider(){
        if(this.i< this.slide.length-1){
            this.i++;
        }
        else{
            this.i =0;
        }
        img_slider.src = this.slide[this.i];
    }
}
onload = new App ;