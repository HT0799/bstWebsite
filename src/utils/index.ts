/**
 * 滚动页面到顶部
 * @param {boolean} [instant=true] - 是否使用即时滚动，默认为即时
 */
export const scrollToTop = (instant = true) => {
  window.scrollTo({
    top: 0,
    behavior: instant ? 'instant' : 'smooth'
  });
}; 