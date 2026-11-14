export default {
  extends: ['stylelint-config-recommended-scss'],
  rules: {
    // Contrato de arquitectura SCSS del proyecto
    'max-nesting-depth': 3,
    'selector-max-id': 1,
    'selector-max-compound-selectors': 5,
    'scss/at-extend-no-missing-placeholder': true,

    // El proyecto usa nombres BEM con camelCase heredado
    'selector-class-pattern': null,
  },
  ignoreFiles: ['css/**/*.css', '_site/**/*'],
};
