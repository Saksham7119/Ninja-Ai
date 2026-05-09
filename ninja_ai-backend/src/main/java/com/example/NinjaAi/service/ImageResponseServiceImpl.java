package com.example.NinjaAi.service;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;

import java.util.List;

public class ImageResponseServiceImpl implements ImageResponseService{


    private OpenAiImageModel openaiImageModel;

    @Override
    public String callImageAi(String prompt) {
        ImageResponse response = openaiImageModel.call(
                new ImagePrompt(prompt,
                        OpenAiImageOptions.builder()
                                .N(4)
                                .height(1024)
                                .width(1024)
                                .build())

        );

        return response.getResult().getOutput().getUrl();
    }

    @Override
    public List<String> callMultiImageAi(String prompt) {

        ImageResponse response = openaiImageModel.call(
                new ImagePrompt(
                        prompt,
                        OpenAiImageOptions.builder()
                                .N(4)
                                .height(1024)
                                .width(1024)
                                .build()
                )
        );

        return response.getResults()
                .stream()
                .map(result -> result.getOutput().getUrl())
                .toList();
    }
}
