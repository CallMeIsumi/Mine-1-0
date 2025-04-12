import { use } from "react";
import Card from "./Card";

function Main2() {
    return (
        <>
            <div className="flex flex-wrap w-full min-h-screen bg-white justify-center relative">
                <div className="absolute fixed pt-40">
                <div className="absolute z-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply blur-xl opacity-70 animate-bounce">
                </div>
                <div className="absolute z-10 -right-34 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply blur-xl opacity-70 animate-bounce">
                </div>
                <div className="absolute z-10 -left-80 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply blur-xl opacity-70 animate-bounce">
                </div>
                </div>
                
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </>
    )
}

export default Main2