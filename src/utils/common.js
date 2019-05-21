/**
 * Ajax
 * Return JSON
 */

(function ajax(url, callback = () => {}, callbackError = () => {} ){
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
            callback(result)
        },
        (error) => {
            callbackError(error);
        }
        
    )
    console.log("teste");
})();