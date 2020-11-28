/**
 * @function scrollTo Permet de lancer un déplacement type scroll vers l'id désigné
 * @var offset Calcul la distance entre le haut de la page et l'id désigné
 */
const scrollTo =(id)=>{
    let topPos = document.getElementById(id).offsetTop;
    window.scrollTo({
       top: topPos,
       behavior: 'smooth',
       webkitOverflowScrolling: "touch",
      })
}
export default scrollTo;