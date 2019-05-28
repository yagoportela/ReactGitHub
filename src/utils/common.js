/**
 * Ajax
 * Return JSON
 */

const common ={ 

    ajaxRquest: (url, callback = () => {}, callbackError = () => {} ) => {
        console.log(url);
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
    }
};

export default common;