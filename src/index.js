import vueSvelteMixin from './js/vue-svelte-mixin.js'

var a = `
vamos {{{ver}}} se
{{text}}?
<h1>Oi</h1>
<ul>
    {{#each tests as test}}
        <li>
            {{test.name.deeper}}
        </li>
    {{/each}}
</ul>
`;


// window.a = document.querySelector('#app-template').innerHTML;
var parsed = svelte.parse(a)

// console.log(parsed.html.children[0])

new Vue({
    mixins: [vueSvelteMixin],
    el: '.app',
    template: a,
    data () {
        return {
            ver: 'ver',
            text: 'funciona',
            tests: [
                {
                    name: {
                        deeper: 1
                    }
                },
                {
                    name: {
                        deeper: 2
                    }
                },
                {
                    name: {
                        deeper: 3
                    }
                }
            ]
        }
    },
    render (createElement) {
        let elementWrap = this.convertToSvelte(createElement);

        // parsed.html.children[0]
        console.log('[elementArray]', elementWrap)

        return elementWrap
    }
})

