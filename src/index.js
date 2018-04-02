import vueSvelteMixin from './js/vue-svelte-mixin.js'

var a = `
vamos {{{ver}}} se
{{text}}?
<h1 class="test oie" style="background: magenta; display: block;" aria-hidden="true" checkbox>Oi</h1>
{{#if flag > 10 || flag == 10}}
<h1 on:click="something()">Oi2</h1>
{{/if}}
<ul>
    {{#each tests as test}}
        <li>
            {{{test.name.deeper}}}
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
            flag: 10,
            ver: 'ver',
            text: 'funciona',
            tests: [
                {
                    name: {
                        deeper: '<b>1</b>'
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

