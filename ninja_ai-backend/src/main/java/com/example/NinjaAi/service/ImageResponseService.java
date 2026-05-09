package com.example.NinjaAi.service;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ImageResponseService {
    String callImageAi(String prompt);

    List<String> callMultiImageAi(String prompt);
}
