module.exports = function flat (flat) {
  let roots = []
  let all = {}
  flat.forEach(item => (all[item.id] = item))
  Object.keys(all).forEach(id => {
    let item = all[id]
    if (item.parent_id === null || item.parent_id === 0) {
      roots.push(item)
    } else if (item.parent_id in all) {
      let p = all[item.parent_id]
      if (!('children' in p)) {
        p.children = []
      }
      p.children.push(item)
    }
  })
  return roots
}
