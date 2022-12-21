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
 <section>
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
</template>

<style lang="scss" scoped>

section {
    background-color: #0f1217;
}
.container {
    padding-top: 100px;
}
span {
    color: #098080;
}
h2 {
    color: white;
    font-size: 35px;
    margin-top: 10px;
}
#info-trasp {
    width: calc(100% / 3);
}
#fast-ship {
    
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
    background-color: #28363c;
    border-radius: 3px;
}

</style>
