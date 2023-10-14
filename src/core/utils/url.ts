export const openExternalLink = (url: string) => {
  try {
    window.open(url)
  } catch {
    window.location.href = url
  }

  // if (window.opener == null) {
  //   window.location.href = url
  // } else {
  //   window.open(url)
  // }
}
