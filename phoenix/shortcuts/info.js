// Phoenix - shortcuts - info
setKeyHandler('i', HYPER, () => {
  const windows = Space.active().windows()

  windows.forEach(window => {
    if (!window.isVisible() || !window.title()) return

    modalWindow({}, window)
  })
})
