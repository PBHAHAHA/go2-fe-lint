module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
      'body-leading-blank': [1, 'always'],
      'body-max-line-length': [2, 'always', 100],
      'footer-leading-blank': [1, 'always'],
      'footer-max-line-length': [2, 'always', 100],
      'header-max-length': [2, 'always', 100],
      'scope-case': [2, 'always', 'lower-case'],
      'subject-case': [0],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
    },
    messages: {
      // 自定义错误提示信息
      'type-enum': '提交类型必须为feat(新功能)、fix(bug修复)、docs(文档变更)、style(样式)、test(测试)、refactor(重构)、chore(杂项)或revert(还原)',
    }
  };