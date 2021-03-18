module.exports = function createDreamTeam(members) {
  const firstLetterOfName = []
  if ( Array.isArray(members) === false){
    return false
  }
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] === 'string' && members[i] !== ' '){
      firstLetterOfName.push(members[i].trim().substring(0, 1).toUpperCase())
    }
  }
  return firstLetterOfName.sort().join('')
}