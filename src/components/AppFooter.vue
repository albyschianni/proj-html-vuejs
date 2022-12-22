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
    <section>

    </section>
    <section id="lower-footer">
        <div class="container">
            <div class="text-low-foot">
                Enjoy the low price. We are tracking any intention of piracy.
            </div>
            <div class="text-low-foot">
                2020 NEXGEN is Proudly Powered by <a id="link-foot" href="">Codings</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
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
