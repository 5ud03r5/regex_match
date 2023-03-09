export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("caretpos", {
    updated(el, binding) {},
    /* getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    }, */
  });
});
