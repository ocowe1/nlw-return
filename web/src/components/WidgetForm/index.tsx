import { CloseButton } from "../CloseButton";
import BugImageUrl from '../../assets/bug.svg';
import IdeaImageUrl from '../../assets/idea.svg';
import ThoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image:{
            source: BugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image:{
            source: IdeaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        image:{
            source: ThoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : ( 
                <FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackTypeChangedRequested={handleRestartFeedback}
                />
            )}

            <footer>
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://ocowe.dev">ocowe</a>
            </footer>
        </div>
    )
}