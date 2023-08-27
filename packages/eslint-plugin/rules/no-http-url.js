// 建议 将HTTP转为HTTPS连接
const RULE_NAME = 'no-http-url'

module.exports = {
    name: RULE_NAME,
    meta: {
        type: "suggestion",
        fixable: null,
        messages: {
            noHttpUrl: '建议 "{{url}}" 切换为 HTTPS'
        }
    },
    create(context){
        return {
            Literal: function handleRequires(node) {
                if(node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0){
                    context.report({
                        node,
                        messageId: 'noHttpUrl',
                        data: {
                            url: node.value
                        }
                    })
                }
            }
        }
    }
}