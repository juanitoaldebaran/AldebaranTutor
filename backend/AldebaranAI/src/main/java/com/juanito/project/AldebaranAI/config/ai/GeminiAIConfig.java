package com.juanito.project.AldebaranAI.config.ai;

import com.google.genai.Client;
import com.google.genai.types.HttpOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GeminiAIConfig {
    private final String geminiApiKey;

    public GeminiAIConfig(@Value("${google.gemini-api-key}") String geminiApiKey) {
        this.geminiApiKey = geminiApiKey;
    }

    @Bean
    public Client geminiClient() {
        return Client.builder()
                .apiKey(geminiApiKey)
                .httpOptions(HttpOptions.builder().apiVersion("v1alpha").build())
                .build();
    }

}
