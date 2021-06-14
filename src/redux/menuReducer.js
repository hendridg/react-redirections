export const handleMenu = () => {
  return {
    type: "HANDLE_MENU",
  }
}

export default function menuReducer(state = { toogleMenu: false }, action) {
  switch (action.type) {
    case "HANDLE_MENU":
      return {
        toogleMenu: !state.toogleMenu,
      }
    default:
      return state
  }
}
