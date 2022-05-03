import { ArrowLeft } from "phosphor-react";
import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps{
    feedbackType: FeedbackType;
    onFeedbackTypeChangedRequested: () => void;
}

export function FeedbackContentStep( { feedbackType, onFeedbackTypeChangedRequested } : FeedbackContentStepProps){
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
        <header>
            <button className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" type="button" onClick={onFeedbackTypeChangedRequested}>
                <ArrowLeft />
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img alt={feedbackTypeInfo.image.alt} src={feedbackTypeInfo.image.source} className="w-6 h-6"/>
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>

        <form className="my-4 w-full">
            <textarea 
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-tracker-transparent scrollbar-thin"
                placeholder="Conte com detalhes o que está acontecendo..."
            />
            
        </form>
    </>         
    )
}