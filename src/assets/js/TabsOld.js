// class Tabs {
//   constructor({
//     parentClass,
//     $tabs,
//     tabs,
//     activeClass,
//     targetClass,
//     targetActiveClass
//   }) {
//     this.$parent = $(`.${parentClass}`)
//     this.$tabs = $tabs ? $tabs : $(`.${tabs}`, this.$parent)
//     this.$target = $(`.${targetClass}`, this.$parent)
//     this.activeClass = activeClass ? activeClass : `${tabs}--active`
//     this.showClass = `${targetClass}--show`
//     this.$targetActiveClass = targetActiveClass
//       ? $(`.${targetActiveClass}`, this.$parent)
//       : this.$tabs
//   }

//   init() {
//     const { $tabs, $target, activeClass, showClass, $targetActiveClass } = this

//     $tabs.click(function() {
//       const $self = $(this)
//       const target = $self.data('target')

//       if (!$self.hasClass(activeClass)) {
//         $targetActiveClass.filter(`.${activeClass}`).removeClass(activeClass)

//         $targetActiveClass
//           .filter(`[data-target="${target}"]`)
//           .addClass(activeClass)

//         $target.filter(`.${showClass}`).removeClass(showClass)

//         $target.filter(`[data-target="${target}"]`).addClass(showClass)
//       }
//     })
//   }
// }

class Tabs {
  constructor({
    parentClass,
    tabs,
    tabsClass,
    activeClass,
    targetClass,
    targetActiveClass
  }) {
    this.parent = document.querySelector(`.${parentClass}`)
    this.tabs = tabs ? tabs : this.parent.querySelector(`.${tabsClass}`)
    this.target = this.parent.querySelector(`.${targetClass}`)
    this.activeClass = activeClass ? activeClass : `${tabsClass}--active`
    this.showClass = `${targetClass}--show`
    this.targetActiveClass = targetActiveClass
      ? this.parent.querySelector(`.${targetActiveClass}`)
      : this.tabs
  }

  init() {
    const { parent, tabs, target, activeClass, showClass, targetActiveClass } = this

    tabs.addEventListener('click', function() {
      const target = this.dataset.target

      if (!this.classList.contains(activeClass)) {

        const 

        parent.querySelector(`.${activeClass}`).classList.remove(activeClass)

        parent
          .querySelector(`[data-target="${target}"]`)
          .classList.add(activeClass)

        target.querySelector(`.${showClass}`).classList.add(activeClass)
      }
    })
    
    .click(function() {
      const $self = $(this)
      const target = $self.data('target')

      if (!$self.hasClass(activeClass)) {
        $targetActiveClass.filter(`.${activeClass}`).removeClass(activeClass)

        $targetActiveClass
          .filter(`[data-target="${target}"]`)
          .addClass(activeClass)

        $target.filter(`.${showClass}`).removeClass(showClass)

        $target.filter(`[data-target="${target}"]`).addClass(showClass)
      }
    })
  }
}

export default Tabs
