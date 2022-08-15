export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = window.location.origin + "/lpi-www/" + scriptToAppend;
    //alert(script.src)
    script.async = false;
    document.body.appendChild(script);
}