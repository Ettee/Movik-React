import React, { Component } from 'react'

export default class Chat extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        //Kommunicate Chat Bot
        (function(d, m){
            var kommunicateSettings = {"appId":"3530e9564de8c37785473ad17a350753d","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
