/**
 * @function spinner : Animation rotation * rotate animation
 */
const spinnerId =(id,timer)=>{
    document.getElementById(id).animate([
        // keyframes
        { transform: 'rotate(0deg)' }, 
        { transform: 'rotate(360deg)' }
      ], { 
        // timing options
        duration: timer,
        iterations: Infinity
      });
}
export default spinnerId;