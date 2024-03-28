import React, { useState, useContext, useEffect, createContext } from 'react';
import runChat from "../config/GeminiAI";
export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentprompt] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const onSent = async (prompt) => {
       setResultData("");
       setLoading(true);
       setShowResult(true);
       setRecentprompt(input);
       const delayPara=(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        }, 75*index)
    }
       let response=null;
       try{
        response= await runChat(input);
        if(response){
            setLoading(false)
       }
       }
       catch(err){
        console.log(err);
       }

       finally{
        setLoading(false)
       }
       let newResponse = response.replace(/\*/g, " ");
       let nextResponse=newResponse.split(" ");
       for (let i = 0; i < nextResponse.length; i++) {
        const nextWord = nextResponse[i];
        if (typeof nextWord !== 'undefined'){
            delayPara(i, nextWord + " ");
        } else {
            console.error("Unexpected situation: nextWord is undefined at index", i);
            break;
        }
    }
    
        
       
       
       
   }
    useEffect(() => {
       
    }, []);
    const sent=()=>{
       setInput("");
          onSent();

    }
    
    const contextValue = {
        sent,
        setRecentprompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
