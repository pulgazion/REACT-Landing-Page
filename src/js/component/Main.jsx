import React from "react";
import { Card } from "./Card.jsx";

const data = [
    {
        imageUrl: "https://images.unsplash.com/photo-1469899324414-c72bfb4d4161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "tenedor"
    },{
        imageUrl: "https://images.unsplash.com/photo-1469899324414-c72bfb4d4161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "perrito"
    },{
        imageUrl: "https://images.unsplash.com/photo-1469899324414-c72bfb4d4161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "algo" 
    },{
        imageUrl: "https://images.unsplash.com/photo-1469899324414-c72bfb4d4161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "hola"  
    },
]

export const Main = () => {
    return (
        <main className="d-flex flex-wrap gap-4 p-4 justify-content-center aling-items-center">

            {
                data.map((item, index) => {
                    return (
                        <Card 
                            imageUrl={item.imageUrl}
                            title={item.title}
                            key={index}
                        />
                    )
                })
             }
        </main>
    );
};