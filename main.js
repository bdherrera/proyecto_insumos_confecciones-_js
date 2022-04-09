let app = document.getElementById('tyepewritr');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Sede principal')
  .pauseFor(200)
  .deleteChars(10)
  .start();