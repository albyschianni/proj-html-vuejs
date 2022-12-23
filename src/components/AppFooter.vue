<script >
export default{
    name:"AppFooter",
    data() {
        return {

        }
    }
}
</script>

<template>
    <!-- SEZIONE GET IN TOUCH (SINISTRA) -->
    <section class="footer-main">
        <div class="container-up">
            <div class="get-touch">
                <span>SEND A MESSAGE</span>
                <div class="h2-touch">Get in Touch</div>
                <p>We will respond to your message as soon as possible.</p>
                
                <div class="input-val">
                    <input class="design-input" type="text" placeholder="Name">
                    <input class="design-input" type="email" placeholder="Email">
                    <input class="design-input" type="number" placeholder="Phone">
                    <select class="design-input" name="More Info" id="More Info" placeholder="More Info" style="color:#6b6b6b">
                        <option value="" disabled selected>More info</option>
                        <option value="">A</option>
                        <option value="">B</option>
                    </select>
                    <textarea class="message" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>

                <input id="send" type="submit" value="SEND" >
            </div>

    <!-- SEZIONE CONTATTI AZIENDA (DESTRA) -->
            <div class="info-industry">
                <div class="agency-name">
                    Example Inc.
                </div>
                <p id="lorem-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Pariatur ducimus consequatur voluptas illum ullam laborum possimus.</p>
                
                <div id="contact">
                    <div style="color: #098080;" class="item-contact">
                        <font-awesome-icon icon="fa-solid fa-phone" /> +1 (305) 1234-5678
                    </div>
                    <div style="color: #098080;" class="item-contact">
                        <font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com
                    </div>
                    <div style="color: #098080;" class="item-contact">
                        <font-awesome-icon icon="fa-solid fa-location-dot" /> Main Avenue, 987
                    </div>
                </div>
                <a id="map" href="">VIEW MAP</a>
            </div>
         </div>
    </section>
   <!-- BOTTOM BAR & COPYRIGHT -->
    <section id="lower-footer">
        <div class="container-low">
            <div class="text-low-foot">
                Enjoy the low price. We are tracking any intention of piracy.
            </div>
            <div class="text-low-foot">
                <font-awesome-icon icon="fa-regular fa-copyright" /> 2020 NEXGEN is Proudly Powered by <a id="link-foot" href="">Codings</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

.footer-main {
    background-color: #ffffff;
}
.container-up {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
}
.get-touch {
    width: 60%;
}
.info-industry {
    width: 30%;
    padding-right: 40px;
}
.input-val {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.design-input {
    width: 49%;
    padding: 15px;
    height: 50px;
    border: none;
    border-radius: 4px;
    background-color: #ececec;
    margin-bottom: 10px;
}
.message {
 width: 100%;
 height: 150px;
 background-color: #ececec;
 border: none;
 border-radius: 4px;
 padding: 15px;
 margin-bottom: 30px;
 
}
#send {
    background-color: #098080;
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    border-radius: 3px;
    border: none;
}
span {
    color: #098080;
    font-size: 14px;
}
.h2-touch {
    font-size: 40px;
    color: #21333e;
    font-weight: bold;
    margin: 20px 0px;
}
p {
    font-size: 15px;
    color: #756d75;
    margin-bottom: 40px;
}
#map {
    text-decoration: none;
    color: #098080;
    border: 1px solid #098080;
    padding: 10px 15px;
    border-radius: 3px;
}
.agency-name{
    color: #21333e;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
}
#lorem-up {
    margin-bottom: 20px;
}
#contact {
    margin-bottom: 30px;
}
.fa-phone, .fa-envelope, .fa-location-dot{
    background-color: #daeced;
    padding: 7px;
    border-radius: 50%;
    margin-right: 10px;
}
.item-contact {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

}

// seconda sezione
.container-low {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    max-width: 1170px;
    margin: 0 auto;
}
#lower-footer {
    background-color: #28363c;
    min-height: 50px;
    color: #c0c3d0;
}
#link-foot {
    color: #098080;
    font-size: 14px;
}
.text-low-foot {
    font-size: 14px;
}
</style>
