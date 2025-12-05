// const vids = ['v1', 'v2', 'v3'];
// let i = 0;
// function playNext() {
//   vids.forEach(id => document.getElementById(id).style.opacity = 0);
//   const v = document.getElementById(vids[i]);
//   v.style.opacity = 1;
//   v.play();
//   i = (i + 1) % vids.length;
//   v.onended = playNext;
// }
// playNext();
// 
// ******************marquee***************** //
document.querySelectorAll(".marquee").forEach((marquee) => {
  const root = document.documentElement;
  const displayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const content = marquee.querySelector(".marquee-content");

  root.style.setProperty("--marquee-elements", content.children.length);

  for (let i = 0; i < displayed; i++) {
    content.appendChild(content.children[i].cloneNode(true));
  }
});
//************* */
