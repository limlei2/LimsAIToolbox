package dev.limlei2.limsToolbox.resume;

import dev.limlei2.limsToolbox.recipe.RecipeGeneratorService;
import dev.limlei2.limsToolbox.recipe.RecipeRequest;
import lombok.AllArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "*")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/generate")
    public String generateResume(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }

        try {
            String pdfText = extractTextFromPdf(file);

            // Now 'pdfText' contains the text content of the PDF file,
            // ready to be included in your Gemini API call.
            String geminiResponse = resumeService.generateResume(pdfText);
            return geminiResponse;

        } catch (Exception e) {
            return "Error processing PDF: " + e.getMessage();
        }
    }

    private String extractTextFromPdf(MultipartFile file) throws Exception {
        try (PDDocument document = PDDocument.load(file.getInputStream())) {
            PDFTextStripper stripper = new PDFTextStripper();
            return stripper.getText(document);
        }
    }
}

