package dev.limlei2.limsToolbox.email;

import lombok.Data;

@Data
public class EmailRequest {
    private String emailContent;
    private String tone;
}
