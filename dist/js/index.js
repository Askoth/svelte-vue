(function () {
'use strict';

var vueSvelteMixin = {
    methods: {
        convertToSvelte (h) {
            let result;

            let template = this.$options.template; // make it work with element later || this.$options.el

            // we only need the parsed html which will be a fragment
            let {html} = svelte.parse(template);


            // vue needs a wrapper element, so we will pick only the first one
            result = html.children.map((child) => {
                return this.createNodesFromSvelteObject(h, child, this)
            });

            // types:
            // RawMustacheTag
            // MustacheTag
            // Text
            // Element



            // if (type == 'Text') {
            //     result = this._v(data);
            // } else {
            //     result = this._v("my string value");
            // }

            console.log(result);


            return h('div', result);
        },
        convertSvelteChildren (children) {
            return children.map((child) => {
                return this.convertChild(child)
            })
        },
        convertChild (child) {
            console.log(child);
        },
        createNodesFromSvelteObject (h, child, store) {

            const s = createNodeFromSvelte.bind(this);

            return s(child, store);

            function createNodeFromSvelte (child, store) {
                const {type} = child;

                switch(type) {
                    case ('RawMustacheTag'):
                        return this._v(this.resolveSvelteExpression(child.expression, store));
                    break;
                    case ('MustacheTag'):
                        return this._v(this.resolveSvelteExpression(child.expression, store));
                    break;
                    case ('Text'):
                        return this._v(child.data)
                    break;
                    case ('Element'):
                        return h(child.name, child.children.map((child) => {
                            return s(child, Object.assign({}, store));
                        }))
                    break;
                    case ('EachBlock'):
                        let arr = this[child.expression.name];
                        let ctx = child.context;

                        return arr.reduce((prev, arrData) => {
                            let contextStore = Object.assign({}, store);
                            contextStore[ctx] = arrData;
                            prev.push(child.children.map((loopChild) => {
                                return s(loopChild, contextStore);
                            }));
                            return prev;
                        }, [])
                        // return h(child.name, child.children.map(createNodeFromSvelte.bind(this)))
                    break;
                }
            }
        },
        resolveSvelteExpression (expression, store) {
            let { name, type } = expression;

            switch (type) {
                case ('Identifier'):
                    return store[name]
                break;
                case ('MemberExpression'):
                    const object = this.resolveSvelteExpression(expression.object, store);
                    const property = this.resolveSvelteExpression(expression.property, object);
                    return property
                break;
                default:
                    throw new Error (`I don't know this one! ${JSON.stringify(expression)}`);
                break;
            }
        }
    }
};

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
var parsed = svelte.parse(a);

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
        console.log('[elementArray]', elementWrap);

        return elementWrap
    }
});

}());
