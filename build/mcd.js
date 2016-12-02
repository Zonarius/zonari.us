Vue.component('mcimg', {
    props: ['link'],
    template: '<div class="mc-img-container" :style="{ backgroundImage: \'url(\' + link + \')\' }"></div>'
})

var app = new Vue({
    el: '#app',
    data: {
        images: _.range(1, 25)
            .map(it => it < 10 ? "0" + it : "" + it)
            .map(it => "https://my.mcdonalds.at/images/doors/tuer_" + it + "_137.png")
    }
});