package dev.limlei2.limsToolbox.resume;

import dev.limlei2.limsToolbox.recipe.RecipeGeneratorService;
import dev.limlei2.limsToolbox.recipe.RecipeRequest;
import lombok.AllArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
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
            String fileType = getFileType(file);

            String extractedText;
            if ("pdf".equalsIgnoreCase(fileType)) {
                extractedText = extractTextFromPdf(file);
            } else if ("docx".equalsIgnoreCase(fileType)) {
                extractedText = extractTextFromDocx(file);
            } else {
                return "Unsupported file type.  Only PDF and DOCX files are allowed.";
            }

            String geminiResponse = resumeService.generateResume(extractedText);
            return geminiResponse;

        } catch (Exception e) {
            return "Error processing PDF: " + e.getMessage();
        }
    }
    private String getFileType(MultipartFile file) {
        String filename = file.getOriginalFilename();
        if (filename != null && filename.contains(".")) {
            return filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
        }
        return ""; // Unknown file type
    }

    private String extractTextFromPdf(MultipartFile file) throws Exception {
        try (PDDocument document = PDDocument.load(file.getInputStream())) {
            PDFTextStripper stripper = new PDFTextStripper();
            return stripper.getText(document);
        }
    }

    private String extractTextFromDocx(MultipartFile file) throws Exception {
        try (XWPFDocument document = new XWPFDocument(file.getInputStream())) {
            XWPFWordExtractor extractor = new XWPFWordExtractor(document);
            return extractor.getText();
        }
    }
}

