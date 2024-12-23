/* eslint-disable */
export default {
  beforeMount(el, binding) {
    const handler = (e) => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value(e);
      }
    };

    // const scrollHandler = (e) => {
    //   binding.value(e);
    // };

    if (typeof binding.value === 'function') {
      el.__vueOutsideClick__ = handler;
      // el.__vueOutsideScroll__ = scrollHandler;

      document.addEventListener('click', el.__vueOutsideClick__, { capture: true });
      // window.addEventListener('scroll', el.__vueOutsideScroll__, { capture: true });
    }
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el.__vueOutsideClick__, { capture: true });
    // window.removeEventListener('scroll', el.__vueOutsideScroll__, { capture: true });

    el.__vueOutsideClick__ = null;
    // el.__vueOutsideScroll__ = null;
  },
};
