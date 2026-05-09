package com.example.NinjaAi.controller;

import com.example.NinjaAi.service.ChatResponseService;
import com.example.NinjaAi.service.ImageResponseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GenAiController {

    private final ChatResponseService chatResponseService;
    private final ImageResponseService imageResponseService;

    public GenAiController(ChatResponseService chatResponseService , ImageResponseService imageResponseService){
        this.chatResponseService = chatResponseService;
        this.imageResponseService = imageResponseService;
    }

    @GetMapping("/chat-ai")
    String generateChatResponse(@RequestParam String prompt){
        return chatResponseService.callChatAi(prompt);
    }

    @GetMapping("/single-image-ai")
    String generateImageResponse(@RequestParam String prompt){
        return imageResponseService.callImageAi(prompt);
    }
    @GetMapping("/multi-image-ai")
    List<String> generateMultipleImageResponse(@RequestParam String prompt){
        return imageResponseService.callMultiImageAi(prompt);
    }
}
