/*
 * @Description: Powered By Fantastic Artwork Vue.js @ Evan You.
 * @Purpose: Purpose
 * @Version: 2.6.1
 * @Author: PONY ZHANG
 * @Date: 2021-01-10 23:13:38
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2021-01-10 23:17:43
 * @motto: 「あなたに逢えなくなって、錆びた時計と泣いたけど…」
 * @topic: # Carry Your World #
 */
let startingPoint
const header = document.querySelector('header')

header.addEventListener('mouseenter', (e) => {
  startingPoint = e.clientX
  header.classList.add('moving')
})

header.addEventListener('mouseout', (e) => {
  header.classList.remove('moving')
  header.style.setProperty('--percentage', 0.5)
})

header.addEventListener('mousemove', (e) => {
  let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5
  
  header.style.setProperty('--percentage', percentage)
})