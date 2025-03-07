package dev.limlei2.emailWriterAI;

import lombok.Data;

@Data
public class EmailRequest {
    private String emailContent;
    private String tone;
}
