module.exports = {
    defaultSeverity: 'warning',
    plugins: ['stylelint-scss'],
    rules: {
      /**
       * Possible errors
       * @link https://stylelint.io/user-guide/rules/#possible-errors
       */
      'at-rule-no-unknown': null, // 禁止未知规则
      'scss/at-rule-no-unknown': true, // 
      'block-no-empty': null, //禁止空块
      'color-no-invalid-hex': true, // 禁止无效的16进制颜色
      'comment-no-empty': true, // 禁止空注释
      'declaration-block-no-duplicate-properties': [ //禁止在声明块中声明重复属性
        true,
        {
          ignore: ['consecutive-duplicates-with-different-values'],//忽略具有不同值的连续重复属性。
        },
      ],
      'declaration-block-no-shorthand-property-overrides': true,//禁止使用重写相关手写属性的简写属性。
      'font-family-no-duplicate-names': true,// 禁止字体中使用重复的名称
      'function-calc-no-unspaced-operator': true,//禁止在计算函数中使用无效的非间隔运算符。
      'function-linear-gradient-no-nonstandard-direction': true,//禁止线性梯度函数的非标准方向值。
      'keyframe-declaration-no-important': true,
      'media-feature-name-no-unknown': true,
      'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
      'no-duplicate-at-import-rules': true,
      'no-duplicate-selectors': true,
      'no-empty-source': null,
      'no-extra-semicolons': true,
      'no-invalid-double-slash-comments': true,
      'property-no-unknown': true,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global', 'local', 'export'],
        },
      ],
      'selector-pseudo-element-no-unknown': true,
      'string-no-newline': true,
      'unit-no-unknown': [
        true,
        {
          ignoreUnits: ['rpx'],
        },
      ],
  
      /**
       * Stylistic issues
       * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
       */
      indentation: 2,
      'block-closing-brace-newline-before': 'always-multi-line',
      'block-closing-brace-space-before': 'always-single-line',
      'block-opening-brace-newline-after': 'always-multi-line',
      'block-opening-brace-space-before': 'always',
      'block-opening-brace-space-after': 'always-single-line',
      'color-hex-case': 'lower',
      'color-hex-length': 'short',
      'comment-whitespace-inside': 'always',
      'declaration-colon-space-before': 'never',
      'declaration-colon-space-after': 'always',
      'declaration-block-single-line-max-declarations': 1,
      'declaration-block-trailing-semicolon': [
        'always',
        {
          severity: 'error',
        },
      ],
      'length-zero-no-unit': [
        true,
        {
          ignore: ['custom-properties'],
        },
      ],
      'max-line-length': 100,
      'selector-max-id': 0,
      'value-list-comma-space-after': 'always-single-line',
  
      /**
       * stylelint-scss rules
       * @link https://www.npmjs.com/package/stylelint-scss
       */
      'scss/double-slash-comment-whitespace-inside': 'always',
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  };