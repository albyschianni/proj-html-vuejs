<script >
export default{
    name:"Appheader",
    data(){
        return{

        }
    }
}
</script>

<template>
    <!-- SEZIONE NAVBAR & MENU INFO TOP -->
    <section>
        <div class="container">
            <div class="upper-info">
                <div class="info-container">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-clock" />  Open Hours Mon - Sat - 9:00 - 18:00
                    </div>
                    <div class="contact-info">
                        <div><font-awesome-icon icon="fa-solid fa-phone" /> +1(305)1234-5678 </div>
                        <div class="space"><font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com</div>
                        <div class="space"><font-awesome-icon icon="fa-brands fa-facebook" /></div>
                        <div class="space"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
                        <div class="space"><font-awesome-icon icon="fa-brands fa-linkedin" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- SEZIONE INTRO / JUMBO  -->
    <section class="cane">
        <div class="container">
            <nav>
                <div class="navbar">
                    <div>
                        <img id="logo-img" src="../assets/img/logo.svg" alt="">
                    </div>
                    <div class="space-nav">
                        <div class="font-color">HOME</div>
                        <div class="font-color">SERVICES</div>
                        <div class="font-color">ABOUT</div>
                        <div class="font-color">PRICING</div>
                        <div><font-awesome-icon icon="fa-regular fa-user" /></div>
                        <a class="btn-touch" href="">GET IN TOUCH</a>
                    </div>
                </div>
            </nav>
            <div class="intro">
                <div class="slogan">
                    <span>EXPRESS DELIVERY</span>
                   <h1>WHAT ARE WE GOING TO DELIVER TODAY?</h1> 
                </div>
                <div>
                    <a class="btn-touch" href="">GET IN TOUCH</a>
                    <a class="btn-read spacebtn" href="">READ MORE</a>
                </div>
            </div>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

section {
    background-color: #28363c;
    min-height: 50px;
}
#logo-img {
    width: 125px;
}
.info-container {
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    min-height: 50px;
}
.contact-info {
    display: flex;
    justify-content: space-around;
    width: 40%;
}
.space {
    margin-left: 12px;
}
.navbar {
    display: flex;
    justify-content: space-between;
    min-height: 100px;
    align-items: center;
}
.space-nav {
    display: flex;
    min-width: 40%;
    justify-content: space-between;
    align-items: center;
}
.btn-touch {
    text-decoration: none;
    color: white;
    background-color: #098080;
    padding: 10px 15px;
    border-radius: 3px;
}
.btn-read {
    text-decoration: none;
    color: #098080;
    border: 1px solid #098080;
    padding: 10px 15px;
    border-radius: 3px;
}
.spacebtn{
    margin-left: 25px;
}
.font-color {
    color: #696b6C;
}
.cane {
    background-image: url(../assets/img/bg-13.jpg);
    min-height: 700px;
    background-size: cover;
}
.slogan {
    width: 55%;
    margin-top: 150px;
    margin-bottom: 50px;
}
h1 {
    font-size: 60px;
}
</style>
