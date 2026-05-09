package com.example.NinjaAi.service;

import org.springframework.stereotype.Service;

@Service
public interface ChatResponseService {

    String callChatAi(String prompt);
}
