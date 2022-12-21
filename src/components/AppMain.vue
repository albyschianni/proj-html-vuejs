<script >
export default{
    name:"AppMain",
    data(){
        return{

        }
    }
}
</script>

<template>
    <!-- PRIMA SEZIONE WHAT WE DO -->
    <section class="what-do">
        <div class="container">
            <div class="mezzi-trasp-up">
                <div id="info-trasp">
                    <span>WHAT WE DO</span>
                    <h2>WE OFFER A FULL RANGE OF DELIVERY METHODS.</h2>
                </div>
                <div id="fast-ship">
                    shipping fast
                </div>
            </div>
            <div class="mezzi-trasp-down">
                <div class="mezzi-trasp">
                    motoboy
                </div>
                <div class="mezzi-trasp">
                    shuttle van
                </div>
                <div class="mezzi-trasp">
                    mini truck
                </div>
            </div>
        </div>
    </section>
 <!-- SECONDA SEZIONE WHO WE ARE -->
    <section class="who-are">
        <div class="who-are-text">
            <span>WHO WE ARE</span>
            <h2 id="industry-Lead">Industry Leaders.</h2>
            <p>With all of this expertise and capability comes an unrevalled commitment to costumer service.</p>
            <p id="p-to-btn">We will work hard to understand your needs in order to develop a productive, long-term partnership.</p>
            <a class="btn-read" href="">READ MORE</a>
        </div>
    </section>
    <!-- TERZA SEZIONE MONTHLY PLAN -->
    <section>

    </section>
    <!-- QUARTA SEZIONE CHOOSE US -->
    <section class="choose-us">
        <div class="container">
            <div class="choose-text">
                <h3 id="h2-us">Why choose us?</h3>
                <div class="us-parag">We work intensivly in search of ideals that can add in the lives of our customers. That is what motivates us to improve every day.</div>
                <a class="btn-touch" href="">GET IN TOUCH</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.what-do {
    background-color: #0f1217;
}
.container {
    padding-top: 100px;
    padding-bottom: 100px;
}
span {
    color: #098080;
    font-size: 14px;
}
h2 {
    color: white;
    font-size: 33px;
    margin-top: 10px;
    padding-right: 162px;
    margin-bottom: 20px;
}
#info-trasp {
    width: calc(100% / 3);
}
#fast-ship {
    background-color: #19191f;
    margin-bottom: 20px;
}
.mezzi-trasp-up {
    display: flex;
}
.mezzi-trasp-down {
    display: flex;
    justify-content: space-between;
    
}
.mezzi-trasp {
    width: calc((100% / 3) - 15px);
    background-color: #19191f;
    border-radius: 3px;
}

// seconda sezione

.who-are {
    background-image: url(../assets/img/bg-62.jpg);
    background-size: cover;
    min-height: 900px;
    position: relative;
}
.who-are-text {
    width: 40%;
    position: absolute;
    right: 0;
    top: 320px;
}
#industry-Lead {
    font-size: 60px;
    font-weight: bold;
    padding-right: 400px;
    color: #21333e;
}
p {
    padding-right: 340px;
    color: #756d75;
    font-size: 20px;
    margin-bottom: 20px;
}
#p-to-btn {
    margin-bottom: 40px;
}
.btn-read {
    text-decoration: none;
    color: white;
    background-color: #098080;
    padding: 10px 15px;
    border-radius: 3px;
    
}
// terza sezione

// quarta sezione 
.choose-us {
    background-image: url(../assets/img/bg-72.jpg);
    background-size: cover;
    min-height: 900px;
}
.choose-text {
    margin: auto;
    width: 65%;
    margin-top: 250px;

}
.btn-touch {
    text-decoration: none;
    color: white;
    background-color: #098080;
    padding: 10px 15px;
    border-radius: 3px;
    margin-left: 310px;
}
h3 {
    text-align: center;
    font-size: 60px;
    color: white;
    margin-bottom: 15px;
}
.us-parag {
    color: #c0c3d0;
    padding: 0px 110px;
    text-align: center;
    font-size: 18px;
    margin-bottom: 50px;
}
</style>
