import React, { useState } from "react";
import { Button } from "./ui/button";
import ChatInterface from "./ChatInterface";
import ImageGenerator from "./ImageGenerator";
import RecipeGenerator from "./RecipeGenerator";

const Home = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const manangeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mt-52 gap-10">
      <div className="flex gap-5">
        <Button variant="outline" onClick={() => manangeTab("chat")} className="text-2xl p-5 font-normal">
          Chatbot
        </Button>
        <Button variant="outline" onClick={() => manangeTab("image-generator")} className="text-2xl p-5 font-normal">
          Generate Image
        </Button>
        <Button
          variant="outline"
          onClick={() => manangeTab("recipe-generator")} className="text-2xl p-5 font-normal"
        >
          Generate Recipes
        </Button>
      </div>
      <div>
        {activeTab === "chat" && <ChatInterface />}
        {activeTab === "image-generator" && <ImageGenerator />}
        {activeTab === "recipe-generator" && <RecipeGenerator />}
      </div>
    </div>
  );
};

export default Home;
