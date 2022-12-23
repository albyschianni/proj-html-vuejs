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
            <!-- SUDDIVISIONE SEZIONE PARTE ALTA -->
            <div class="mezzi-trasp-up">
                <div id="info-trasp">
                    <span>WHAT WE DO</span>
                    <h2>WE OFFER A FULL RANGE OF DELIVERY METHODS.</h2>
                </div>
                <div id="fast-ship">
                    <div class="container-icon"> 
                        <font-awesome-icon icon="fa-solid fa-truck-fast" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div class="ship-type">
                        Shipping Fast
                    </div>
                    <p class="ship-desc">Special fast delivery service that guarantees the arrival of the object on the same day as postage. Included monitoring via mobile app.</p>
                    
                </div>
            </div>
            <!-- SUDDIVISIONE SEZIONE PARTE BASSA -->
            <div class="mezzi-trasp-down">
                <div class="mezzi-trasp">
                    <div class="container-icon"> 
                        <font-awesome-icon icon="fa-solid fa-motorcycle" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div class="ship-type">
                        Motoboy
                    </div>
                    <p class="ship-desc">Functional motoboy for delivery of documents and small objects.</p>
                   
                </div>
                <div class="mezzi-trasp">
                    <div class="container-icon"> 
                        <font-awesome-icon icon="fa-solid fa-van-shuttle" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div class="ship-type">
                        Shuttle Van
                    </div>
                    <p class="ship-desc">Suitable for medium sixed loads that need digital tracking.</p>
                    
                </div>
                <div class="mezzi-trasp">
                    <div class="container-icon"> 
                        <font-awesome-icon icon="fa-solid fa-truck-moving" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </div>
                    <div class="ship-type">
                        Mini Truck
                    </div>
                    <p class="ship-desc">For dry cargo deliveries with more cubic allocation.</p>
                    
                </div>
            </div>
        </div>
    </section>
 <!-- SECONDA SEZIONE WHO WE ARE -->
    <section class="who-are">
        <div class="who-are-text">
            <span>WHO WE ARE</span>
            <h2 id="industry-Lead">Industry Leaders.</h2>
            <p class="p-2">With all of this expertise and capability comes an unrevalled commitment to costumer service.</p>
            <p class="p-2" id="p-to-btn">We will work hard to understand your needs in order to develop a productive, long-term partnership.</p>
            <a class="btn-read" href="">READ MORE</a>
        </div>
    </section>
    <!-- TERZA SEZIONE MONTHLY PLAN -->
    <section  class="monthly-plan">
        <div class="container">
            <span id="span-price">MONTHLY PLANS</span>
            <h4 id="h2-price">Pricing Table</h4>
            <div class="p-div">We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.</div>
            <!-- DIVISIONE ABBONAMENTI -->
            <div class="container-box">
                <div class="standard">
                    <div style="display: flex; justify-content:center"><div><font-awesome-icon icon="fa-solid fa-rocket" /></div></div>
                    <div class="plan-text" style="text-align:center">Standard</div>
                    <div style="display: flex; justify-content: center; margin-bottom: 15px;" >
                        <div style="font-size: 22px; color:#098080; margin-top: 8px;">$ </div>
                        <div style="font-size: 32px; color:#098080"> 490</div>
                        <div style="font-size: 22px; color:#098080; margin-top: 8px;"> /mo</div>
                    </div>
                    <div>
                        <ul style="list-style: none; color: #756d75; ">
                            <div style="display: flex; justify-content:space-between"> 
                                <li>National Coverage </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div> 
                            <div style="display: flex; justify-content:space-between">
                                <li>Unlimited Motoboy </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Address Collection </li>
                                <div><font-awesome-icon icon="fa-solid fa-xmark" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Mobile App Tracking </li>
                                <div><font-awesome-icon icon="fa-solid fa-xmark" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Cargo Insurance </li>
                                <div><font-awesome-icon icon="fa-solid fa-xmark" /></div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="professional">
                    <div class="label">Most Popular</div>
                    <div style="display: flex; justify-content:center"><div><font-awesome-icon icon="fa-solid fa-suitcase" /></div></div>
                    <div class="plan-text" style="text-align:center">Professional</div>
                    <div style="display: flex; justify-content: center; margin-bottom: 15px;">
                        <div style="font-size: 22px; color:#098080; margin-top: 8px;">$ </div>
                        <div style="font-size: 32px; color:#098080"> 890</div>
                        <div style="font-size: 22px; color:#098080; margin-top: 8px;"> /mo</div>
                    </div>
                    <div>
                        <ul style="list-style: none; color: #756d75; ">
                            <div style="display: flex; justify-content:space-between"> 
                                <li>National Coverage </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div> 
                            <div style="display: flex; justify-content:space-between">
                                <li>Unlimited Motoboy </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Address Collection </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Mobile App Tracking </li>
                                <div><font-awesome-icon icon="fa-solid fa-xmark" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Cargo Insurance </li>
                                <div><font-awesome-icon icon="fa-solid fa-xmark" /></div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="ultimate">
                    <div style="display: flex; justify-content:center"><div><font-awesome-icon icon="fa-regular fa-gem" /></div></div>
                    <div class="plan-text" style="text-align:center">Ultimate</div>
                    <div style="display: flex; justify-content: center; margin-bottom: 15px;">
                        <div style="font-size: 22px; color:#098080; margin-top: 8px;">$ </div>
                        <div style="font-size: 32px; color:#098080"> 1390</div>
                        <div style="font-size: 22px; color:#098080; margin-top: 8px;"> /mo</div>
                    </div>
                    <div>
                        <ul style="list-style: none; color: #756d75; ">
                            <div style="display: flex; justify-content:space-between"> 
                                <li>National Coverage </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div> 
                            <div style="display: flex; justify-content:space-between">
                                <li>Unlimited Motoboy </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Address Collection </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Mobile App Tracking </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                            <div style="display: flex; justify-content:space-between">
                                <li>Cargo Insurance </li>
                                <div><font-awesome-icon icon="fa-solid fa-check" /></div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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
    width: 66%;
    padding: 30px;
    border-radius: 10px;
    margin-left: 10px;
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
    padding: 30px;
    border-radius: 10px;
}
.container-icon {
    display: flex;
    justify-content: space-between;
}
.ship-type {
    color: white;
    font-size: 30px;
    margin-bottom: 15px;
    margin-top: 20px;
}
.ship-desc {
    color: #c0c3d0;
    font-size: 17px;
}
.fa-truck-fast, .fa-motorcycle, .fa-van-shuttle, .fa-truck-moving {
    font-size: 40px;
    color: #098080;
}
.fa-arrow-right {
    font-size: 20px;
    color: #098080;
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
.p-2 {
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
// terza sezione ||||||
.monthly-plan {
    background-color: #eef4ed;
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    #span-price {
        width: 100%;
        text-align: center;
    }

    #h2-price{
        font-size: 40px;
        color: #0f1217;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }
    .p-div {
        color: #756d75;
        width: 100%;
        text-align: center;
        padding: 0% 25%;
        margin-bottom: 40px;
        margin-top: 20px;
    
    }
}
.container-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.standard {
    width: 30%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    max-height: 360px;
}
.professional {
    width: 32%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    min-height: 400px;
    position: relative;
}
.label {
    position: absolute;
    left: 0;
    top: 10;
    width: 75px;
    background-color: #098080;
    font-size: 14px;
    font-weight: bold;
    color: white;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 0px 8px 8px 0px;
}
.ultimate {
    width: 30%;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    max-height: 360px;
}

.fa-rocket, .fa-suitcase, .fa-gem {
    color: #098080;
    font-size: 40px;
    text-align: center;
}
.fa-check, .fa-xmark {
    // margin-left: 145px;
    color: #098080;
}
.plan-text {
    font-size: 25px;
    color: #0f1217;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
}
li {
    margin-bottom: 10px;
}
// quarta sezione ||||||
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
