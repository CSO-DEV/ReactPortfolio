/**
 * @function scrollTo Permet de lancer un déplacement type scroll vers l'id désigné
 * @var offset Calcul la distance entre le haut de la page et l'id désigné
 */
const scrollTo =(id)=>{
    console.log(id)
    let topPos = document.getElementById(id).offsetTop;
    window.onscroll = function (e){
      window.scrollTo({
       top: topPos,
       behavior: 'smooth'
      })
    }
}
export default scrollTo;