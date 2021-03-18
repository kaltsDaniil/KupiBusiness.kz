const App = {
    data() {
        return{
            items:[1,2,3,4,5],
            item1:1,
            item2:2,
            item3:3,
            item4:4,
            item5:5,
            isActive:false,
            startActive:true,
            twoactive:false,
            threeactive:false,
            fouractive:false,
            five:false,
            inp:'',
            comment:'',
            cm:[],
            count:1500,
            ys:false,
            more:false,
            morevalue:'Смотреть все',
            reducevalue:'Свернуть',
            counter:0
        }
    },
    methods: {
        right(){
            if (this.counter > 6) {
                this.counter = -1
            }
            this.counter+=1
            console.log(this.counter)
            
        },
        left(){
            if (this.counter < 1) {
                this.counter = 8
            }
            this.counter-=1
            console.log(this.counter)
        },
        addFn(){
            this.more = true
            console.log(this.more)
        },
        reduceFn(){
            this.more = false
            console.log(this.more)
        },
        yes(){
            this.ys = true
            count+=1
            this.ys = false
        },
        no(){

        },
        inpFn(event){
            this.inp = event.target.value
        },
        search(){
            this.inp = ''
            alert('Извините,но у нас нет таких услуг')
        },
        entFn(){
            this.inp = ''
            alert('Извините,но у нас нет таких услуг')
        },
        minus(){
            if (this.item1>=5) {
                this.item1-=4
                this.item2-=4
                this.item3-=4
                this.item4-=4
                this.item5-=4
                this.startActive = true
                this.isActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }else if(this.item1>1 && this.item1<5){
                this.item1-=1
                this.item2-=1
                this.item3-=1
                this.item4-=1
                this.item5-=1
                this.startActive = true
                this.isActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }else if(this.item1>0 && this.item1<5){
                this.startActive = true
                this.isActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }
        },
        plus(){
            if (this.item5<20) {
                this.item1+=4
                this.item2+=4
                this.item3+=4
                this.item4+=4
                this.item5+=4
                this.isActive = true
                this.startActive = false
                this.threeactive = false
                this.five = false
                this.fouractive = false
                this.twoactive = false
            }else if(this.item5<22){
                this.item1+=3
                this.item2+=3
                this.item3+=3
                this.item4+=3
                this.item5+=3
                this.isActive = true
                this.startActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }else if(this.item5<21){
                this.item1+=4
                this.item2+=4
                this.item3+=4
                this.item4+=4
                this.item5+=4
                this.isActive = true
                this.startActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }
            else if(this.item5<23){
                this.item1+=2
                this.item2+=2
                this.item3+=2
                this.item4+=2
                this.item5+=2
                this.isActive = true
                this.startActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }else if(this.item5<24){
                this.item1+=1
                this.item2+=1
                this.item3+=1
                this.item4+=1
                this.item5+=1
                this.isActive = true
                this.startActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }else if(this.item5<25){
                this.isActive = true
                this.startActive = false
                this.threeactive = false
                this.fouractive = false
                this.five = false
                this.twoactive = false
            }
        },
        two(){
            this.isActive = false
            this.startActive = false
            this.twoactive = true
            this.threeactive = false
            this.fouractive = false
            this.five = false
            if (this.item1>1) {
                this.item1-=1
                this.item2-=1
                this.item3-=1
                this.item4-=1
                this.item5-=1
            }if (this.item1===1) {
                this.item1+=1
                this.item2+=1
                this.item3+=1
                this.item4+=1
                this.item5+=1
            }
        },
        three(){
            this.isActive = false
            this.startActive = false
            this.twoactive = false
            this.threeactive = true
            this.fouractive = false
            this.five = false
        },
        four(){
            this.isActive = false
            this.startActive = false
            this.twoactive = false
            this.threeactive = false
            this.fouractive = true
            this.five = false
            if (this.item5<24) {
                this.item1+=1
                this.item2+=1
                this.item3+=1
                this.item4+=1
                this.item5+=1
            }
        },
        end(){
            this.five = true
            this.startActive = false
            this.threeactive = false
            this.fouractive = false
            this.twoactive = false
            this.isActive = false
        },
        commentFn(event){
            this.comment = event.target.value
        },
        pusher(){
            this.cm.push(this.comment)
            this.comment = ''
        }
    }
}
const app = Vue.createApp(App).mount('#app')