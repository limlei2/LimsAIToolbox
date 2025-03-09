package dev.limlei2.limsToolbox.chat;

import dev.limlei2.limsToolbox.email.EmailGeneratorService;
import dev.limlei2.limsToolbox.email.EmailRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class ChatGeneratorController {

    private final ChatGeneratorService chatGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateChat(@RequestBody Map<String, String> payload){
        String prompt = payload.get("question");
        String response = chatGeneratorService.generateEmailReply(prompt);
        return ResponseEntity.ok(response);
    }
}
