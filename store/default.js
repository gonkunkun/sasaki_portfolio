export const state = () => ({
    title: 'Home page sample',
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
    right: true,
    rightDrawer: false
})

// 同期処理
export const mutations = {
    tglClipped(state) {
      state.clipped = !state.clipped
    },
    tglDrawer(state) {
      state.drawer = !state.drawer
    },
    tglFixed(state) {
      console.log(state.fixed);
      state.fixed = !state.fixed
      console.log(state.fixed);
    },
    tglMiniVariant(state) {
      state.miniVariant = !state.miniVariant
    },
    tglRight(state) {
      state.right = !state.right
    },
    tglRightDrawer(state) {
      state.rightDrawer = !state.rightDrawer
    }
}

// 非同期処理
export const actions = {
}