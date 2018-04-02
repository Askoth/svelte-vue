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
            result = html.children.reduce((prev, child) => {
                let nodes = this.createNodesFromSvelteObject(h, child, this);

                if (nodes instanceof Array) {
                    prev.push(...nodes);
                } else {
                    prev.push(nodes);
                }

                return prev

            }, []);

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
                        return h('span', {
                            domProps: {
                                innerHTML: this.resolveSvelteExpression(child.expression, store)
                            }
                        });
                    break;
                    case ('MustacheTag'):
                        return this._v(this.resolveSvelteExpression(child.expression, store));
                    break;
                    case ('Text'):
                        return this._v(child.data)
                    break;
                    case ('Element'):

                        let vNodeConfig = this.configVNode(child);

                        return h(child.name, vNodeConfig, child.children.map((child) => {
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
                    break;
                    case ('IfBlock'):
                        let flag = this.resolveSvelteExpression(child.expression, store);
                        if (flag) {
                            return child.children.map((child) => {
                                return s(child, Object.assign({}, store));
                            })
                        } else {
                            return this._v('')
                        }
                    break;
                }
            }
        },
        resolveSvelteExpression (expression, store) {
            let { name, type } = expression,
                eval2 = eval,
                object,
                property,
                left,
                operator,
                right;

            switch (type) {
                case ('Identifier'):
                    return store[name]
                break;
                case ('Literal'):
                    return expression.value
                break;
                case ('MemberExpression'):
                    object = this.resolveSvelteExpression(expression.object, store);
                    property = this.resolveSvelteExpression(expression.property, object);
                    return property
                break;
                case ('BinaryExpression'):
                    left = this.resolveSvelteExpression(expression.left, store);
                    operator = expression.operator;
                    right = this.resolveSvelteExpression(expression.right, store);

                    // rollup has problems with direct use of eval
                    return eval2(`${left} ${operator} ${right}`)
                break;
                case ('LogicalExpression'):

                    left = this.resolveSvelteExpression(expression.left, store);
                    operator = expression.operator;
                    right = this.resolveSvelteExpression(expression.right, store);

                    // rollup has problems with direct use of eval
                    return eval2(`${left} ${operator} ${right}`)
                break;
                default:
                    throw new Error (`I don't know this one! ${JSON.stringify(expression)}`);
                break;
            }
        },
        configVNode (child) {

            let { attributes } = child,
                result = {};

            attributes.forEach((attribute) => {

                const { type, name, value } = attribute;

                function setProp (prop) {
                    result[prop] = result[prop] || {};

                    return result[prop]
                }

                switch (type) {
                    case ('Attribute'):
                        let prop, newValue;

                        newValue = value instanceof Array ? value[0].data : value;

                        if (name == 'class') {
                            setProp('class');
                            result['class'] = newValue.split(' ').reduce((prev, className) => {
                                if (className.trim().length > 0) {
                                    prev[className] = true;
                                }

                                return prev
                            }, {});
                        } else if (name == 'style') {
                            setProp('style');
                            result['style'] = newValue;
                        } else {
                            setProp('attrs')[name] = newValue;
                        }
                    break;

                    default:
                        throw new Error (`I don't know this attribute! ${JSON.stringify(child)}`);
                    break;
                }

            });

            console.log(child);

            return result
        }
    }
};

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
var parsed = svelte.parse(a);

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
        console.log('[elementArray]', elementWrap);

        return elementWrap
    }
});

}());
