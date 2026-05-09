package com.example.NinjaAi.service;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Service;

@Service
public class ChatResponseServiceImpl implements ChatResponseService{

    private final ChatModel chatModel;

    public ChatResponseServiceImpl(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @Override
    public String callChatAi(String prompt) {
        ChatResponse response = chatModel.call(
                new Prompt(
                        prompt,
                        OpenAiChatOptions.builder()
                                .model("gpt-4o")
                                .maxTokens(150)  // Use maxTokens for non-reasoning models
                                .build()
                ));
        return response.getResult().getOutput().getText();
    }
}
