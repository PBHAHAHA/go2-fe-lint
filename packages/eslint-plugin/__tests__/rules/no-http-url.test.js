/**
 * 测试用例，
 */
const rule = require('../../rules/no-http-url')
const {RuleTester} = require('eslint')

const ruleTester = new RuleTester()

ruleTester.run('no-http-url', rule, {
    valid: [
        {
            code: "var str = 'https://go2.com'",
        }
    ],
    invalid: [
        {
            code: "var test = 'http://go2.com';",
            output: "var test = 'http://go2.com';",
            errors: [{
                message: '建议 "http://go2.com" 切换为 HTTPS'
            }]
        },{
            code: "<img src='http://go2.com' />",
            output: "<img src='http://go2.com' />",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            errors: [
                {
                    message: '建议 "http://go2.com" 切换为 HTTPS',
                },
            ],
        }
    ]
})